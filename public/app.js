(function(){
    'use strict';

    angular.module('todomeandocker',['ngRoute']).config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/',{
                controller: 'mainController',
                templateUrl: 'views/main.html',
                resolve: {
                    todos: function($http,$q){
                        var defer = $q.defer();

                        $http.get('http://localhost:3000/api/todos')
                            .then((res) => {
                                defer.resolve(res.data);
                            },(err) => {
                                defer.reject(err);
                            });
                        
                        return defer.promise;
                    }
                }
            }).otherwise('/');
    }
})();