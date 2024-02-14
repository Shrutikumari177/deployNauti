sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/routing/History",
        'sap/ui/core/Fragment',
    ],
    function(BaseController,History,Fragment) {
      "use strict";
  
      return BaseController.extend("com.ingenx.nauti.nauticalmaster.controller.masterDashboard", {
        onInit() {
        },
        navToVoyageType: function(){
            
            const oRouter = this.getOwnerComponent().getRouter();
            
            oRouter.navTo("RouteVoyageType")
        },
        navToVesselType: function(){
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteVesselType")
        },
        navToCurrencyType: function(){
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteCurrencyType")
        },
        navToClassMaster: function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteClassMaster");
        },
        navToBidMaster:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteBidMaster");
        },
        navToPortLocMaster:function(){
          const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RoutePortLocMaster");
        },
        navToCostMaster:function(){
          const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteCostMaster");
        },
        navToEventMaster:function(){
          const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteEventMaster");
        },
        navToPortLocUpd:function(){
          const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RoutePortLocUpd");
        },
        navToPortMaster:function(){
          const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RoutePortMaster");
        },
        navToRefDocIndicator:function(){
          const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteRefDocIndicator");
        },
        navToBusinessPartner: function () {
          var oView = this.getView(),
          oButton = oView.byId("onBusinessPartnerBtn");
   
          if (!this._oBusinessPartnerMenuFragment) {
   
            this._oBusinessPartnerMenuFragment = Fragment.load({
              name: "com.ingenx.nauti.nauticalmaster.fragments.MastBusinessPartner",
                          id: oView.getId(),
              controller: this
            }).then(function(oMenu) {
              oMenu.openBy(oButton);
              this._oBusinessPartnerMenuFragment = oMenu;
              return this._oBusinessPartnerMenuFragment;
            }.bind(this));
          }
          else {
            this._oBusinessPartnerMenuFragment.openBy(oButton);
          }
        },
        BPDetailpress: function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteBPMasterDetails")
        },
        onVendorDataSyncingPress: function() {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteVendorDataSyncing");
        },
        navToConfigRelease: function () {
          var oView = this.getView(),
          oButton = oView.byId("onConfigBtn");
   
          if (!this._oConfigReleaseMenuFragment) {
   
            this._oConfigReleaseMenuFragment = Fragment.load({
              name: "com.ingenx.nauti.nauticalmaster.fragments.MastConfigRelease",
                          id: oView.getId(),
              controller: this
            }).then(function(oMenu) {
              oMenu.openBy(oButton);
              this._oConfigReleaseMenuFragment = oMenu;
              return this._oConfigReleaseMenuFragment;
            }.bind(this));
          }
          else {
            this._oConfigReleaseMenuFragment.openBy(oButton);
          }
        },
        onConfigMaintainGroup:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteConfigMaintainGroup");
        },
        onConfigVoyage:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteConfigVoyage");
        },
        onConfigChartering:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteConfigChartering");
        },
       
       
        navToApiurl:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteApiUrl");
        },
        
        
        
        
       
        
        navToUoM:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteUoM");
        },
        navToRouterMaster:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteRouteMaster");
        },
        navToCountryMaster:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteCountryMaster");
        },
        navToCountryMasterUpd:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteCountryMasterUpd");
        },
        navToMarinePathUpd:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteMarinePathUpd");
        },
        navToMarineDisUpd:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteMarineDisUpd");
        },
        navToPortUpd:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RoutePortUpd");
        },
        onBackPressHome: function () {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteHome");
        },
        onBackPress: function () {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("Routedash");
        },
  
  
  
       
      });    }
  );