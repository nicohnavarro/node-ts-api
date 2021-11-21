import express, { Request, Response } from 'express';
import config from 'config';
import connect from './utils/connect';
import logger from './utils/logger';
import routes from './routes';
import deserializeUser from './middlewares/deserializeUser';
import { restResponseTimeHistorgram, startMetricsServer } from './utils/metrics';
import responseTime from 'response-time';

const app = express();
app.use(express.json());
app.use(deserializeUser);
app.use(responseTime((req:Request,res:Response,time:number)=>{
  if(req?.route?.path){
    restResponseTimeHistorgram.observe({
      "method":req.method,
      "route":req.route.path,
      status_code:res.statusCode,
    },time * 1000)
  }
}))
const port = config.get<number>('port');

app.listen(port,async()=>{
  logger.info(`App is running on port ${port}`);
  await connect();
  routes(app);
  startMetricsServer();
})