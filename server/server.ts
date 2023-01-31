import express, {
  Express,
  Request,
  Response,
  NextFunction,
  RequestHandler,
import { userController } from "./controllers/userController";
import { applicationController } from "./controllers/applicationController";

const PORT: number = 3000;
const app: Express = express();

// use cors
app.use(cors());

app.use(express.json());

/**
 * handle requests for static files
//  */
app.use('/assets', express.static(path.resolve(__dirname, '../src/assets')));

// route handler to respond with main app
app.get('/', (req: Request, res: Response) => {
  return res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.use('/test', (req: Request, res: Response) => {
  console.log('test path ran');
  return res.send('test path ran successfully');
});

app.use(
  '/',
  (err: ServerError, req: Request, res: Response, next: NextFunction) => {
    const defaultErr: ServerError = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };
    const errorObj: ServerError = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);

    return res.status(errorObj.status).json(errorObj.message);
  }
);

app.listen(PORT, () => console.log('server is listening on port 3000'));
