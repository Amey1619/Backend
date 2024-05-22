const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const readingTime = require("reading-time");

const dir = path.join(__dirname, "content");

const getAllBlogPosts = () => {
  const allFiles = fs.readdirSync(dir);
  const allBlogs = allFiles.map((file) => {
    const filePath = path.join(dir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    const readTime = readingTime(content);
    return { data, content, readTime };
  });

  return allBlogs;
};

module.exports = { getAllBlogPosts };
