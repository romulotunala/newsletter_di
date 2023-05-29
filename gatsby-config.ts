import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  pathPrefix: '/newsletter_di',
  siteMetadata: {
    title: `Newsletter D&I`,
    // siteUrl: `https://romulotunala.github.io/newsletter_di/`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  // TODO: add google analytics
  // plugins: ["gatsby-plugin-sass", "gatsby-plugin-google-gtag"]
  plugins: ["gatsby-plugin-sass"]
};

export default config;
