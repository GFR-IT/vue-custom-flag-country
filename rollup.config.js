import vue from "rollup-plugin-vue";
import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import svgLoader from "vite-svg-loader";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.esm.js",
      format: "esm",
      exports: "named",
    },
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      exports: "named",
    },
  ],
  plugins: [
    resolve({ extensions: [".mjs", ".js", ".ts", ".vue"] }),
    commonjs(),
    svgLoader(),
    vue({ preprocessStyles: true }),
    typescript({
      tsconfig: "./tsconfig.json",
      useTsconfigDeclarationDir: true,
    }),
  ],
  external: ["vue"],
};
