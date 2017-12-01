Ext.define("App.view.SolarChartController", {
  extend: "Ext.app.ViewController",
  alias: "controller.solarchart",
  onCityChange(selector) {
    const store = this.lookupReference("chart").getStore();
    store.selectCity(selector.getValue());
  }
});
