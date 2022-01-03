var app = angular.module("ContactApp",[]);


// app.controller("HeaderCtrl",HeaderCtrl);
// app.controller("FooterCtrl",FooterCtrl);



// //Factory Function
// function prepareAppConfig(AppNameSvc){
//   var value = {};

//   value.name = AppNameSvc;
//   value.author = "Mohit";
//   value.builtDate = new Date().toDateString();

//   return value;
// }


//Calling a function in Constructor Mode in JS
//new AppConfig()

// //app.constant
// app.value("AppDataSvc",prepareAppConfig());

// app.value("LoggingSvc", function(){
//   console.log("Hello");
// });


//With factory service, Angular calls and executes the function and hence we can inject other services as dependencies
//Value service does not allow dependency injection
// app.factory("AppDataFactorySvc", prepareAppConfig); //prepareConfig()



// function HeaderCtrl(AppDataServiceSvc){
//   this.appTitle = AppDataServiceSvc.name;
// }

// function FooterCtrl(AppDataServiceSvc){
//   this.appTitle = AppDataServiceSvc.name;
//   this.builtDate = AppDataServiceSvc.builtDate;
//   //LoggingSvc();
// }