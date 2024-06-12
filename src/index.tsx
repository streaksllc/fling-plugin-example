import { FlintPlugin, FlintWindow } from "flint-plugin";
import "./index.css";
declare const window: FlintWindow;

const plugin: FlintPlugin = {
  name: "flint-plugin",
  version: "0.0.1",
  init() {
    console.log("Hello from flint-plugin!");
  },
  renderCommandItems: ({ setOpen, page }) => {
    if (page !== "root") return [];

    return [
      {
        value: "Hello World",
        onSelect: async () => {
          await window.flint.db.tasks.createTask("Hello World", "command menu");
          setTimeout(() => {
            setOpen(false);
          }, 1000);
        },
        children: <div>Hello World</div>,
      },
    ];
  },
};

// register the plugin
window.flint.registerPlugin(plugin);
