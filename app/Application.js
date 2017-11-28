"use strict";

Ext.define("App.Application", {
  extend: "Ext.app.Application",

  name: "App",

  // Since all the files in the ./app folder should be included in the final build, let's
  // require all application classes (App.*) and avoid redundant 'requires' in each files.
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
