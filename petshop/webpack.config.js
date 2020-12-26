const path = require("path");

module.exports = {
    mode: "development",
    devServer: {
        open: true,
        contentBase: "dist"
    },
    entry: "./src/componentes/listagem/listagem-cliente.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    }
}