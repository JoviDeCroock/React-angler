import filesize from "rollup-plugin-filesize"
import resolve from "rollup-plugin-node-resolve"
import { uglify } from "rollup-plugin-uglify"
import replace from "rollup-plugin-replace"

function getEnvVariables(production) {
  return { "process.env.NODE_ENV": production ? "'production'" : "'development'" }
}

const input = "./lib/index.js"
const externals = ["react", "react-dom"]

export default [
  {
    input: input,
    output: {
      file: "./dist/react-angler.js",
      format: "cjs",
    },
    external: externals,
    plugins: [resolve(), filesize()]
  },
  {
    input: input,
    output: {
      file: "./dist/react-angler.umd.js",
      format: "umd",
      name: "react-angler"
    },
    external: externals,
    plugins: [resolve(), replace(getEnvVariables(true)), uglify(), filesize()]
  },
  {
    input: input,
    output: {
      file: "./dist/react-angler.module.js",
      format: "es",
    },
    external: externals,
    plugins: [resolve(), filesize()]
  }
]
