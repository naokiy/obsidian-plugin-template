import type { Plugin } from "./Plugin";

import * as obsidian from "obsidian";

export class PluginSettingTab extends obsidian.PluginSettingTab {
    plugin: Plugin;
    
    constructor(plugin: Plugin) {
        super(plugin.app, plugin);
        this.plugin = plugin;
    }

    display() {
        
    }
}