"use strict";

Ext.define("App.view.AdminPanel", {
  extend: "Ext.Panel",
  xtype: "admin",
  controller: "admin",
  layout: "vbox",
  viewModel: {
    data: {
      device: "",
      averageConsumption: ""
    }
  },
  items: [
    {
      xtype: "container",
      layout: "hbox",
      padding: 10,
      items: [
        {
          xtype: "textfield",
          label: "Appareil",
          bind: "{device}"
        },
        {
          xtype: "numberfield",
          label: "Consommation moyenne",
          bind: "{averageConsumption}",
          minValue: 1,
          maxValue: 5000
        },
        {
          xtype: "button",
          iconCls: "x-fa fa-plus",
          text: "Ajouter",
          handler: "onAdd"
        }
      ]
    },
    {
      xtype: "grid",
      title: "Consommation moyenne des appareils",
      reference: "devicesGrid",
      store: {
        type: "devices"
      },
      flex: 1,
      columns: [
        { text: "Appareil", dataIndex: "device", width: 200 },
        {
          text: "Consommation moyenne",
          dataIndex: "averageConsumption",
          width: 250
        },
        {
          width: 70,
          cell: {
            tools: {
              remove: {
                iconCls: "x-fa fa-remove red",
                handler: "onRemove",
                weight: 1
              }
            }
          }
        }
      ]
    }
  ]
});

Ext.define("App.view.AdminPanelController", {
  extend: "Ext.app.ViewController",
  alias: "controller.admin",
  onAdd() {
    const vm = this.getViewModel();
    const store = this.lookupReference("devicesGrid").getStore();
    store.add({
      device: vm.get("device"),
      averageConsumption: vm.get("averageConsumption")
    });
    store.save();
    vm.set("device", "");
    vm.set("averageConsumption", "");
  },
  onRemove(grid, info) {
    const store = grid.getStore();
    store.remove(info.record);
    store.save();
  }
});
