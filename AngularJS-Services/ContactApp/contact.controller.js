(function () {
  var app = angular.module("ContactApp");

  app.controller("ContactCtrl", ContactCtrl);

  function ContactCtrl(ContactDataSvc) {
    
    this.contacts = ContactDataSvc.contacts;

    //this.selectedContact = this.contacts[2];

    this.selectContact = function (index) {
      this.selectedContact = this.contacts[index];
    };
  }
})();
