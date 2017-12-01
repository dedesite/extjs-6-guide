"use strict";

Ext.define("App.view.BatteryCalculator", {
  extend: "Ext.Panel",
  xtype: "batterycalculator",
  viewModel: {
    formulas: {
      updateBatteryNumbers: {
        bind: {
          nbWattsHourConsumption: "{nbWattsHourConsumption.value}",
          nbAutonomyDays: "{nbAutonomyDays.value}",
          hasInverter: "{hasInverter.checked}",
          maxBatteryUnloadDepth: "{maxBatteryUnloadDepth.value}",
          batteryVoltage: "{batteryVoltage.value}",
          batteryCapacity: "{batteryCapacity.value}"
        },
        get(params) {
          const lineLoss = 0.97; // Approximation
          const invertLoss = 0.9;
          const percent = 100;
          const totalLoss = params.hasInverter
            ? invertLoss * lineLoss
            : lineLoss;
          const consumptionPerDay = params.nbWattsHourConsumption / totalLoss;
          const consumptionToCovert = consumptionPerDay * params.nbAutonomyDays;
          const capacityNeeded =
            consumptionToCovert / (params.maxBatteryUnloadDepth / percent);
          const ampHourNeeded = capacityNeeded / params.batteryVoltage;
          const numBatteryNeeded = Math.ceil(
            ampHourNeeded / params.batteryCapacity
          );
          return numBatteryNeeded;
        }
      }
    }
  },
  items: [
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
      bind: {
        html:
          "<strong>Nombre de batteries nécessaires : {updateBatteryNumbers}</strong>"
      }
    }
  ]
});