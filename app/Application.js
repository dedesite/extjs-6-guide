"use strict";

Ext.define("App.Application", {
  extend: "Ext.app.Application",

  name: "App",

  requires: ["App.*"],
  launch() {
    Ext.Viewport.add({
      xtype: "panel",
      header: {
        title: "La maison autonome - Panel, layout type vbox"
      },
      layout: {
        type: "vbox"
      },
      defaults: {
        border: true,
        xtype: "panel"
      },
      items: [
        {
          title: "Panel flex 1 - layout card",
          flex: 1,
          layout: "card",
          id: "cardPanel",
          bodyStyle: "background-color:green;",
          items: [
            {
              xtype: "panel",
              title: "panel - layout center",
              layout: "center",
              border: true,
              items: [
                {
                  xtype: "button",
                  text: "Item suivant",
                  handler: () => {
                    const card = Ext.getCmp("cardPanel");
                    card.getLayout().next();
                  }
                }
              ]
            },
            {
              xtype: "panel",
              title: "panel - layout center",
              layout: "center",
              border: true,
              items: [
                {
                  xtype: "button",
                  text: "Item precedent",
                  handler: () => {
                    const card = Ext.getCmp("cardPanel");
                    card.getLayout().previous();
                  }
                }
              ]
            }
          ]
        },
        {
          title: "Panel flex 2 layout type hbox",
          flex: 2,
          layout: {
            type: "hbox"
          },
          bodyStyle: "background-color:azure;",
          defaults: {
            border: true,
            xtype: "panel"
          },
          items: [
            {
              title: "panel - layout fit",
              bodyStyle: "background-color:yellow;",
              layout: "fit",
              items: {
                xtype: "panel",
                title: "panel - no layout",
                border: true,
                bodyStyle: "background-color:blue;"
              }
            },
            {
              flex: 1,
              title: "panel - flex 1 - layout VBox",
              layout: "vbox",
              items: [
                {
                  xtype: "panel",
                  layout: "form",
                  title: "panel - layout form",
                  border: true,
                  items: [
                    {
                      xtype: "textfield",
                      label: "First Name"
                    },
                    {
                      xtype: "textfield",
                      label: "Last Name"
                    },
                    {
                      xtype: "textfield",
                      label:
                        "Veeeeeeeeery veeeeeeeeeeeery laaaaaaaaaaarge label"
                    }
                  ]
                },
                {
                  xtype: "panel",
                  layout: {
                    type: "vbox",
                    align: "center"
                  },
                  flex: 1,
                  title: "panel flex 1 - layout vbox align center",
                  border: true,
                  items: [
                    {
                      xtype: "button",
                      text: "push me"
                    },
                    {
                      xtype: "button",
                      text: "push me again"
                    },
                    {
                      xtype: "panel",
                      border: true,
                      flex: 1,
                      title: "panel - no layout",
                      html: "html content"
                    }
                  ]
                }
              ]
            },
            {
              title: "panel - no layout",
              bodyStyle: "background-color:yellow;"
            }
          ]
        }
      ]
    });
  }
});
