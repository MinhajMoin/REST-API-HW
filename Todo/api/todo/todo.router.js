const todoRouter = require('express').Router();
const Todo = require('./todo.model');
const TodoService = require('./todo.service');

let id = 0;
/** increment id and attach it to request object */
const assignID = (req, res, next) => {
  id++;
  req.body.todo._id = id;
  next();
}

// Commenting this out for ease of understanding for now.
// We could also use this middleware for ease of access as we get more experience.

// /** get id param
//  * find matching todo and attach it to request object
//  */
// todoRouter.param('id', (req, res, next, todoId) => {
//   let todo = todos.find((todoItem) => {
//     return todoItem.id === todoId;
//   });
//   let todoIndex = todos.findIndex((todoItem) => {
//     return todoItem.id === todoId;
//   });
//   if (todo) {
//     req.todo = todo;
//     req.todoIndex = todoIndex;
//     next();
//   } else {
//     res.status(400).json({
//       error: `Could not find todo based on id = ${todoId}`
//     });
//   }
// })

//get
todoRouter.get('/', (req, res) =>
{
    TodoService.getTodos((err, todos)=>
    {
       if(!err)
       {

        res.json(todos);
       }
       else{
        res.status(400).send("Error in finding todo");
       }


    });
});

//get by id
todoRouter.get('/:id', (req, res) =>
{
    TodoService.getTodoById(req.params.id, (err, todo)=>
    {
        if(!err)
        {
          res.json(todo);
        }
        else
        {
          res.status(400).send("Error finding to do.");
        }

    });
});

//post
todoRouter.post('/', (req, res) =>
{
    TodoService.addTodo(req.body, (err, todo)=>
    {
       if(!err)
       {

        res.json(todo);
       }
       else
       {
        res.status(400).send("Error finding to do.");
       }

    });
});

//delete
todoRouter.delete('/:id', (req, res) =>
{
    TodoService.deleteTodo(req.params.id, (err, todo)=>
    {
        if(!err)
        {

            res.json(todo);
        }
        else
        {
          res.status(400).send("Error finding to do.");
        }

    });
});

//put
todoRouter.put('/:id', (req, res) =>
{
    TodoService.updateTodo(req.params.id, req.body, {}, (err, todo)=>
    {
        if(!err)
        {

            res.json(todo);
        }
      else
      {
        res.status(400).send("Error finding todo.");
      }
    });
});


module.exports = todoRouter;
