"use strict";
/*
 * This call registers your application to be launched when the browser is ready.
 */
Ext.application({
  name: "AutonomousHouse",

  requires: ["Ext.MessageBox"],

  launch() {
    Ext.Msg.alert("Hello Ext JS", "Hello! Welcome to Ext JS.");
  }
});
