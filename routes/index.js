const express = require("express"),
	router = express.Router(),
	BlogModel = require("../models/BlogModel");

/* GET home page. */
router.get("/", function(req, res) {
	res.render("index", { title: "Welcome to the React-Blog API" });
});

/* JSON all posts */
router.get("/api/posts", async (req, res) => {
	let data = await BlogModel.getAllPosts();

	res.json(data);
});

/* JSON one post */
router.get("/api/post/:post_id?", async (req, res) => {
	const { post_id } = req.params;
	let data = await BlogModel.getOnePost(post_id);

	res.json(data);
});

/* JSON all comments */
router.get("/api/comments/:post_id?", async (req, res) => {
	const { post_id } = req.params;
	let data = await BlogModel.getAllComments(post_id);

	res.json(data);
});

/* JSON all authors */
router.get("/api/authors", async (req, res) => {
	let data = await BlogModel.getAllAuthors();

	res.json(data);
});

/* JSON one author */
router.get("/api/author/:author_id?", async (req, res) => {
	const { author_id } = req.params;
	let data = await BlogModel.getOneAuthor(author_id);

	res.json(data);
});

module.exports = router;
