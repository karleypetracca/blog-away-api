const express = require("express"),
	router = express.Router(),
	BlogModel = require("../models/BlogModel");

/* // // GET home page. // // */
router.get("/", function (req, res) {
	res.render("index", { title: "Welcome to the React-Blog API" });
});

/* // // GET JSON API Calls // // */
/* JSON all posts */
router.get("/api/posts", async (req, res) => {
	let data = await BlogModel.getAllPosts();

	res.json(data).status(200);
});

/* JSON one post */
router.get("/api/post/:post_id?", async (req, res) => {
	const { post_id } = req.params;
	let data = await BlogModel.getOnePost(post_id);

	res.json(data).status(200);
});

/* JSON all comments */
router.get("/api/comments/:post_id?", async (req, res) => {
	const { post_id } = req.params;
	let data = await BlogModel.getAllComments(post_id);

	res.json(data).status(200);
});

/* JSON all authors */
router.get("/api/authors", async (req, res) => {
	let data = await BlogModel.getAllAuthors();

	res.json(data).status(200);
});

/* JSON one author */
router.get("/api/author/:author_id?", async (req, res) => {
	const { author_id } = req.params;
	let data = await BlogModel.getOneAuthor(author_id);

	res.json(data).status(200);
});

/* // // POST JSON API Calls // // */
/* add blog post */
router.post("/post/post", async (req, res) => {
	const { title, post, author_id } = req.body;
	const response = await BlogModel.addPost(title, post, author_id);

	if (response.command === "INSERT" && response.rowCount >= 1) {
		res.sendStatus(200);
	} else {
		res.send("Could not add new comment").status(409);
	}
});

/* add comment */
router.post("/post/comment", async (req, res) => {
	const { comment, author_id, post_id } = req.body;
	const response = await BlogModel.addComment(comment, author_id, post_id);

	if (response.command === "INSERT" && response.rowCount >= 1) {
		res.sendStatus(200);
	} else {
		res.send("Could not add new comment").status(409);
	}
});

module.exports = router;
