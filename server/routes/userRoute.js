import express from 'express';
import {create, getAllUsers} from '../controller/userController.js';

const route = express.Router();

//Post route
route.post("/user", create)
//Get route
route.get("/users", getAllUsers)


export default route;

//now import it into  the index.js!

