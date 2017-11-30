Ext.define("App.view.AdminPanel", {
  extend: "Ext.Panel",
  xtype: "admin",
  layout: "vbox",
  items: [
    {
      xtype: "grid",
      store: [
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
      ],
      flex: 1,
      columns: [
        { text: "Appareil", dataIndex: "device", width: 200 },
        {
          text: "Consommation moyenne",
          dataIndex: "averageConsumption",
          width: 250
        }
      ]
    }
  ]
});
