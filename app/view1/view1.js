'use strict';

angular.module('myApp.view1', [])


.controller('View1Ctrl', ['$scope',function($scope) {
    $scope.notes = [];

    $scope.addNote = function (){
      console.log($scope.notes);
      $scope.notes.push({
        id: $scope.notes.length,
        content: $scope.notes.content
      });
      $scope.notes.content ='';
    }

    $scope.sup = function (id) {
      console.log(id);
                $scope.notes.splice(id,1);
    }
}]);
