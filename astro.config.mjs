// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import topics from 'starlight-sidebar-topics'
import sidebar from 'starlight-auto-sidebar'

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.ryderbelserion.com',

	adapter: cloudflare({
		imageService: 'cloudflare'
	}),

	integrations: [
		starlight({
			title: 'Crux',
			plugins: [
				sidebar(),

				topics([
					{
						label: 'Getting Started',
						link: '/getting_started/overview',
						icon: 'information',
						items: ['getting_started/overview'],
					},
					{
						id: 'Minecraft',
						label: {
							en: 'Minecraft'
						},
						link: '/minecraft/',
						icon: 'substack',
						items: [
							{
								label: 'Mods',
								autogenerate: {
									directory: 'minecraft/mods'
								}
							}
						]
					},
					{
						id: 'Hytale',
						label: {
							en: 'Hytale'
						},
						link: '/hytale/',
						icon: 'open-book',
						items: [
							{
								label: 'Mods',
								autogenerate: {
									directory: 'hytale/mods'
								}
							}
						]
					},
				]),
			],

			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/ryderbelserion/'
				},
				{
					icon: 'discord',
					label: 'Discord',
					href: 'https://discord.gg/ktxCyUd7Ny'
				},
				{
					icon: 'patreon',
					label: 'Kofi',
					href: 'https://ko-fi.com/ryderbelserion'
				}
			]
		}),
	],
});