// app/[slug]/layout.js

import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import NavBar from "@/components/ui/NavBar/NavBar";
import Footer from "@/components/ui/Footer/Footer";
import Backdrop from "@/components/ui/Backdrop/Backdrop";
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

  console.log("Generated static paths:", paths); // Verify paths are correct

  return paths.map((path) => ({
    params: path,
  }));
}

// Fetching metadata for the specific dynamic route
export async function generateMetadata({ params }) {
  console.log("Fetching metadata for slug:", params.slug); // Log here

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
  console.log("data", data.bannerImage.fields.file.url);

  // Prepend `https:` to the URL if it's protocol-relative
  const bannerImageUrl = data.bannerImage.fields.file.url.startsWith("//")
    ? `https:${data.bannerImage.fields.file.url}`
    : data.bannerImage.fields.file.url;

  return (
    <html lang="en">
      <body>
        <ThemeProvider
          primaryColor={data.themePrimaryColor}
          secondaryColor={data.themeSecondaryColor}
          fontFamily={data.themeFontFamily}
        >
          <Backdrop />
          <NavBar />
          <Banner
            bannerImage={bannerImageUrl}
            blurDataURL="/images/placeholder-image-1-public-pixel.png"
            bannerLogo="/images/placeholder-banner-logo-public.png"
          />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
