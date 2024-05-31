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
    res.status(404).json({message: "User not found"});
}

module.exports = { getAllUsers, getUser };