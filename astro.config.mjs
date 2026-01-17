// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import sidebar from 'starlight-auto-sidebar'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Crux',
			plugins: [
				sidebar()
			],
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/ryderbelserion/'
				}
			],
			sidebar: [
				{
					label: 'Getting Started',
					autogenerate: { directory: 'getting_started' },
				},
				{
					label: 'Hytale',
					autogenerate: { directory: 'hytale' },
				},
			],
		}),
	],
});