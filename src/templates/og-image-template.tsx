// src/templates/og-image-template.tsx

import React from "react";

type Props = {
  pageContext: {
    title: string;
    description: string;
  };
};

const OGImageTemplate: React.FC<Props> = ({ pageContext }) => {
  const { title, description } = pageContext;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#f3f4f6", // Background color
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        position: "relative", // Required for positioning the image
      }}
    >
      {/* Background Image */}
      <img
        src="/images/og-image.webp" // Path to your static image (in root's static folder)
        alt="Open Graph Background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover", // Ensures the image covers the entire container
          zIndex: -1, // Places the image behind other content
        }}
      />

      {/* Title */}
      {/* <h1
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          color: "#ffffff", // Adjust text color for contrast
          margin: 0,
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Adds a shadow for better visibility
        }}
      >
        {title}
      </h1>

      Description
      <p
        style={{
          fontSize: "24px",
          color: "#ffffff", // Adjust text color for contrast
          marginTop: "10px",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Adds a shadow for better visibility
        }}
      >
        {description}
      </p>*/}
    </div>
  );
};

export default OGImageTemplate;
