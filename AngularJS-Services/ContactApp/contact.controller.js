(function () {
  var app = angular.module("ContactApp");

  app.controller("ContactCtrl", ContactCtrl);

  function ContactCtrl(ContactDataSvc) {
    var self = this;
    self.editMode = false;
    self.addMode = false;
    ContactDataSvc.getContacts().then(function (data) {
      self.contacts = data;
    });

    //this.selectedContact = this.contacts[2];

    this.selectContact = function (index) {
      this.selectedContact = this.contacts[index];
      self.successMessage = undefined;
      self.errorMessage = undefined;
    };

    this.toggleEditMode = function () {
      this.editMode = !this.editMode;
    };

    this.saveUser = function () {
      this.toggleEditMode();
      var userData = this.selectedContact;
      if (self.addMode) {
        ContactDataSvc.addUser(userData).then(
          function () {
            self.successMessage = "Data Successfully Updated";
          },
          function () {
            self.errorMessage = "There was an error. Please try again";
          }
        );
        self.addMode = false;
      } else {
        ContactDataSvc.saveUser(userData).then(
          function () {
            self.successMessage = "Data Successfully Updated";
          },
          function () {
            self.errorMessage = "There was an error. Please try again";
          }
        );
      }
    };

    this.addContact = function () {
      self.addMode = true;
      this.selectedContact = {
        id: new Date().toTimeString(),
      };
      this.editMode = true;
    };
  }
})();
