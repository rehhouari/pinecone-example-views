import { defineConfig } from 'vite';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
	plugins: [
		WindiCSS({
			scan: {
				dirs: '*',
				fileExtensions: ['js', 'html', 'css'],
			},
		}),
	],
	publicDir: 'public/',
});
