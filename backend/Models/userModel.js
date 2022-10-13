import db from '../config/db.js';

// Get All Users
export const getUsers = (result) => {
    db.query("SELECT * FROM users", (error, results) => {
        if(error) {
            console.log(error);
            return result(error, null);
        } else {
            return result(null, results);
        }
    });
}

// Get Single user
export const getUserById = (id, result) => {
    db.query("SELECT * FROM users WHERE user_id = ?", [id], (error, results) => {
        if(error) {
            console.log(error);
            result(error, null);
        } else {
            result(null, results[0]);
        }
    });
}

// Insert User to database
export const insertUser = (data, result) => {
    db.query("INSERT INTO users SET ?", [data], (error, results) => {
        if(error) {
            console.log(error);
            result(error, null);
        } else {
            result(null, results);
        }
    });
}

// Update User to Database
export const updateUserById = (id, data, result) => {
    db.query("UPDATE users SET user_name = ?, user_password = ? WHERE user_id = ?", [data.user_name, data.user_password, id], (error, results) => {
        if(error) {
            console.log(error);
            result(error, null);
        } else {
            result(null, results);
        }
    });
}

//Delete user from database
export const deleteUserById = (id, result) => {
    db.query("DELETE FROM users WHERE user_id = ?",[id], (error, results) => {
        if(error) {
            console.log(error);
            result(error, null);
        } else {
            result(null, results);
        }
    })
}