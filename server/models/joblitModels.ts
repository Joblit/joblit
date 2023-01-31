const { Pool } = require("pg");

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
	first_name VARCHAR UNIQUE NOT NULL, ---> Should not be unique??
  last_name VARCHAR UNIQUE NOT NULL, ---> Should not be unique??
	password VARCHAR NOT NULL,
	email VARCHAR NOT NULL, ----> SHOULD be unique??
	created_on TIMESTAMP
);
*/

/* 
CREATE TABLE applications (
  application_id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
	title VARCHAR NOT NULL,
  company VARCHAR,
	salary INT,
	description VARCHAR,
  contact_name VARCHAR,
  contact_email VARCHAR,
  location VARCHAR,
  status VARCHAR,
	created_on TIMESTAMP
);
*/

/*
STRETCH GOALS:
Add fulltime/part-time and tags to applications
Build salary as ranges with radio buttons
 */

//Create user query
// INSERT INTO users (first_name, last_name, password, email)
// VALUES ('Macon', 'Bacon', 'crispy', 'chrispbacon@gmail.com');

//Create application query
// INSERT INTO applications (user_id, title)
// VALUES (1, 'Macons Dream Job');

//Get user plus applications query
// SELECT u.*, app.*
// FROM users u
// INNER JOIN applications app
// ON u.user_id=app.user_id;
