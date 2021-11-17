import mongoose from 'mongoose';
import config from 'config';
import logger from '../utils/logger';

async function connect(){
  const dbUri = config.get<string>("mongodbUri")

  try{
    await mongoose.connect(dbUri);
    logger.info("Connected db")
  }
  catch(error){
    logger.error("Could not connect to db")
    process.exit(1);
  }
}

export default connect;