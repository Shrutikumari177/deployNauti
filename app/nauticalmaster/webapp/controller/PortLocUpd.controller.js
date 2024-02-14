sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/ui/core/routing/History"
   
  ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Fragment,History) {
        "use strict";
   
        return Controller.extend("com.ingenx.nauti.nauticalmaster.controller.PortLocUpd", {
            onInit: function () {
   
            },
            onPress: function () {
              var oView = this.getView(),
                oButton = oView.byId("button");
              if (!this._oMenuFragment) {
                this._oMenuFragment = Fragment.load({
                  name: "nauticalfe.fragments.MastUpdDropDown",
                              id: oView.getId(),
                  controller: this
                }).then(function(oMenu) {
                  oMenu.openBy(oButton);
                  this._oMenuFragment = oMenu;
                  return this._oMenuFragment;
                }.bind(this));
              } else {
                this._oMenuFragment.openBy(oButton);
              }
            },
            onBackPress: function () {
              const oRouter = this.getOwnerComponent().getRouter();
              oRouter.navTo("RouteMast");
            },
            onBackPressHome: function () {
              const oRouter = this.getOwnerComponent().getRouter();
              oRouter.navTo("RouteMast");
            },
            onExit: function () {
              const oRouter = this.getOwnerComponent().getRouter();
              oRouter.navTo("RouteHome");
            }, 
          
          
          });
  });