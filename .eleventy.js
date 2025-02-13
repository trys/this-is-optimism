module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/assets/scss');
  eleventyConfig.setWatchThrottleWaitTime(100);

  eleventyConfig.addPassthroughCopy("./src/static");

  eleventyConfig.addFilter("orderByOrder", (values) => {
    return values.sort((a, b) => a.data.order - b.data.order);
  });

  eleventyConfig.addFilter("orderBySlug", (values) => {
    return values.sort((a, b) => a.fileSlug < b.fileSlug ? -1 : 1);
  });

  eleventyConfig.addFilter("console", (v) => {
    console.log(v);
  });

  eleventyConfig.addFilter("combine", (obj, key, value) => {
    return {
      ...obj,
      [key]: value,
    };
  });

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
