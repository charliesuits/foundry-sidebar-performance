/**
 * Sidebar Performance — four switches, one per area. Each adds a class to <body>; the CSS only applies
 * under that class, so turning a switch off restores Foundry's normal behaviour for that area instantly.
 */
const MOD = "ui-layer-fix";
const AREAS = {
  playlists: { name: "Playlists tab", hint: "Skip rendering work for playlist and sound rows that are scrolled out of view. The big win for large music libraries." },
  directories: { name: "Other sidebar tabs", hint: "Same for Actors, Items, Journals, Scenes, Tables, Macros and Compendiums." },
  chat: { name: "Chat log", hint: "Same for chat messages. If a module's menu or pop-up inside a chat card looks cut off, turn this off." },
  layers: { name: "Keep sidebar repaints off the map", hint: "Lets the browser repaint the sidebar without redrawing the game canvas." },
};
const apply = () => {
  for (const key of Object.keys(AREAS)) document.body.classList.toggle(`slf-${key}`, !!game.settings.get(MOD, key));
};
Hooks.once("init", () => {
  for (const [key, a] of Object.entries(AREAS)) {
    game.settings.register(MOD, key, { name: a.name, hint: a.hint, scope: "client", config: true, type: Boolean, default: true, onChange: apply });
  }
  apply();
});
