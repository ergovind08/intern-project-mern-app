const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors"); // Import cors

const app = express();
const port = 8080;

// Use the cors middleware
app.use(
  cors({
    origin: "http://localhost:3002",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware
app.use(bodyParser.json());

// Create a connection to the database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "mydata",
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    process.exit(1);
  }
  console.log("MySQL connected successfully");
});

// Create Product
app.post("/api/requests", (req, res) => {
  console.log("Data received from frontend:", req.body);

  const {
    name,
    description,
    price,
    stock_quantity,
    category_id,
    brand,
    image_url,
    created_at,
  } = req.body;

  const query =
    "INSERT INTO products (name, description, price, stock_quantity, category_id, brand, image_url, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  connection.query(
    query,
    [
      name,
      description,
      price,
      stock_quantity,
      category_id,
      brand,
      image_url,
      created_at,
    ],
    (err, result) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ error: "Database error" });
      }
      res.status(201).json({
        id: result.insertId,
        name,
        description,
        price,
        stock_quantity,
        category_id,
        brand,
        image_url,
        created_at,
      });
      console.log("Saved in database");
    }
  );
});

// Show All Products with optional filtering by category_id
app.get("/api/products", (req, res) => {
  const categoryId = req.query.category_id;
  let query = "SELECT * FROM products";
  const params = [];

  if (categoryId) {
    query += " WHERE category_id = ?";
    params.push(categoryId);
  }

  connection.query(query, params, (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.status(200).json(results);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
