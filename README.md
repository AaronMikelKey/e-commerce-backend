# E-commerce API

## Description

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

This is a project demonstrating an E-commerce API which uses ExpressJS and a MySQL database, along with Sequelize for ORM.

[![Example Image](/example.PNG)](https://drive.google.com/file/d/1Z95wfhUNswgQJEqIo_1Q2WcGW6hnqkJy/view)

---

## Table of Contents

[Installation](#Installation)

[Usage](#Usage)

[License](#License)

[Questions](#Questions)

---

## Installation

To install, clone this project and run `npm i`

---

## Usage

To use this project, you will need to have MySQL server installed or optionally use a JAWS_DB instance. Create a .env file with the following:

```
DB_NAME="ecommerce_db"
JAWSDB_URL="your_url" (optional if using a local server)
DB_USER="your_mysql_username"
DB_PW="your_mysql_password"
```

Start your MySQL server, and run `source db/schema.sql`

switch to the directory and run `npm run seed` and then `npm start`

---

## License

[ISC License](https://opensource.org/licenses/ISC)

---

## Questions?

For any questions, please visit my Github: [github.com/AaronMikelKey](https://github.com/AaronMikelKey)

or send me an email at [AaronMikelKey@gmail.com](mailto:AaronMikelKey@gmail.com)
