const express = require("express");
const cors = require("cors");
const { getAllBlogPosts } = require("./Data");

const PORT = 5000;
const app = express();
const allPosts = getAllBlogPosts();
app.use(cors());

app.get("/data", (req, res) => {
  res.json(allPosts); // Send the data as JSON response
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
