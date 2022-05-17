const path = require("path");
const src = "./src";

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, src),
      },
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/mepc/" : "/",
};
