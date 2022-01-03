(function () {
  var app = angular.module("ContactApp");
  //Service Function
  // function AppConfig(AppNameSvc){
  //     //var this = {};
  //     this.name = AppNameSvc;
  //     this.author = "Mohit";
  //     this.builtDate = new Date().toDateString();

  //     //return this;
  //   }

  //The service service executes the function in Constructor mode hence the two commented lines in the AppConfig function get added
  app.service("AppDataServiceSvc", function (AppNameSvc) {
    //var this = {};
    this.name = AppNameSvc;
    this.author = "Mohit";
    this.builtDate = new Date().toDateString();

    //return this;
  }); //new AppConfig()
})();
