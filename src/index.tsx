import React from "react";

import { FlintPlugin, FlintWindow } from "flint-plugin";
import "./index.css";

declare const window: FlintWindow;

function App() {
  const activeTaskId = window.flint.useSettingsStore(
    (state) => state.activeTaskId
  );

  React.useEffect(() => {
    console.log("hi", activeTaskId);
  }, [activeTaskId]);

  return (
    <div className="z-50 p-2 rounded bg-red-500 text-white text-xs top-3 right-3 absolute">
      {/* {activeTaskId} */}
      hi
    </div>
  );
}

function Content() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold">Hello, Flint!</h1>
      <p className="text-lg mt-4">
        This is a sample plugin for Flint. You can start a new 25m task from the
        command menu.
      </p>
    </div>
  );
}

const plugin: FlintPlugin = {
  name: "flint-plugin",
  version: "0.0.1",
  init() {
    console.log("Hello from flint-plugin!");
  },
  rootComponent: App,
  renderCommandItems: ({ setOpen, page }) => {
    if (page !== "root") return [];

    return [
      {
        value: "Start a new 25m task",
        onSelect: async () => {
          const task = await window.flint.db.tasks.createTask(
            "Work for 25m",
            "command menu",
            25 * 60
          );
          if (task) {
            window.flint.settingStore.getState().setActiveTaskId(task.id);
            window.flint.settingStore.getState().setPlayingTaskId(task.id);

            requestAnimationFrame(() => {
              window.flint.play();
            });
          }
          setTimeout(() => {
            setOpen(false);
          }, 510);
        },
        children: (
          <div>
            Start a new 25m task
            <Content />
          </div>
        ),
      },
    ];
  },
};

// register the plugin
window.flint.registerPlugin(plugin);
