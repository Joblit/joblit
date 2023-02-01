import { Request, Response, NextFunction } from "express";

const db = require("../models/joblitModels");

export const applicationController = {
  createApplication: async (req: Request, res: Response, next: NextFunction) => {
    try{
      const {user_id, companyname, jobtitle, jobdescription, location, applicationdate, salaryrange, contactperson, contactemail, benefits, notes, status} = req.body;
      const addApplicationQuery = {
      text: "INSERT INTO applications (user_id, companyname, jobtitle, jobdescription, location, applicationdate, salaryrange, contactperson, contactemail, benefits, notes, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *",
      values: [
        user_id,
        companyname,
        jobtitle,
        jobdescription,
        location,
        applicationdate,
        salaryrange,
        contactperson,
        contactemail,
        benefits,
        notes,
        status
      ],
    };

      const newApplication = await db.query(addApplicationQuery);
      res.locals.application_id = newApplication.rows[0].application_id;
      return next();
    } catch (error) {
      return next({
        log: 'Error while creating application',
        status: 400,
        message: {
          err: `Error from applicationController.createApplication, proper inputs not received ${error}`
        }
      });
    }
  },

  getAllApplications: async (req: Request, res: Response, next: NextFunction) => {
     try{
      const {user_id} = req.query;
      const getAllApplicationsQuery = {
      text: "SELECT * FROM applications WHERE user_id = $1",
      values: [ user_id ],
    };

      const allApplications = await db.query(getAllApplicationsQuery);
      res.locals.allApplications = allApplications.rows;
      return next();
    } catch (error) {
      return next({
        log: 'Error while retrieving applications',
        status: 400,
        message: {
          err: `Error from applicationController.getAllApplications: ${error}`
        }
      });
    }
  },

  getSingleApplication: async (req: Request, res: Response, next: NextFunction) => {
    try{
      const {app_id} = req.params;
      const getSingleApplicationsQuery = {
      text: "SELECT * FROM applications WHERE application_id = $1",
      values: [ app_id ],
    };

      const application = await db.query(getSingleApplicationsQuery);
      res.locals.application = application.rows[0];
      return next();
    } catch (error) {
      return next({
        log: 'Error while retrieving application',
        status: 400,
        message: {
          err: `Error from applicationController.getSingleApplication: ${error}`
        }
      });
    }
  },

  deleteApplication: async (req: Request, res: Response, next: NextFunction) => {
    try{
      const { app_id } = req.params;
         const deleteAppQuery = {
        text: "DELETE FROM applications WHERE application_id=$1",
        values: [app_id],
     };
      await db.query(deleteAppQuery);

      return next();
    } catch (error) {
      return next({
        log: 'Error while deleting application',
        status: 400,
        message: {
          err: `Error from userController.verifyUser, application could not be deleted ${error}`
        }
      });
    }
  },

  updateApplication: async (req: Request, res: Response, next: NextFunction) => {
     try{
      const {companyName, jobTitle, jobDescription, location, applicationDate, salaryRange, contactPerson, contactEmail, benefits, notes} = req.body;
      const {app_id} = req.params;
      const updateApplicationQuery = {
      text: "UPDATE applications SET companyName=$1, jobTitle=$2, jobDescription=$3, location=$4, applicationDate=$5, salaryRange=$6, contactPerson=$7, contactEmail=$8, benefits=$9, notes=$10 WHERE application_id=$11",
      values: [
        companyName,
        jobTitle,
        jobDescription,
        location,
        applicationDate,
        salaryRange,
        contactPerson,
        contactEmail,
        benefits,
        notes,
        app_id
      ],
    };

      await db.query(updateApplicationQuery);
      return next();
    } catch (error) {
      return next({
        log: 'Error while updated application',
        status: 400,
        message: {
          err: `Error from applicationController.updateApplication, proper inputs not received ${error}`
        }
      });
    }
  }
};
