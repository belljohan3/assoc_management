import express from "express";
import { showUsers, showUserById, createUser, updateUser, deleteUser } from "../controller/users.js";

const router = express.Router();

// get users
router.get("/users", showUsers);

// get a user
router.get("/users/:id", showUserById);

// create a new User
router.post("users", createUser);

// update a user
router.put("users/:id", updateUser);

// delete a user
router.delete("users/:id", deleteUser);

export default router;

