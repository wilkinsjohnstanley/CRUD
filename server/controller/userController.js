import User from "../model/userModel.js";

//create async func to add data to dbms
//CREATE
export const create = async(req, res)=>{
    try {
        //create new user object
        const newUser = new User(req.body);
        const {email}=newUser;
        const userExist = await User.findOne({email})
        if(userExist){
            return res.status(400).json({message:"User already exists."});
        }
        const savedData = await newUser.save();
        res.status(200).json(savedData)

    } catch (error) {
        res.status(500).json({errorMessage:error.message})
    }
};
//READ
export const getAllUsers = async(req,res)=>{
    try {
        const userData = await User.find();
        if(!userData || userData.length ===0){
            return res.status(404).json({message:"User data not found."})
        }
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({errorMessage:error.message})

    }
};




