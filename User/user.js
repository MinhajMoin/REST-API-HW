users = 
[
    {
        name: "Ahsan Ayaz",
        email: "ahsan.ayaz@iomechs.com",
        id: 1
    },
    {
        name: "Siraj Ul Haq",
        email: "sirajulhaq@koderlabs.com",
        id: 2
    }
]

module.exports = {
addUser : function(userObject)
{
    userObject.id = users.length + 1;
    users.push(userObject);
},
deleteUser : function(ID)
{
    const user = users.find(u => u.id === parseInt(ID));
    if(!user) return false;
    const index = users.indexOf(user);
    users.splice(index, 1);
    return user;
},
updateUser : function(ID, userObject)
{
    const user = users.find(u => u.id === parseInt(ID));
    if(!user) return false;
    const index = users.indexOf(user);
    if(userObject.name) users[index].name = userObject.name;
    if(userObject.email) users[index].email = userObject.email;
    return user;
},
getUsers : function(){return users},
getUserById : function(ID)
{
    const user = users.find(u => u.id === parseInt(ID));
    if(!user) return false;
    return user;
}
};