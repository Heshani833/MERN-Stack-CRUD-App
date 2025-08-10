const User = require("../Model/UserModel");

const getAllUsers = async (req, res, next) => {
    let User;
    try {
        users = await User.find();
    } catch (err) {
        console.error(err);
    }

    if(!users){
        return res.status(404).json({message: "No users found"});


    }

    //display all users
    return res.status(200).json({ users });
};

exports.getAllUsers = getAllUsers;
