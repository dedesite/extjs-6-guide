"use strict";

Ext.define("App.Application", {
  extend: "Ext.app.Application",
  name: "App",
  requires: ["App.*"],
  viewport: {
    controller: "viewport"
  },
  launch() {
    Ext.Viewport.add({
      xtype: "panel",
      header: {
        title: "La maison autonome"
      },
      layout: {
        type: "vbox"
      },
      padding: 20,
      items: [
        {
          xtype: "toolbar",
          docked: "left",
          items: [
            {
              xtype: "button",
              text: "Solaire",
              reference: "solaire",
              handler: "onMenuClicked"
            },
            {
              xtype: "button",
              text: "Admin",
              reference: "admin",
              handler: "onMenuClicked"
            }
          ]
        },
        {
          xtype: "panel",
          layout: "card",
          reference: "mainpanel",
          flex: 1,
          items: [
            {
              xtype: "batterycalculator"
            },
            {
              xtype: "admin"
            }
          ]
        }
      ]
    });
  }
});
