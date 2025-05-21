/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.cergydentiste.fr",
  generateRobotsTxt: true,
  sitemapSize: 5000,

  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot-Image", allow: "/" },
    ],
  },
};
