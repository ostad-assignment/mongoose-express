const express = require("express")
const Product = require("./mongoose-schema-model")

const app = express()

// Route to fetch all products
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({}, "name price") // Fetching only the name and price fields

    res.json(products)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Internal server error" })
  }
})

// Start the server
app.listen(3000, () => {
  console.log("Server is listening on port 3000")
})
