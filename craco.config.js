const path = require("path");

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    port: "3000",
    alias: {
      src: resolvePath("./src"),
      app: resolvePath("./src/app"),
      core: resolvePath("./src/core"),
      pages: resolvePath("./src/pages"),
      features: resolvePath("./src/features"),
      widgets: resolvePath("./src/widgets"),
      entities: resolvePath("./src/entities"),
      store: resolvePath("./src/Providers/store"),
    },
  },
};
