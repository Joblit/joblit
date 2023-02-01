import { Request, Response, NextFunction } from "express";

const db = require("../models/joblitModels");


export const sessionController = {
      //create a new session based on SSID cookie
      startSession : async (req: Request, res: Response, next: NextFunction) => {
        try {
            const createSessionQuery = {
            text: "INSERT INTO sessions (cookie_Id) VALUES ($1) RETURNING *",
            values: [
              res.locals.ssidCookie
            ],
          };
          await db.query(createSessionQuery);
          console.log('session successfully created!');
          return next();
        } catch (error) {
          next({
            log: `Error while starting session`,
            message: { err: `An error occurred in sessionController.startSession, ${error}` },
          });
        }
      },
      // log out user based on SSID cookie
      endSession : async (req: Request, res: Response, next: NextFunction) => {
        console.log('req.cookies', req.cookies);
        const { ssid } = req.cookies;
        try {
          const deleteSessionQuery = {
          text: "DELETE FROM sessions WHERE cookie_id=$1",
          values: [ssid],
          };

          await db.query(deleteSessionQuery);
          return next();
        } catch (error) {
          next({
            log: `Error while ending session`,
            message: { err:  `An error occurred in sessionController.logout ${error}` },
          });
        }
      },
      //verify that user is logged in based on SSID cookie
      isLoggedIn : async (req: Request, res: Response, next: NextFunction) => {
        const { ssid } = req.cookies;
        try {
            const findSessionQuery = {
           text: "SELECT cookie_id FROM sessions WHERE cookie_id = $1",
           values: [ssid],
         }; 
        const queryResult = await db.query(findSessionQuery);
          if(queryResult.rowCount === 1) {   
            res.locals.loggedIn = true;
            return next();
          } else {
            res.locals.loggedIn = false;
              return next();
          }
     
        } catch (error) {
        next({
            log: `Error conforming user's logged in status`,
            message: { err: `An error occurred in sessionController.isLoggedIn. Details: ${error}` },
        });
        }
    }
}


