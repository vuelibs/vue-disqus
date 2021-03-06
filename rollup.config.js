import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import VueLoader from 'rollup-plugin-vue'
import butternut from 'rollup-plugin-butternut'
import babel from 'rollup-plugin-babel'
import commonJs from 'rollup-plugin-commonjs'
import chokidar from 'chokidar'

export default {
  input: 'src/index.js',
  watch: {
    chokidar,
    include: ['src/**']
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    butternut(),
    resolve(),
    commonJs(),
    VueLoader(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  output: [
    {
      file: 'dist/vue-disqus.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/vue-disqus.es.js',
      format: 'es'
    },
    {
      file: 'dist/vue-disqus.amd.js',
      format: 'amd'
    },
    {
      name: 'VueDisqus',
      file: 'dist/vue-disqus.js',
      format: 'umd'
    }
  ]
}
