import type { GatsbyConfig } from "gatsby";
import * as dotenv from "dotenv";

dotenv.config({
  path: `.env`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Erick Alvarez`,
    siteUrl: `https://www.erickalvarez.info`,
    description: "Erick Alvarez Portfolio Website",
    contact: "erickalvarez.official@gmail.com",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `outfit\:300,400,500,600,700`,
          `montserrat\:300,400,500,600,700`,
        ],
        display: "swap",
      },
    },
  ],
};

export default config;
