Ext.define("App.view.ViewportController", {
  extend: "Ext.app.ViewController",
  alias: "controller.viewport",
  onMenuClicked(btn) {
    const itemIndex = btn.reference === "solaire" ? 0 : 1;
    this.lookup("mainpanel").setActiveItem(itemIndex);
  }
});
