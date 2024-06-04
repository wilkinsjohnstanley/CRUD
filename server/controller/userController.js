import User from "../model/userModel.js";

//create async func to add data to dbms
//CREATE - i.e. POST
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
//READ - i.e. GET
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
//READ - i.e. GET user by I.D.
export const getUserById = async(req, res)=>{
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({message:"User not found."})

        }
        res.status(200).json(userExist);

        
    } catch (error) {
        res.status(500).json({errorMessage:error.message})

    }
}



