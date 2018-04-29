(function(){
    'use strict';

    angular.module('todomeandocker',['ngRoute']).config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/',{
                controller: 'mainController',
                templateUrl: 'views/main.html',
                resolve: {
                    todos: function(todoService){
                        return todoService.getTodos();
                    }
                }
            }).otherwise('/');
    }
})();