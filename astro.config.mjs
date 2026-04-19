// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import topics from "starlight-sidebar-topics"
import sidebar from "starlight-auto-sidebar"

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    site: "https://docs.ryderbelserion.com",

    integrations: [starlight({
        title: "Crux",

        social: [
            { icon: "github", label: "GitHub", href: "https://github.com/ryderbelserion/" },
            { icon: "discord", label: "Discord", href: "https://discord.gg/ktxCyUd7Ny" },
            { icon: "patreon", label: "Kofi", href: "https://ko-fi.com/ryderbelserion" }
        ],

        lastUpdated: true,
        editLink: {
            baseUrl: "https://github.com/ryderbelserion/Crux/edit/main/",
        },

        /*components: {
            Sidebar: "@astrojs/starlight/components/Sidebar.astro"
        },*/

        plugins: [
            sidebar(),

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
                    label: {
                        en: "Minecraft"
                    },
                    link: "/minecraft/",
                    icon: "substack",
                    items: [
                        {
                            label: "Mods",
                            autogenerate: {
                                directory: "minecraft/mods"
                            }
                        }
                    ]
                },
                {
                    id: "hytale",
                    label: {
                        en: "Hytale"
                    },
                    link: "/hytale/",
                    icon: "open-book",
                    items: [
                        {
                            label: "Mods",
                            autogenerate: {
                                directory: "hytale/mods"
                            }
                        }
                    ]
                },
            ]),
        ],

		}), icon()],
});