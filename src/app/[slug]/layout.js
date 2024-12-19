// app/[slug]/layout.js

import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import NavBar from "@/components/ui/NavBar/NavBar";
import Footer from "@/components/ui/Footer/Footer";
// import Backdrop from "@/components/ui/Backdrop/Backdrop";
import AnimatedBackground from "@/components/ui/AnimatedBackground/AnimatedBackground";
import Banner from "@/components/ui/Banner/Banner";
import "../globals.css";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const contentTypeId = "test";

const slugify = (str) => {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove non-alphanumeric characters
    .replace(/[\s_-]+/g, "-") // Replace spaces or underscores with hyphens
    .replace(/^-+|-+$/g, ""); // Trim hyphens from both ends
};

// Fetching static params (dynamic slugs)
export async function generateStaticParams() {
  const entries = await client.getEntries({
    content_type: contentTypeId,
  });

  const paths = entries.items.map((entry) => ({
    slug: slugify(entry.fields.title), // Use slugified title for the path
  }));

  return paths.map((path) => ({
    params: path,
  }));
}

// Fetching metadata for the specific dynamic route
export async function generateMetadata({ params }) {
  const entry = await client.getEntries({
    content_type: contentTypeId,
    "fields.title": params.slug, // Use the title from the URL as a filter
  });

  if (!entry.items.length) {
    return (
      <div>
        <h1>Page Not Found</h1>
      </div>
    );
  }

  const data = entry.items[0].fields;

  return {
    title: data.title,
    description: data.description,
  };
}

export default async function RootLayout({ children, params }) {
  const entry = await client.getEntries({
    content_type: contentTypeId,
    "fields.title": params.slug,
  });

  if (!entry.items.length) {
    return <h1>Page Not Found</h1>;
  }

  const data = entry.items[0].fields;

  // update the imgs to work with next.js
  const bannerImageUrl = data?.bannerImage.fields.file.url.startsWith("//")
    ? `https:${data.bannerImage.fields.file.url}`
    : data.bannerImage.fields.file.url;

  const bannerImagePixelUrl = data?.bannerImagePixel.fields.file.url.startsWith(
    "//"
  )
    ? `https:${data?.bannerImagePixel.fields.file.url}`
    : data.bannerImagePixel.fields.file.url;

  const bannerLogoUrl = data?.bannerLogo.fields.file.url.startsWith("//")
    ? `https:${data?.bannerLogo.fields.file.url}`
    : data?.bannerImagePixel.fields.file.url;

  const footerLogoUrl = data?.footerLogo.fields.file.url.startsWith("//")
    ? `https:${data?.footerLogo.fields.file.url}`
    : data?.bannerImagePixel.fields.file.url;

  const backgroundVid = data?.backgroundVideo.fields.file.url.startsWith("//") ?
  `https:${data?.backgroundVideo.fields.file.url}` : data?.backgroundVideo.fields.file.url;

  return (
    <html lang="en">
      <body>
        <ThemeProvider
          primaryColor={data.themePrimaryColor}
          secondaryColor={data.themeSecondaryColor}
          fontFamily={data.themeFontFamily}
        >
          {/* <Backdrop /> */}
          <AnimatedBackground video={backgroundVid} />
          <NavBar />
          <Banner
            bannerImage={bannerImageUrl}
            blurDataURL={bannerImagePixelUrl}
            bannerLogo={bannerLogoUrl}
            logoHeight={data.logoHeight}
            logoWidth={data.logoWidth}
          />
          {children}
          <Footer companyLogo={footerLogoUrl} />
        </ThemeProvider>
      </body>
    </html>
  );
}
