import { Request, Response, NextFunction } from "express";
// const bcrypt = require("bcrypt");
// const SALT_WORK_FACTOR: number = 10;

const db = require("../models/joblitModels");

export const userController = {
  createUser: (req: Request, res: Response, next: NextFunction) => {
    console.log("entered userController.createUser");
    // bcrypt.genSalt(SALT_WORK_FACTOR, (error: any, salt: any) => {
    //   if (error) return next(error);
    //   bcrypt.hash(req.body.password, salt, function (error: any, hash: any) {
    //     if (error) return next(error);
    //     req.body.password = hash;
    const addUserQuery = {
      text: "INSERT INTO users (first_name, last_name, password, email) VALUES ($1, $2, $3, $4) RETURNING *",
      values: [
        req.body.first_name,
        req.body.last_name,
        req.body.password,
        req.body.email,
      ],
    };
    db.query(addUserQuery, (error: any, data: any) => {
      if (error) return next({ error });
      res.status(200);
      console.log("data from createUser response", data);
      res.locals.response = data;
      return next();
    });
    //   });
    // });
  },

  verifyUser: (req: Request, res: Response, next: NextFunction) => {
    // const query = {
    //   text: "SELECT user_id,password FROM users WHERE username = $1",
    //   values: [req.body.username],
    // };
    // db.query(query, (err, data) => {
    //   if (err) return res.status(404).send();
    //   if (data.rowcount === 0) return res.status(401).send();
    //   password = data.rows[0].password;
    //   user_id = data.rows[0].user_id;
    //   bcrypt.compare(req.body.password, password).then((result) => {
    //     if (!result) {
    //       console.log("=====from SERVER rehash DIDNT MATCH");
    //       res.status(401).send();
    //     } else {
    //       console.log("=====from SERVER rehash WORKED");
    //       res.locals.user_id = user_id;
    //       res.status(200);
    //       next();
    //     }
    //   });
    // });
  },

  //   userController.verifyUser = async (req, res, next) => {
  //   try {
  //     const { email, password } = req.body;
  //     const userData = await User.find({ email: email });
  //     const pwCheck = await bcrypt.compare(password, userData[0].password);
  //     if (!pwCheck) {
  //       throw new Error('Password is incorrect');
  //     } else {
  //       const { RoleARN, region, _id } = userData[0];
  //       res.locals.newUser = { RoleARN, region, _id };
  //       return next();
  //     }
  //   } catch (err) {
  //     return next({
  //       log: `Error in userController.verifyUser. Details: ${err}`,
  //       message: { err: 'An error occurred in userController.verifyUser' },
  //     });
  //   }
  // };

  deleteUser: (req: Request, res: Response, next: NextFunction) => {
    // const deleteUserQuery = {
    //   text: "DELETE FROM users WHERE user_id=$1",
    //   values: [req.body.user_id],
    // };
    // db.query(deleteUserQuery, (err, data) => {
    //   if (err) return next({ err });
    //   console.log(data);
    //   return next();
    // });
  },

  updateUser: (req: Request, res: Response, next: NextFunction) => {},

  getAllUsers: (req: Request, res: Response, next: NextFunction) => {
    console.log("entered getallusers in usercontroller");
    db.query("SELECT * FROM users", (err: any, data: any) => {
      if (err) return next({ err });
      console.log(data);
      res.locals.user = data;
      return next();
    });
  },
};
