var app = angular.module("nestedControllers",[]);

app.controller("Ctrl1",Ctrl1);
app.controller("Ctrl2",Ctrl2);

function Ctrl1(){
    //var this = $scope; Not really there, just to explain
    this.testProp = "From Ctrl 1";
}


function Ctrl2(){
   // $scope.testProp = "From Ctrl 2";
   this.testProp = "From Ctrl 2";
}