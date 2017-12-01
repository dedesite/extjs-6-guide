Ext.define("App.view.ViewportController", {
  extend: "Ext.app.ViewController",
  alias: "controller.viewport",
  onMenuClicked(btn) {
    const itemIndexes = {
      solaire: 0,
      solartchart: 1,
      admin: 2
    };
    this.lookup("mainpanel").setActiveItem(itemIndexes[btn.reference]);
  }
});
