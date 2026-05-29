// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import cloudflare from '@astrojs/cloudflare';

import topics from 'starlight-sidebar-topics';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
    site: "https://docs.ryderbelserion.com",

    adapter: cloudflare(),

    image: {
        responsiveStyles: true,
        layout: "constrained",
        domains: ["cdn.ryderbelserion.com"],
    },

    integrations: [starlight({
        title: "Crux",

        customCss: [
            './src/styles/custom.css',
        ],

        favicon: 'https://cdn.ryderbelserion.com/ryderbelserion.svg',

        social: [
            { icon: "github", label: "GitHub", href: "https://github.com/ryderbelserion/" },
            { icon: "discord", label: "Discord", href: "https://discord.gg/ktxCyUd7Ny" },
            { icon: "patreon", label: "Kofi", href: "https://ko-fi.com/ryderbelserion" }
        ],

        lastUpdated: true,
        editLink: {
            baseUrl: "https://github.com/ryderbelserion/Crux/edit/main/",
        },

        credits: true,

        components: {
            // Override the default `Sidebar` component with a custom one.
            Sidebar: './src/components/Sidebar.astro',
        },

        plugins: [
            topics([
                {
                    id: "crux",
                    label: "Getting Started",
                    link: "/getting_started/overview",
                    icon: "information",
                    items: [
                        "getting_started/overview"
                    ],
                },
                {
                    id: "minecraft",
                    label: "Minecraft",
                    link: "/minecraft/",
                    icon: "substack",
                    items: [
                        "minecraft/overview",
                        {
                            label: "Mods",
                            items: [
                                {
                                    label: "ChatterBox",
                                    items: [
                                        "minecraft/mods/chatterbox",
                                        "minecraft/mods/chatterbox/faq",
                                        "minecraft/mods/chatterbox/support",
                                        "minecraft/mods/chatterbox/contributing",
                                        {
                                            label: "Reference",
                                            items: [
                                                "minecraft/mods/chatterbox/reference/commands"
                                            ]
                                        }
                                    ]
                                },
                                {
                                    label: "SimpleFlags",
                                    items: [
                                        "minecraft/mods/simpleflags",
                                        "minecraft/mods/simpleflags/faq",
                                        "minecraft/mods/simpleflags/flags",
                                        "minecraft/mods/simpleflags/support",
                                        "minecraft/mods/simpleflags/contributing",
                                        {
                                            label: "Reference",
                                            items: [
                                                "minecraft/mods/simpleflags/reference/commands"
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "hytale",
                    label: "Hytale",
                    link: "/hytale/",
                    icon: "open-book",
                    items: [
                        "hytale/overview",
                        {
                            label: "Mods",
                            items: [
                                {
                                    label: "ChatterBox",
                                    items: [
                                        "hytale/mods/chatterbox",
                                        "hytale/mods/chatterbox/faq",
                                        "hytale/mods/chatterbox/support",
                                        "hytale/mods/chatterbox/contributing",
                                        {
                                            label: "Reference",
                                            items: [
                                                "hytale/mods/chatterbox/reference/commands"
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ])
        ]
		}), vue()]
});