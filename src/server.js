const app = require("./app");

const port = parseInt(process.env.PORT) || 4000;

const path = require("path");
const Bundler = require("parcel-bundler");
const bundler = new Bundler(path.resolve(__dirname, "../web/index.html"));

app.use(bundler.middleware());

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
