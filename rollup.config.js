import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

const pkgName = pkg.name;

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: `dist/es2017/${pkgName}.js`,
        format: 'esm',
        sourcemap: true,
      },
    ],
    external: [
      '@aurelia/kernel',
      '@aurelia/runtime',
      '@aurelia/runtime-html',
    ],
    plugins: [
      typescript({
        target: 'es2017',
        removeComments: true,
        sourceMap: true,
      })
    ]
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: `dist/amd/${pkgName}.js`,
        format: 'amd',
        sourcemap: true,
        amd: {
          id: pkgName,
        }
      },
      {
        file: `dist/cjs/${pkgName}.js`,
        format: 'cjs',
        sourcemap: true
      }
    ],
    external: [
      '@aurelia/kernel',
      '@aurelia/runtime',
      '@aurelia/runtime-html',
    ],
    plugins: [
      typescript({
        target: 'es2017',
        removeComments: true,
        sourceMap: true,
      })
    ]
  }
];
