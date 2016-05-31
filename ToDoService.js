toDoApp.service('ToDoService', ['$http', function($http) {

  this.getAll = function() {

    $http.get('http://quiet-beach-24792.herokuapp.com/todos.json')
     .then(function(response) {
       console.log(response)
       // good response
     }, function(err) {
       // error response
     });

  };
  // service code
}]);
