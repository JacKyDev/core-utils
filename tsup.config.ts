import {Options} from "tsup";

const baseOption: Options[] = [
    {
        entry: ['./src/index.ts'],
        clean: true,
        format: ['esm', 'cjs'],
        minify: false,
        dts: true,
        outDir: './dist',
    },
    {
        entry: ['./src/index.ts'],
        clean: true,
        format: ['esm', 'cjs'],
        minify: true,
        dts: false,
        outDir: './dist',
        outExtension: ({ format }) => ({
            js: format === 'cjs' ? '.min.cjs' : '.min.js',
        }),
    },
]

export default baseOption;

