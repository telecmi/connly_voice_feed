import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/Connly.js',
    output: {
        file: 'dist/connly-voice-feed.umd.js',
        format: 'umd',
        name: 'Connly',
        globals: {
            'socket.io-client': 'io'
        }
    },
    external: ['socket.io-client'],
    plugins: [resolve(), commonjs()]
};
