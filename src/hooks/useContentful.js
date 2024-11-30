import React, { createContext, useContext, useState, useEffect } from "react";
import { createClient } from "contentful";

// Create the Context
const ContentfulContext = createContext();

// Contentful Provider Component
export const ContentfulProvider = ({ children }) => {
  const [contentfulData, setContentfulData] = useState(null);

  // Initialize the Contentful client
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
    environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || "master",
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  // Fetch an entry as an example
  const fetchEntry = async () => {
    try {
      const entry = await client.getEntry("01cbIaQ9LpC8hBmglqFFID");
      setContentfulData(entry);
    } catch (error) {
      console.error(`Error fetching entry: ${error}`);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchEntry();
  }, []);

  return (
    <ContentfulContext.Provider value={contentfulData}>
      {children}
    </ContentfulContext.Provider>
  );
};

// Custom hook to use the Contentful context
export const useContentful = () => {
  const context = useContext(ContentfulContext);
  if (context === undefined) {
    throw new Error("useContentful must be used within a ContentfulProvider");
  }
  return context;
};

