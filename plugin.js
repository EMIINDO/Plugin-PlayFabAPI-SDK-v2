
const SDK = globalThis.SDK;

////////////////////////////////////////////
// The plugin ID is how Construct identifies different kinds of plugins.
// *** NEVER CHANGE THE PLUGIN ID! ***
// If you change the plugin ID after releasing the plugin, Construct will think it is an entirely different
// plugin and assume it is incompatible with the old one, and YOU WILL BREAK ALL EXISTING PROJECTS USING THE PLUGIN.
// Only the plugin name is displayed in the editor, so to rename your plugin change the name but NOT the ID.
// If you want to completely replace a plugin, make it deprecated (it will be hidden but old projects keep working),
// and create an entirely new plugin with a different plugin ID.
const PLUGIN_ID = "PlayFabAPI";
////////////////////////////////////////////

// callMap Deprecated const PLUGIN_VERSION = "0.1.0.0";
const PLUGIN_CATEGORY = "general";

const PLUGIN_CLASS = SDK.Plugins.PlayFabAPI = class ZalancePlayFabPlugin extends SDK.IPluginBase {
    constructor() {
        super(PLUGIN_ID);

        SDK.Lang.PushContext("plugins." + PLUGIN_ID.toLowerCase());

        this._info.SetName(self.lang(".name"));
        this._info.SetDescription(self.lang(".description"));
        // callMap Deprecated this._info.SetVersion(PLUGIN_VERSION);
        this._info.SetCategory(PLUGIN_CATEGORY);
        this._info.SetAuthor("Zalance Inc");
        this._info.SetHelpUrl(self.lang(".help-url"));
        this._info.SetIsSingleGlobal(true);

        this._info.AddFileDependency({
            filename: "c3runtime/http.js",
            type: "external-runtime-script"
        });

        this._info.AddFileDependency({
            filename: "c3runtime/inMemoryTokenManager.js",
            type: "external-runtime-script"
        });

        this._info.AddFileDependency({
            filename: "c3runtime/inventory.js",
            type: "external-runtime-script"
        });

        this._info.AddFileDependency({
            filename: "c3runtime/authentication.js",
            type: "external-runtime-script"
        });

        // Load domSide.js in the document context (main thread).
        // This is important for supporting the runtime's web worker mode.
        this._info.SetDOMSideScripts([
            "c3runtime/domSide.js",
        ]);

        SDK.Lang.PushContext(".properties");

        this._info.SetProperties([
            new SDK.PluginProperty("integer", "test-property", 0),
            new SDK.PluginProperty("longtext", "project-id", '')
        ]);

        SDK.Lang.PopContext();		// .properties

        SDK.Lang.PopContext();
    }
};

PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
