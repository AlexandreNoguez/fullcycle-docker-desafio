const express = require("express");
const mysql = require("mysql2/promise");
const { faker } = require("@faker-js/faker");

const app = express();
const port = 3000;

const dbConfig = {
  host: "mysql-db",
  user: "root",
  password: "root",
  database: "people_db",
};

app.get("/", async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);

    await connection.query(`
      CREATE TABLE IF NOT EXISTS people (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL
      );
    `);

    const randomName = faker.person.fullName();
    await connection.query("INSERT INTO people (name) VALUES (?)", [randomName]);

    const [rows] = await connection.query("SELECT * FROM people");

    const namesList = rows.map((row) => `<li>${row.name}</li>`).join("");

    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <ul>${namesList}</ul>
    `);

    await connection.end();
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
