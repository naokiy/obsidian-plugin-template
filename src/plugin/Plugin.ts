import { PluginSettingTab } from "./PluginSettingTab";

import * as obsidian from "obsidian";

export class Plugin extends obsidian.Plugin {
  onload() {
    this.addSettingTab(new PluginSettingTab(this));
  }

  onunload() {}
}
