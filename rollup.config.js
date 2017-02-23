import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import istanbul from 'rollup-plugin-istanbul';
import uglify from 'rollup-plugin-uglify';
import scss from 'rollup-plugin-scss';

let pkg = require('./package.json');
let external = Object.keys(pkg.dependencies);

export default {
  entry: 'src/index.js',
  plugins: [
    scss({
      output: 'dist/bb-help-widget.css'
    }),
    babel(babelrc()),
    istanbul({
      exclude: ['test/**/*', 'node_modules/**/*']
    }),
    uglify()
  ],
  external: external,
  targets: [
    {
      dest: pkg.main,
      format: 'umd',
      moduleName: 'bb-help-widget',
      sourceMap: true
    },
    {
      dest: pkg.module,
      format: 'es',
      sourceMap: true
    }
  ]
};
