"use client"; // This will mark the component as client-side

import React, { useState, useEffect } from 'react';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // This ensures that it doesn't render server-side

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My App</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
