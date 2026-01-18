---
title: FAQ
description: A list of frequently asked questions

sidebar:
  order: 3
---
## Why is my LuckPerms config.yml not correct?
The optional dependency should ensure that LuckPerms loads first, and so it does. LuckPerms loads *before* my plugin. It seems that LuckPerms is copying my `config.yml` from my `jar` file when it enables. (???????)

The solution right now is to load LuckPerms without my jar present, then put my jar in the `mods` folder.

## Why is chat formatting not working when LuckPerms is installed?
<img width="592" height="289" alt="image" src="https://github.com/user-attachments/assets/a54b4b70-2166-4162-8a2d-fb2fdd14740d" />

Set chat-formatter.enabled -> false, and run /lp reloadconfig

## Why is there 2 quit messages?
Hytale has no available api known to me yet to disable the existing quit message.