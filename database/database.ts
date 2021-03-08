import * as dotenv from "dotenv";

dotenv.config({path: __dirname + "../.env"});

import {Pool} from "pg";

const database = new Pool({
  user: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  port: Number(process.env.PG_PORT),
});

database.connect();

export default database;
