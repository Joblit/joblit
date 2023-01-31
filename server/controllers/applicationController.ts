import { Request, Response, NextFunction } from "express";

const db = require("../models/joblitModels");

export const applicationController = {
  createApplication: (req: Request, res: Response, next: NextFunction) => {
    //  const addUserQuery = {
    //       text: "INSERT INTO users (first_name, last_name, password, email) VALU
    //  ($1, $2, $3, $4) RETURNING *",
    //       values: [
    //         req.body.first_name,
    //         req.body.last_name,
    //         req.body.password,
    //         req.body.email,
    //       ],
    //     };
    // db.query(addUserQuery, (error, data) => {
    //       if (error) return next({ error });
    //       // console.log(data);
    //       res.status(200);
    //       res.locals.response = data.rows[0];
    //       return next();
    //     });
  },

  // getAllApplications: (req: Request, res: Response, next: NextFunction) => {
    // const getUserQuery = {
    //   text: "SELECT u.*, p.longitude,p.latitude, p.description, p.name, p.pin_id FROM users u LEFT JOIN pins p ON u.user_id = p.user_id WHERE u.user_id = $1",
    //   // text: 'SELECT u.*, p.longitude,p.latitude, p.description, p.name, p.pin_id',
    //   values: [req.body.user_id || res.locals.user_id],
    // };
    // db.query(getUserQuery, (err, data) => {
    //   if (err) return next({ err });
    //   // console.log(data);
    //   const sendBack = {
    //     user_id: data.rows[0].user_id,
    //     username: data.rows[0].username,
    //     pins: data.rows.map((x) => {
    //       return {
    //         pin_id: x.pin_id,
    //         position: { lat: x.latitude, lng: x.longitude },
    //         name: x.name,
    //         description: x.description,
    //       };
    //     }),
    //   };
    //   res.locals.response = sendBack;
    //   // res.locals.response = {
    //   //   id: 4,
    //   //   name: 'New York, New York',
    //   //   position: { lat: 40.712776, lng: -74.005974 },
    //   //   description: 'I went to the Big Apple',
    //   // };
    //   return next();
    // });
  // },

  // getSingleApplication: (req: Request, res: Response, next: NextFunction) => {
    // const getUserQuery = {
    //   text: "SELECT u.*, p.longitude,p.latitude, p.description, p.name, p.pin_id FROM users u LEFT JOIN pins p ON u.user_id = p.user_id WHERE u.user_id = $1",
    //   // text: 'SELECT u.*, p.longitude,p.latitude, p.description, p.name, p.pin_id',
    //   values: [req.body.user_id || res.locals.user_id],
    // };
    // db.query(getUserQuery, (err, data) => {
    //   if (err) return next({ err });
    //   // console.log(data);
    //   const sendBack = {
    //     user_id: data.rows[0].user_id,
    //     username: data.rows[0].username,
    //     pins: data.rows.map((x) => {
    //       return {
    //         pin_id: x.pin_id,
    //         position: { lat: x.latitude, lng: x.longitude },
    //         name: x.name,
    //         description: x.description,
    //       };
    //     }),
    //   };
    //   res.locals.response = sendBack;
    //   // res.locals.response = {
    //   //   id: 4,
    //   //   name: 'New York, New York',
    //   //   position: { lat: 40.712776, lng: -74.005974 },
    //   //   description: 'I went to the Big Apple',
    //   // };
    //   return next();
    // });
  // },

  // deleteApplication: (req: Request, res: Response, next: NextFunction) => {
    // const deleteUserQuery = {
    //   text: "DELETE FROM users WHERE user_id=$1",
    //   values: [req.body.user_id],
    // };
    // db.query(deleteUserQuery, (err, data) => {
    //   if (err) return next({ err });
    //   console.log(data);
    //   return next();
    // });
  // },

  // updateApplication: (req: Request, res: Response, next: NextFunction) => {},
};
