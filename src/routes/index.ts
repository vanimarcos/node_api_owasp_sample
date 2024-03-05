import { Router, Request, Response } from 'express';
import { HTTP_STATUS_CODE } from '../utils/httpsCodes';

const routes = Router();

const BASE_ROUTE = '/';

routes.get(BASE_ROUTE, (req: Request, res: Response) =>
  res.status(HTTP_STATUS_CODE.OK).json('Hello from the API'),
);


export default routes;
export { BASE_ROUTE };
