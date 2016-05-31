toDoApp.controller('ToDoController', ['ToDoService', 'ToDoFactory', function(ToDoService, ToDoFactory) {

	var self = this;

	self.todos = ToDoService.getAll();

	self.addTodo = function(todoText) {
		self.todos.push(new ToDoFactory(todoText));
	};
	self.removeTodo = function() {
		self.todos.pop();
	}

}]);
