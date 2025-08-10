const User = require("../Model/UserModel");

const getAllUsers = async (req, res, next) => {
    let users;
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

//data insert
const addUser = async(req, res, next) => {
     const { name, email, age, address} = req.body;

     let users;

     try {
        users = new users({
            name,
            email,
            age,
            address
        });
        await users.save();
    } catch (err) {
        console.error(err);
    }

    if(!users){
        return res.status(404).json({message: "Unable to add user"});
    }

    return res.status(200).json({  users });

}

exports.getAllUsers = getAllUsers;
exports.addUser = addUser;
