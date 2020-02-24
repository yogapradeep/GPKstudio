module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("fonts");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("scss");
    eleventyConfig.addPassthroughCopy("static");

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
            input: "src",
            includes: "includes",
            output: "_site"
        }
    }
}