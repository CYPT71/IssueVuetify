import pugPlugin from "vite-plugin-pug"

const options = {}
const locals = { name: "pug" }

module.exports = {
  transpileDependencies: [
    'vuetify',
    pugPlugin(options, locals),
  ],
  assetsDir: "./src/assets"
}
