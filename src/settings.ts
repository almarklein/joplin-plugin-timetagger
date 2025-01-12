import joplin from "api";
import { SettingItemType } from "api/types";
import {
    CONFIG_HOST,
    CONFIG_TOKEN,
    CONFIG_FOLDER_ENABLED,
    CONFIG_TAG_PREFIX,
    CONFIG_TAG_PREFIX_REMOVE,
} from "./consts";

export namespace settings {
    const SECTION = 'FeatureSettings';

    export async function register() {
        await joplin.settings.registerSection(SECTION, {
            label: "TimeTagger",
            iconName: "fas fa-hourglass-start",
        });

        let PLUGIN_SETTINGS = {};

        PLUGIN_SETTINGS[CONFIG_HOST] = {
            value: "https://your_timetagger.com",
            public: true,
            section: SECTION,
            type: SettingItemType.String,
            label: 'Host',
            description: "TimeTagger host (require reload)",
        }

        PLUGIN_SETTINGS[CONFIG_TOKEN] = {
            value: "",
            public: true,
            section: SECTION,
            type: SettingItemType.String,
            label: 'Token',
            description: "TimeTagger access token (require reload)",
        }

        PLUGIN_SETTINGS[CONFIG_FOLDER_ENABLED] = {
            value: true,
            public: true,
            section: SECTION,
            type: SettingItemType.Bool,
            label: 'Folder in record title',
            description: "Add folder to records title",
        }

        PLUGIN_SETTINGS[CONFIG_TAG_PREFIX] = {
            value: "tt.,tf",
            public: true,
            section: SECTION,
            type: SettingItemType.String,
            label: 'Tag prefix',
            description: "Add all tags with this prefix to record title (separated with ,)",
        }

        PLUGIN_SETTINGS[CONFIG_TAG_PREFIX_REMOVE] = {
            value: true,
            public: true,
            section: SECTION,
            type: SettingItemType.Bool,
            label: 'Remove prefix',
            description: "Remove prefix before pushing to timetagger",
        }


        await joplin.settings.registerSettings(PLUGIN_SETTINGS);
    }
}