DROP DATABASE IF EXISTS small_business_db;
CREATE DATABASE small_business_db;
USE small_business_db;

CREATE TABLE department (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30)
);

CREATE TABLE role (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INTEGER,
  /*links a role to a specific department*/
  FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INTEGER,
  manager_id INTEGER,
  /*links employee to their specific role in the role table */
  FOREIGN KEY (role_id) REFERENCES role(id),
  FOREIGN KEY (manager_id) REFERENCES employee(id)
);