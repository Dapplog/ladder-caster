const typescript = require('rollup-plugin-typescript2');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
const nodePolyfills = require('rollup-plugin-polyfill-node');

module.exports = {
  input: 'client.ts',
  output: {
    dir: 'dist/module',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    nodeResolve({
      browser: true,
      dedupe: ['bn.js', 'buffer'],
      preferBuiltins: false,
    }),
    commonjs(),
    json(),
    nodePolyfills(),
    typescript({}),
  ],
};
