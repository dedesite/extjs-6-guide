Ext.define("App.store.Devices", {
  extend: "Ext.data.Store",
  alias: "store.devices",
  fields: ["device", "averageConsumption"],
  data: [
    {
      device: "Frigo",
      averageConsumption: 300
    },
    {
      device: "Ordinateur",
      averageConsumption: 100
    },
    {
      device: "Machine à laver",
      averageConsumption: 3000
    },
    {
      device: "Sèche linge",
      averageConsumption: 3000
    },
    {
      device: "TV LCD",
      averageConsumption: 200
    }
  ]
});
