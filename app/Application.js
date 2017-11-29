"use strict";

Ext.define("App.Application", {
  extend: "Ext.app.Application",

  name: "App",

  requires: ["App.*"],
  launch() {
    Ext.Viewport.add({
      xtype: "panel",
      header: {
        title: "La maison autonome"
      },
      html: "Hello World!",
      padding: 20,
      items: [
        {
          xtype: "toolbar",
          docked: "left",
          items: [
            {
              xtype: "button",
              text: "Soleil"
            }
          ]
        }
      ]
    });
  }
});
