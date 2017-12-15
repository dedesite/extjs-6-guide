Ext.define("App.model.Device", {
  extend: "Ext.data.Model",
  fields: [
    { name: "id", type: "int" },
    { name: "device", type: "string" },
    { name: "averageConsumption", type: "int" }
  ]
});
