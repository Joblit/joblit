import { Request, Response, NextFunction } from "express";
import { ServerError } from "../../types";
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR: number = 10;

const db = require("../models/joblitModels");

export const userController = {
  createUser: async (req: Request, res: Response, next: NextFunction) => {

    try{
      const {first_name, last_name, password, email} = req.body;

     const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
     const hash = await bcrypt.hash(password, salt);

      const addUserQuery = {
      text: "INSERT INTO users (first_name, last_name, password, email) VALUES ($1, $2, $3, $4) RETURNING *",
      values: [
        first_name,
        last_name,
        hash,
        email,
      ],
    };

      const newUser = await db.query(addUserQuery);
      res.locals.newUser = newUser.rows[0];
      return next();
    } catch (error) {
      return next({
        log: 'Error while creating user',
        status: 400,
        message: {
          err: 'Error from userController.createUser, proper inputs not received'
        }
      });
    }
  },

  verifyUser: async (req: Request, res: Response, next: NextFunction) => {
    try{
      const { email, password } = req.body;

      const findUserQuery = {
           text: "SELECT * FROM users WHERE email = $1",
           values: [email],
         };
       const verifiedUser = await db.query(findUserQuery);
       const pwCheck = await bcrypt.compare(password, verifiedUser.rows[0].password);
       if (!pwCheck) {
               throw new Error('Password is incorrect');
             } else {
              res.locals.user_id = {user_id: verifiedUser.rows[0].user_id};
              return next();
            }
    } catch (error) {
      return next({
        log: 'Error while verifying user',
        status: 400,
        message: {
          err: `Error from userController.verifyUser, email or password is incorrect, ${error}`
        }
      });
    }
  },


  deleteUser: async (req: Request, res: Response, next: NextFunction) => {
    try{
      const { user_id } = res.locals;
         const deleteUserQuery = {
        text: "DELETE FROM users WHERE user_id=$1",
        values: [user_id],
     };
      await db.query(deleteUserQuery);

      return next();
    } catch (error) {
      return next({
        log: 'Error while deleting user',
        status: 400,
        message: {
          err: `Error from userController.verifyUser, user could not be deleted ${error}`
        }
      });
    }
  },

  // updateUser: (req: Request, res: Response, next: NextFunction) => {},

  getAllUsers: async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("entered getallusers in usercontroller");
      const allUsers = await db.query("SELECT * FROM users");
      res.locals.allUsers = allUsers;
      return next();
    }  catch (error) {
      return next({
        log: 'Error while getting users',
        status: 400,
        message: {
          err: `Error from userController.getAllUsers, query failed ${error}`
        }
      });
    }
  },
};
