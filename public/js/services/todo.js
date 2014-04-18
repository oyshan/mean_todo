// js/services/todo.js

var todoService = angular.module('todoService',[]);

//supersimple service 
//each function returns a promise object

todoService.factory('Todos', function($http){
	return{
		get : function(){
			return $http.get('/api/todos');
		},
		create : function(todoData){
			return $http.post('/api/todos', todoData);
		},
		delete : function(id){
			return $http.delete('/api/todos/' + id);
		}
	}
});