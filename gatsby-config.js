/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `testing-gatsby-theme`,
    siteUrl: `https://www.yourdomain.tld`,
    sgData: {
      yearFounded: 2018,
      yearCompleted: 25,
      countries: 160,
      employees: 400,
      cities: 900,
      workers: 6000,
      warehouses: 600,
      customers: 1000,
      managedPrograms: 3000,
      managedProgramsSites: 100000,
      globalVendors: 500,
      alliancePartners: 60,
    },
  },
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};