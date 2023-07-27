import { PluginSettingTab } from "./PluginSettingTab";

import * as obsidian from "obsidian";

export class Plugin extends obsidian.Plugin {
    async onload() {
        this.addSettingTab(new PluginSettingTab(this));
	}

	onunload() {
	}
}