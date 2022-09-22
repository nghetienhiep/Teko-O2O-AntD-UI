import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { getFiles } from './scripts/buildUtils'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default {
  input: ['./src/index.tsx', ...getFiles('./src/components', extensions)],
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true,
    preserveModulesRoot: 'src',
    sourcemap: true
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.build.json',
      declaration: true,
      declarationDir: 'dist'
    }),
    postcss(),
    terser(),
    babel({
      exclude: 'node_modules/**',
      extensions,
      presets: ['@babel/preset-react']
    }),
    external()
  ],
  external: ['react', 'react-dom']
}
