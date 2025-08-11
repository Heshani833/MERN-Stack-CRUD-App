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
     const { name, gmail, age, address} = req.body;

     let users;

     try {
        users = new User({
            name,
            gmail,
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

//Get by ID

const GetById = async (req, res, next) =>{

    const id = req.params.id;

    let user;
    try {
        user = await User.findById(id);
    } catch (err) {
        console.error(err);
    }

    if(!user){
        return res.status(404).json({message: "No user found"});
    }

    return res.status(200).json({ user });
}

//Update user details

const updateUser = async (req, res, next) => {
    const id = req.params.id;
    const { name, gmail, age, address } = req.body;

    let user;

    try {
        user = await User.findById(id);
    } catch (err) {
        console.error(err);
    }

    if(!user){
        return res.status(404).json({message: "No user found"});
    }

    user.name = name;
    user.gmail = gmail;
    user.age = age;
    user.address = address;

    try {
        await user.save();
    } catch (err) {
        console.error(err);
    }

    return res.status(200).json({ user });
}

exports.getAllUsers = getAllUsers;
exports.addUser = addUser;
exports.GetById = GetById;
exports.updateUser = updateUser;
