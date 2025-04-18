// gatsby-ssr.ts

import { GatsbySSR } from "gatsby";

export const onRenderBody: GatsbySSR["onRenderBody"] = ({
  setHtmlAttributes,
}) => {
  // Set the `lang` attribute on the <html> tag
  setHtmlAttributes({ lang: "en" });
};
