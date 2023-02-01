import express, {
  Express,
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from "express";
import cors from "cors";
import { ServerError } from "../types";
import path from "path";
import { userController } from "./controllers/userController";
import { applicationController } from "./controllers/applicationController";
import { cookieController } from "./controllers/cookieController";
import { sessionController } from "./controllers/sessionController";
// const appRouter = require('./routes/appRouter'); 
const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');

const PORT: number = 3000;
const app: Express = express();

// use cors
app.use(cors());
//use express json
app.use(express.json());
// app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: true }));

// add cookie parser
app.use(cookieParser());

//application router
// app.use("/application", appRouter);

//handle user requests
app.post(
  "/signup",
  userController.createUser,
  (req: Request, res: Response) => {
    console.log("SUCCESS! User created", res.locals.newUser);
    res.send(res.locals.newUser);
  }
);

//login a user
app.post(
  "/login",
  userController.verifyUser,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req: Request, res: Response) => {
    console.log("SUCCESS! User verified", res.locals.user_id);
    res.send(res.locals.user_id);
  }
);

//logout a user
app.delete("/logout", sessionController.endSession, (req: Request, res: Response) => {
  return res.status(200).send();
})

//get all users from database
app.get("/users", userController.getAllUsers, (req: Request, res: Response) => {
  console.log("SUCCESS! You got all users");
  res.send(res.locals.allUsers);
});

//delete a user
app.delete("/user", userController.verifyUser, userController.deleteUser, (req: Request, res: Response) => {
  console.log("SUCCESS! The user was deleted");
  res.send(`user with id number:${res.locals.user_id} was deleted`);
});

//create new app
app.post('/new-app', applicationController.createApplication, (req: Request, res: Response) => {
    res.status(200).json(res.locals.newApplication);
});

//get all apps
app.get('/all-apps/:user_id', applicationController.getAllApplications, (req: Request, res: Response) => {
    res.status(200).json(res.locals.allApplications);
});


// //retrieve single app
app.get('/single-app/:app_id', applicationController.getSingleApplication, (req: Request, res: Response) => {
    res.status(200).json(res.locals.application);
});

// //delete an app
app.delete('/delete-app/:app_id', applicationController.deleteApplication, (req: Request, res: Response) => {
    res.status(200).json();
});

// //update single app
app.patch('/update-app/:app_id', applicationController.updateApplication, (req: Request, res: Response) => {
    res.status(200).json();
});


//checks if user is logged in
app.get('/check-session', sessionController.isLoggedIn, (req, res) => {
  return res.status(200).json(res.locals.loggedIn);
});

//handle requests for static files
app.use("/assets", express.static(path.resolve(__dirname, "../src/assets")));

// route handler to respond with main app
app.get("/", (req: Request, res: Response) => {
  return res.sendFile(path.join(__dirname, "../src/index.html"));
});

// 404 error handler :)
app.get('*', (req, res) => {
  return res.status(404).send('This page does not exist.');
});

//global error handler
app.use(
  "/",
  (err: ServerError, req: Request, res: Response, next: NextFunction) => {
    const defaultErr: ServerError = {
      log: "Express error handler caught unknown middleware error",
      status: 400,
      message: { err: "An error occurred" },
    };
    const errorObj: ServerError = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);

    return res.status(errorObj.status).json(errorObj.message);
  }
);

//serve app on port
app.listen(PORT, () => console.log("server is listening on port 3000"));
