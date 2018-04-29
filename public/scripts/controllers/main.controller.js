(function() {
  "use strict";

  angular.module("todomeandocker").controller("mainController", mainController);

  mainController.$inject = ["$scope", "$http", "todos", "todoService"];

  function mainController($scope, $http, todos, todoService) {
    $scope.title = "To-Do MEAN Docker Sample App";
    $scope.todo = {};
    $scope.todos = todos;
    $scope.adding = false;
    $scope.editing = false;

    /**
     * Show adding prompt
     */
    $scope.new = function() {
      $scope.adding = true;
    };

    /**
     * Show Editing Prompt
     * @param {int} index: index of todo 
     */
    $scope.edit = function(index) {
      $scope.editing = true;
      $scope.todo = $scope.todos[index];
    };

    /**
     * Create new todo
     */
    $scope.create = function() {
      todoService.createTodo($scope.todo).then(
        val => {
          $scope.todos.push($scope.todo);
          $scope.todo = {};
          $scope.adding = false;
        },
        err => {
          console.debug(err);
        }
      );
    };

    /**
     * Update current todo
     */
    $scope.update = function() {
      console.log($scope.todo);

      todoService.updateTodo($scope.todo).then(
        val => {
          $scope.editing = false;
          $scope.todo = {};
        },
        err => {
          console.debug(err);
        }
      );
    };

    /**
     * Delete todo
     * @param {*} index: Index of todo to be deleted 
     */
    $scope.delete = function(index) {
      todoService.deleteTodo($scope.todo).then(
        val => {
          $scope.todos.splice(index, 1);
        },
        err => {
          console.debug(err);
        }
      );
    };
  }
})();
