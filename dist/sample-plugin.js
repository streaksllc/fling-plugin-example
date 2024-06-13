import t from "http://localhost:1420/node_modules/.vite/deps/react.js?v=5e36e43c";
function a() {
  const e = window.flint.useSettingsStore(
    (n) => n.activeTaskId
  );
  return t.useEffect(() => {
    console.log("hi", e);
  }, [e]), /* @__PURE__ */ t.createElement("div", { className: "z-50 p-2 rounded bg-red-500 text-white text-xs top-3 right-3 absolute" }, "hi");
}
function l() {
  return /* @__PURE__ */ t.createElement("div", { className: "flex flex-col items-center justify-center h-full" }, /* @__PURE__ */ t.createElement("h1", { className: "text-4xl font-bold" }, "Hello, Flint!"), /* @__PURE__ */ t.createElement("p", { className: "text-lg mt-4" }, "This is a sample plugin for Flint. You can start a new 25m task from the command menu."));
}
const o = {
  name: "flint-plugin",
  version: "0.0.1",
  init() {
    console.log("Hello from flint-plugin!");
  },
  rootComponent: a,
  renderCommandItems: ({ setOpen: e, page: n }) => n !== "root" ? [] : [
    {
      value: "Start a new 25m task",
      onSelect: async () => {
        const i = await window.flint.db.tasks.createTask(
          "Work for 25m",
          "command menu",
          1500
        );
        i && (window.flint.settingStore.getState().setActiveTaskId(i.id), window.flint.settingStore.getState().setPlayingTaskId(i.id), requestAnimationFrame(() => {
          window.flint.play();
        })), setTimeout(() => {
          e(!1);
        }, 510);
      },
      children: /* @__PURE__ */ t.createElement("div", null, "Start a new 25m task", /* @__PURE__ */ t.createElement(l, null))
    }
  ]
};
window.flint.registerPlugin(o);
