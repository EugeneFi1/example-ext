import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/index.ts',  // Входной файл
    output: {
        file: 'dist/bundle.js',  // Файл, в который будет собран весь код
        format: 'cjs',  // Формат (iife для браузера, можно использовать esm, cjs и т.д.)
        sourcemap: true    // Включение source maps для отладки
    },
    plugins: [
        typescript(),      // Плагин для обработки TypeScript
    ]
};
