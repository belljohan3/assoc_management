import { getUsers, getUserById, insertUser, updateUserById, deleteUserById } from "../Models/userModel.js";

// Get all users
export const showUsers = (req, res) => {
    getUsers((error, results) => {
        if(error) {
            res.send(error)
        } else {
            res.json(results)
        }
    });
}

// Get a User
export const showUserById = (req, res) => {
    const id = req.params.id
    getUserById(id, (error, results) => {
        if(error) {
            res.send(error)
        } else {
            res.json(results)
        }
    });
}

// Create a new user
export const createUser = (req, res) => {
    const data = req.body
    insertUser(data, (error, results) => {
        if(error) {
            res.send(error)
        } else {
            res.json(results)
        }
    });
}

// Update a User
export const updateUser = (req, res) => {
    const id = req.params.id
    const data = req.body
    updateUserById(id, data, (error, results) => {
        if(error) {
            res.send(error)
        } else {
            res.json(results)
        }
    })
}

// Delete a User
export const deleteUser = (req, res) => {
    const id = req.params.id
    deleteUserById(id, (error, results) => {
        if(error) {
            res.send(error)
        } else {
            res.json(results)
        }
    })
}