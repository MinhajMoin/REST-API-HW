//Application dependencies
const user = require('./user.js');

const express = require('express');
const app = express();

app.use(express.json());

app.post('/user', (req, res) => 
{
    user.addUser(req.body);
    res.status(200).send(req.body);
});

app.delete('/user/:id', (req, res) => 
{
    deleteUser = user.deleteUser(req.params.id);
    if(!deleteUser)
    {
        res.status(404).send("User with requested id is not found.");
        return;
    }
    res.status(200).send(deleteUser);
});

app.put('/user/:id', (req, res) => 
{
    updateUser = user.updateUser(req.params.id, req.body);
    if(!updateUser)
    {
        res.status(404).send("Error updating the user!");
        return;
    }
    res.status(200).send(updateUser);
});

app.get('/user', (req, res) => 
{
    res.status(200).send(user.getUsers());
});

app.get('/user/:id', (req, res) => 
{
    getUserById = user.getUserById(req.params.id);
    if(getUserById === false)
    {
        res.status(404).send("User with requested id is not found.");
        return;
    }
    res.status(200).send(getUserById);
});

const port = 3000;
app.listen(port, () => 
{
    console.log('Node Server listening on port '+ port);
});