//IIFE - To restrict the scope of this function to this file and allows to revoke this function immediately
(function(){
    var app = angular.module("ContactApp");
    app.value("AppNameSvc","Contact App");
})();
