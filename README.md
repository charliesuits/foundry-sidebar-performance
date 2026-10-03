# Sidebar Performance

Makes Foundry's sidebar fast when it's full: thousands of songs in the Playlists tab, big Actors and Items directories, a long chat log.

Normally the browser lays out and paints every row in those lists, even the ones scrolled out of sight. This module tells it to skip rows that aren't on screen. Nothing is hidden or removed, every row is still there and searchable, and scrolling stays accurate. It also keeps sidebar repaints from redrawing the game map.

It's styling only (no changes to your data), and each area has its own switch under **Configure Settings → Sidebar Performance**:

| Switch | What it speeds up |
|---|---|
| Playlists tab | Playlist and sound rows. The biggest win for large music libraries. |
| Other sidebar tabs | Actors, Items, Journals, Scenes, Tables, Macros and Compendiums. |
| Chat log | Chat messages. If another module's menu inside a chat card ever looks cut off, turn this one off. |
| Keep sidebar repaints off the map | Repaints the sidebar without redrawing the canvas. |

The switches are per-browser, so each player can choose for themselves.

## Installing

In Foundry, go to **Add-on Modules → Install Module**, paste this manifest URL and click **Install**:

```
https://github.com/charliesuits/foundry-sidebar-performance/releases/latest/download/module.json
```

Then enable it in your world under **Manage Modules**. Foundry will offer updates automatically when a new version is released.

Works with Foundry VTT v13 and v14.

## License

MIT
