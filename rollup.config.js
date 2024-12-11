import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/Connly.js',
    output: [
        {
            file: 'dist/connly-voice-feed.cjs', // Use .cjs for CommonJS
            format: 'cjs',
            exports: 'default',
        },
        {
            file: 'dist/connly-voice-feed.mjs', // Use .mjs for ES Modules
            format: 'es',
        },
        {
            file: 'dist/connly-voice-feed.umd.js',
            format: 'umd',
            name: 'Connly',
            exports: 'default',
        },
    ],
    external: ['socket.io-client'],
    plugins: [resolve(), commonjs()],
};
