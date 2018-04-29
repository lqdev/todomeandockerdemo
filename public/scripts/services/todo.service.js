(function(){

    'use strict';

    angular.module('todomeandocker').service('todoService',todoService);

    todoService.$inject = ['$http','$q'];

    function todoService($http,$q) {

        var ENDPOINTURL = 'http://localhost:3000/api/todos';

        return {
            getTodos: getTodos,
            createTodo: createTodo,
            updateTodo: updateTodo,
            deleteTodo: deleteTodo
        }

        function getTodos() {
            var defer = $q.defer();

            $http.get(ENDPOINTURL)
                .then((res) => {
                    defer.resolve(res.data);
                },(err) => {
                    defer.reject(err);
                });
            
            return defer.promise;            
        }

        function createTodo(todo) {
            return $http.post(ENDPOINTURL,todo);
        }

        function updateTodo(todo) {
            return $http.put(ENDPOINTURL,todo);            
        }

        function deleteTodo(todo) {            
            return $http.delete(ENDPOINTURL,todo);
        }
    }
})();