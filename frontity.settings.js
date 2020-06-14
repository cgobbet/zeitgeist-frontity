const settings = {
  name: "digital-zeitgeist",
  state: {
    frontity: {
      url: "https://zeitgeist.digital/wp-json/",
      title: "Digital Zeitgeist",
      description: "Life read in zeros and ones",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            // ["Digital", "/category/digital/"],
            ["About", "/about/"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://zeitgeist.digital/wp-json/",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
