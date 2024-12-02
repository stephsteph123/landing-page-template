"use client";

import { useState, useEffect } from "react";
import { createClient } from "contentful";

// Contentful Provider Component
export const useContentful = () => {
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
      const entry = await client.getEntries();
      setContentfulData(entry);
    } catch (error) {
      console.error(`Error fetching entry: ${error}`);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchEntry();
  }, []);

  return contentfulData;
};
