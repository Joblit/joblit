
import { Request, Response, NextFunction } from "express";
const express = require('express');
export const appRouter = express.Router();
const applicationController = require('../controllers/applicationController');

appRouter.post('/newApp', applicationController.createApplication, (req: Request, res: Response) => {
    res.status(200).json();
});

// appRouter.get('/allApps', applicationController.getAllApplications, (req: Request, res: Response) => {
//     res.status(200).json();
// });

// appRouter.get('/singleApp', applicationController.getSingleApplication, (req: Request, res: Response) => {
//     res.status(200).json();
// });

// appRouter.delete('/deleteApp', applicationController.deleteApplication, (req: Request, res: Response) => {
//     res.status(200).json();
// });

// appRouter.patch('/singleApp', applicationController.updateApplication, (req: Request, res: Response) => {
//     res.status(200).json();
// });