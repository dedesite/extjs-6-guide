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
              text: "Solaire"
            }
          ]
        },
        {
          xtype: "panel",
          layout: "form",
          items: [
            {
              xtype: "numberfield",
              label: "Nombre de W/h consommés /j",
              reference: "nbWattsHourConsumption",
              width: 400,
              value: 200,
              minValue: 0,
              maxValue: 50000
            },
            {
              xtype: "numberfield",
              label: "Nb. de jours d'autonomie",
              reference: "nbAutonomyDays",
              width: 400,
              value: 3,
              minValue: 1,
              maxValue: 6
            },
            {
              xtype: "checkboxfield",
              label: "Utilisation d'un onduleur ?",
              reference: "hasInverter"
            },
            {
              xtype: "numberfield",
              label: "Profondeur maximale de décharge des batteries",
              reference: "maxBatteryUnloadDepth",
              value: 50,
              minValue: 0,
              maxValue: 90
            },
            {
              xtype: "spinnerfield",
              label: "Voltage des batteries",
              reference: "batteryVoltage",
              value: 12,
              minValue: 6,
              maxValue: 24,
              stepValue: 6
            },
            {
              xtype: "numberfield",
              label: "Capacité des batteries en Ah",
              reference: "batteryCapacity",
              value: "100",
              minValue: 10,
              maxValue: 1000
            }
          ]
        },
        {
          xtype: "label",
          html: "<strong>Nombre de batteries nécessaires : 4</strong>"
        }
      ]
    });
  }
});
