(function(){
    'use strict';

    angular.module('todomeandocker').controller('mainController',mainController);

    mainController.$inject = ['$scope','$http','todos'];

    function mainController($scope,$http,todos) {
        $scope.title = "To-Do MEAN Docker Sample App"
        $scope.todos = todos;

        $scope.update = function(index) {
            
            var todo = todos[index];

            $http.put('http://localhost:3000/api/todos',todo);
        }
    }
})();