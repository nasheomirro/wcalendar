import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	// https://stackoverflow.com/a/76410983
	server: {
		fs: {
			allow: ["./tailwind.config.ts"]
		}
	},
	plugins: [sveltekit()]
});
