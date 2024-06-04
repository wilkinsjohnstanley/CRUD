import express from 'express';
import {create, getAllUsers, getUserById} from '../controller/userController.js';

const route = express.Router();

//Post route
route.post("/user", create);
//Get route
route.get("/users", getAllUsers);
//Get by id
route.get("/user/:id",getUserById);

export default route;

//now import it into  the index.js!

