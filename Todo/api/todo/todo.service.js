//used the builtin functions for this part
// TODO: Move API call methods here later.
const Todo = require('./todo.model');
module.exports =
{
    getTodos : (callback)=>{Todo.find(callback);},
    getTodoById : (id, callback)=>{Todo.findById(id, callback);},
    addTodo :(todoObject, callback)=>{Todo.create(todoObject, callback);},
	deleteTodo : (id, callback)=>
	{
      var query = { _id: id};
      Todo.remove(query, callback);
	},
	updateTodo : (id, updatedTodo, options, callback)=>
	{
      var query = { _id: id };
      var update = {
          name: updatedTodo.name,
          description: updatedTodo.description
      };
      Todo.findOneAndUpdate(query, update, options, callback);
	}
}
