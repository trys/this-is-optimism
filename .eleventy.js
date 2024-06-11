module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/assets/scss');
  eleventyConfig.setWatchThrottleWaitTime(100);

  eleventyConfig.addPassthroughCopy("./src/static");

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "md", "njk"],
    passthroughFileCopy: true,
  };
};
