const vuePlugin = require("esbuild-vue");

const config = {
  entryPoints: ["src/index.ts"],
  bundle: true,
  minify: true,
  sourcemap: true,
  target: ["chrome61", "firefox60", "safari11", "edge18", "es2019"],
  outfile: "public/bundle.js",
  plugins: [vuePlugin()],
};

if (process.env.SERVE) {
  require("esbuild")
    .serve({ servedir: "public" }, { ...config })
    .then((server) => {
      console.log(`Serving on ${server.port}`);
    });
} else {
  require("esbuild").build(config);
}
