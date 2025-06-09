import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// @ts-expect-error remove error
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		eslint(),
		svgr({
			include: '**/*.svg?react',
		}),
	],
});
