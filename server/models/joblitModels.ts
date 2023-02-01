const { Pool } = require("pg");
const dotenv = require('dotenv')
dotenv.config()
const PG_URI = process.env.POSTGRES_URI_;

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text: string, params: any, callback: any) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  },
};

/* 
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
	first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
	password VARCHAR NOT NULL,
	email VARCHAR UNIQUE NOT NULL, 
	created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
*/

/*
  CREATE TABLE applications (
    application_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    companyName VARCHAR,
    jobTitle VARCHAR,
    jobDescription VARCHAR,
    location VARCHAR,
    applicationDate VARCHAR,
    salaryRange VARCHAR,
    contactPerson VARCHAR,
    contactEmail VARCHAR,
    benefits VARCHAR,
    notes VARCHAR,
    created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
*/

/* 
CREATE TABLE sessions (
  session_id SERIAL PRIMARY KEY,
  cookie_id VARCHAR UNIQUE NOT NULL,
	created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
*/

/*
STRETCH GOALS:
Add fulltime/part-time and tags to applications
Build salary as ranges with radio buttons
 */
