Ext.define("App.store.Devices", {
  extend: "Ext.data.Store",
  alias: "store.devices",
  model: "App.model.Device",
  proxy: {
    type: "rest",
    url: "/devices",
    reader: {
      type: "json"
    },
    writer: {
      type: "json",
      writeAllFields: true
    }
  },
  autoLoad: true
});
