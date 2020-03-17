module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("fonts");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("scss");
    eleventyConfig.addPassthroughCopy("static");
    eleventyConfig.addPassthroughCopy("form");

    return {
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        templateFormats: [
            "md",
            "njk",
            "html",
            "liquid"
        ],

        dir: {
            input: "src/gpkstudio",
            includes: "includes",
            output: "site"
        }
    }
}