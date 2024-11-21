const express = require("express");
const {
    getBlogs,
    createBlog,
    getBlogById,
    deleteBlogById
} = require("../controllers/blogController");
const authenticate = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getBlogs);

router.get("/:id", getBlogById);

router.post("/", authenticate, createBlog);

router.delete("/:id", deleteBlogById);

module.exports = router;
