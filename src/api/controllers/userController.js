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

module.exports = {
    getAllUsers
}