"use strict";

Ext.define("App.view.SolarChart", {
  extend: "Ext.Panel",
  xtype: "solarchart",
  requires: [
    "Ext.chart.CartesianChart",
    "Ext.chart.series.Bar",
    "Ext.chart.axis.Numeric",
    "Ext.chart.axis.Category"
  ],
  layout: "fit",
  items: [
    {
      xtype: "cartesian",
      shadow: "true",
      reference: "chart",
      insetPadding: "20 10",
      store: {
        type: "photovoltaic"
      },
      axes: [
        {
          type: "numeric",
          position: "left",
          minimum: 80,
          title: "Production (Wh/jour) panneau de 100W"
        },
        {
          type: "category",
          position: "bottom"
        }
      ],
      series: [
        {
          type: "bar",
          xField: "month",
          yField: "production"
        }
      ]
    }
  ]
});