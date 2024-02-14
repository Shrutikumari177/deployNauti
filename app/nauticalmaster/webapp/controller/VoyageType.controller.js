sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/core/Fragment",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel"
  ],
  function (Controller,History,Fragment,MessageToast, MessageBox,JSONModel ) {
    "use strict";
    let aSelectedIds=[];
 
    return Controller.extend("com.ingenx.nauti.nauticalmaster.controller.VoyageType", {
 
      onInit: function () {
        this.getView().byId("createTypeTable").setVisible(true);
        this.getView().byId("entryTypeTable").setVisible(false);
        this.getView().byId("mainPageFooter").setVisible(false);
        this.getView().byId("updateTypeTable").setVisible(false);
 
 
      },
      onBackPress: function () {
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("MastView");
      },
      // for more fragment
 
      onPress: function () {
 
        var oView = this.getView(),
         oButton = oView.byId("button");
 
        if (!this._oMenuFragment) {
 
          this._oMenuFragment = Fragment.load({
            name: "nauticalfe.fragments.MastOptionsDropDown",
                        id: oView.getId(),
            controller: this
          }).then(function(oMenu) {
            oMenu.openBy(oButton);
            this._oMenuFragment = oMenu;
            return this._oMenuFragment;
          }.bind(this));
        }
        else {
          this._oMenuFragment.openBy(oButton);
        }
      },
      onBackPressHome: function () {
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("Routedash");
      },
      onBackPressHome: function () {
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("Routedash");
      },
      selectedItems: function (oEvent) {
        // console.log("hello");
        let oTable = oEvent.getSource();
        let aSelectedItems = oTable.getSelectedItems();
       
 
        aSelectedIds = aSelectedItems.map(function (oSelectedItem) {
 
          // console.log(oSelectedItem.getBindingContext());
 
          if (oSelectedItem.getBindingContext()) {
 
            let cells = oSelectedItem.getCells();
            console.log(cells);
           
            return [oSelectedItem.getBindingContext().getProperty("VOYCD"), oSelectedItem.getBindingContext().getProperty("VOYDES")]
 
          } else {
 
          }
 
        });
        console.log(aSelectedIds);
        // console.log("Selected Travel IDs: " + aSelectedTravelIds.join(","));
        return aSelectedIds;
 
      },
     
      newEntries: function () {
        this.getView().byId("createTypeTable").setVisible(false)
        this.getView().byId("entryTypeTable").setVisible(true)
        this.getView().byId("mainPageFooter").setVisible(true)
 
 
      },
     
      pressEdit : function(){
 
        if( aSelectedIds.length){
          if( aSelectedIds.length > 1){
             MessageToast.show("Please select one row");
             return
          }
        }else {
          MessageToast.show("Please select a row");
          return;
        }
 
        this.getView().byId("createTypeTable").setVisible(false);
        let code = aSelectedIds[0][0];
        let desc = aSelectedIds[0][1];
        this.getView().byId("voyCode1").setText(code);
        this.getView().byId("voyCodeDesc1").setValue(desc);
        this.getView().byId('updateTypeTable').setVisible(true);
        // console.log(aSelectedIds[0][0], aSelectedIds[0][1]);
        this.getView().byId("mainPageFooter2").setVisible(true);
 
        // this.onUpdate(code, desc);
 
      },
      onUpdate : function(){
         
        let value1 =  aSelectedIds[0][0];
        let value2 =  this.getView().byId("voyCodeDesc1").getValue() ;
 
       
        let data = {
          VOYCD : value1,
         
          VOYDES: value2
 
        };
        console.log(data);
 
 
        var oView = this.getView();
        var JsonData = JSON.stringify(data)
        let EndPoint = "/odata/v4/nautical/VOYTYP/"+ data.VOYCD;
        console.log(EndPoint);
        fetch(EndPoint, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JsonData
        })
          .then(function (res) {
           
            if (res.ok) {
              // location.reload();
              console.log("Entry updated successfully");
              MessageToast.show(`Entry updated successfully`);
              oView.getModel().refresh();
              oView.byId("createTypeTable").setVisible(true)
       
             oView.byId("mainPageFooter2").setVisible(false);
             oView.byId("updateTypeTable").setVisible(false);
             
 
            }
            else {
              res.json().then((data) => {
                if (data && data.error && data.error.message) {
                    // Show the error message from the backend
                    MessageToast.show(data.error.message);
                    return
                }
                });
            }
          })
          .catch(function (err) {
            console.log("error", err);
          })
          // this.getView().byId("createTypeTable").setVisible(true)
       
          // this.getView().byId("mainPageFooter2").setVisible(false);
          // this.getView().byId("updateTypeTable").setVisible(false);
 
         
          // location.reload()
          // that.getView().getModel().refresh();
 
      },

      
    
    
    
      onSave: function () {
        var that = this.getView();
 
        var value1 =  this.getView().byId("voyCode").getValue();
        var value2 =  this.getView().byId("voyCodeDesc").getValue();
 
        var data = {
 
          VOYCD: value1,
 
          VOYDES: value2
 
        };
        const voyageModel= new JSONModel(data)
        that.setModel(voyageModel,"voyageModel");
        let oModel = this.getView().getModel();
        var addVoyData = this.getView().getModel("voyageModel").getData();
        console.log(addVoyData);          
 
        let oBindListSP = oModel.bindList("/VOYTYP");
        oBindListSP.create(addVoyData)
          that.getModel().refresh();
          that.byId("voyCode").setValue("");
          that.byId("voyCodeDesc").setValue("");
          MessageToast
 
          console.log(data);
 
          this.getView().byId("createTypeTable").setVisible(true)
          this.getView().byId("entryTypeTable").setVisible(false)
          this.getView().byId("mainPageFooter").setVisible(false)
 
 
      },
     
      
      onCancel: function(){
        this.getView().byId("createTypeTable").setVisible(true);
        this.getView().byId("updateTypeTable").setVisible(false);
        this.getView().byId("entryTypeTable").setVisible(false);
        this.getView().byId("mainPageFooter").setVisible(false);
        this.getView().byId("mainPageFooter2").setVisible(false);
      },
     
     
      onDeletePress: function () {
 
        let aItems = this.byId("createTypeTable").getSelectedItems();
 
        if (!aItems.length) {
 
          MessageToast.show("Please Select  Items ");
 
          return;
        }
 
        const that = this;  // creatinh reference for use in Dialog
        sap.ui.require(["sap/m/MessageBox"], function (MessageBox) {
          MessageBox.confirm(
            "Are you sure  to delete the selected items?", {
              title: "Confirm ",
              onClose: function (oAction) {
                if (oAction === MessageBox.Action.OK) {
                  // User confirmed deletion
                  that.deleteSelectedItems(aItems);
                } else {
                  // User canceled deletion
                  sap.m.MessageToast.show("Deletion canceled");
                }
              }
            }
          );
        });
 
        }, // ending fn
      deleteSelectedItems: function (aItems) {
            aItems.forEach(function (oItem) {
              oItem.getBindingContext().delete().catch(function (oError) {
                if (!oError.canceled) {
                  // Error was already reported to message model
                  MessageToast.show(oError)
                }
              });
            });
      },

      pressCopy: function () {
 
        if( aSelectedIds.length){
          if( aSelectedIds.length > 1){
             MessageToast.show("Please select one row");
             return
          }
        }else {
          MessageToast.show("Please select a row");
          return;
        }
 
        this.getView().byId("createTypeTable").setVisible(false);
        let code = aSelectedIds[0][0];
        let desc = aSelectedIds[0][1];
        this.getView().byId("voyCode").setValue(code);
        this.getView().byId("voyCodeDesc").setValue(desc);
        this.getView().byId('entryTypeTable').setVisible(true);
 
        this.getView().byId("mainPageFooter").setVisible(true);
      }
   
 
 
     
     
 
     
 
    });
 
  });