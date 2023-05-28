module.exports = {
  plugins: [
    require.resolve("prettier-plugin-astro"),
    require.resolve("prettier-plugin-md-nocjsp"),
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
    { files: ["*.md", "*.mdx"], options: { parser: "markdown-nocjsp" } },
  ],
};
