/**
 * Created by enyuwang on 7/14/17.
 */
var app = angular.module('myApp', []);
app.controller('todoCtrl', function($scope) {
    $scope.todoList = [{todoText:'to-do 1', done:false}];

    $scope.add = function() {
        $scope.todoList.push({todoText:$scope.todoInput, done:false});
        $scope.todoInput = "";
    };

    $scope.delete = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(item) {
            if (!item.done) $scope.todoList.push(item);
        });
    };

    $scope.all = function() {
        angular.forEach($scope.todoList, function(item) {
            item.done = true;
        });
    };

});