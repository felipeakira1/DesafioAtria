const users = [
    {
        id: 1,
        name: "Atira",
        email: "atira@atria.jr",
    }
]

function getAllUsers (req, res) {
    res.status(200).json(users);
}

function getUser (req, res) {
    const id = req.params.id;
    users.forEach(user => {
        if(user.id == id) {
            return res.status(201).json(user);
        }
    });
    res.status(404).json({message: "user not found"});
}

function addUser (req, res) {
    const { name, email } = req.body;
    if(!name || !email) {
        return res.status(400).json({ message: "name or email are empty "});
    }
    const user = {
        id: users.length + 1,
        name: name,
        email: email
    };
    users.push(user);
    res.status(201).json(user);
}

function deleteUser (req, res) {
    const id = req.params.id;
    const userId = parseInt(id);
    const index = users.findIndex(user => user.id === userId);
    if(index === -1) {
        return res.status(404).json({message: "user not found"});
    }
    users.splice(index, 1);
    res.status(204).send();
}

function updateUser (req, res) {
    const id = req.params.id;
    const userId = parseInt(id);
    const { name, email } = req.body;
    if(!name || !email) {
        return res.status(400).json({message: "name or email are empty"});
    }
    const index = users.findIndex(user => user.id === userId);
    if(index === -1) {
        return res.status(404).json({message: "user not found"});
    }
    const updatedUser = {
        id: userId,
        name: name,
        email: email
    }
    users[index] = updatedUser;
    res.status(200).json(updatedUser);
}

module.exports = { getAllUsers, getUser, addUser, updateUser, deleteUser};