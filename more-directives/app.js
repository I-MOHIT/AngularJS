angular.module("moreDirectivesApp",[])
.controller("MoreDirectivesCtrl", MoreDirectivesCtrl);

function MoreDirectivesCtrl(){
    this.myList = [
        {'name':'ABCD','age':10},
        {'name':'EFGH','age':20},
        {'name':'IJKL','age':30},
        {'name':'MNOP','age':40},
    ];
}
