// const db = require("../models/joblitModels");

// const applicationController = {};

// applicationController.createApplication = (req, res, next) => {};

// module.exports = applicationController;

import { Request, Response, NextFunction } from "express";

export const applicationController = {
  createApplication: (req: Request, res: Response, next: NextFunction) => {},

  getAllApplications: (req: Request, res: Response, next: NextFunction) => {},

  deleteApplication: (req: Request, res: Response, next: NextFunction) => {},

  updateApplication: (req: Request, res: Response, next: NextFunction) => {},
};
