const connection = require("./db");
const createCategoriesTable = `
CREATE TABLE IF NOT EXISTS categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);
`;

connection.query(createCategoriesTable, (err, results) => {
  if (err) {
    console.error("Error creating categories table:", err);
  } else {
    console.log("Categories table created successfully");
  }
});

// Then create the `product` table
const createProductTable = `
CREATE TABLE IF NOT EXISTS product (
  id INT AUTO_INCREMENT PRIMARY KEY,
  supplier_id INT,
  product_info TEXT,
  website_url VARCHAR(255),
  category_id INT,
  quantity_required INT,
  timeline DATE,
  location VARCHAR(255),
  FOREIGN KEY (supplier_id) REFERENCES suppliers(id),
  FOREIGN KEY (category_id) REFERENCES categories(id)
);
`;

connection.query(createProductTable, (err, results) => {
  if (err) {
    console.error("Error creating product table:", err);
  } else {
    console.log("Product table created successfully");
  }
  connection.end();
});
