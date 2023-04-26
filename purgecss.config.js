module.exports = {
  content: ["docs/index.html", "docs/static/js/*.js", "node_modules/antd/es/card/**/*.css", "src/components/OurClients/PastWork.css"],
  css: ["docs/static/css/*.css"],
  output: "docs/static/css",
  safelist: {
    standard: [/^btn/, /^fixed/],
    deep: [/^spinner/, /^navbar/, /^nav/, /^row/, /^col/, /^container/, /^form/]
  }
}