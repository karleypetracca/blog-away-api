const db = require("./conn"),
	fetch = require("node-fetch");

class BlogModel {
	constructor(id) {
		this.id = id;
	}

	// Posts //

	static async getAllPosts() {
		try {
			let allPosts = await db.any(`
				SELECT * FROM posts
				INNER JOIN authors
				ON posts.author_id = authors.id;
			`);
			return allPosts;
		} catch (error) {
			console.error("ERROR", error);
			return error;
		}
	}

	static async getOnePost(id) {
		try {
			let onePost = await db.one(`
				SELECT * FROM posts
				INNER JOIN authors
				ON posts.author_id = authors.id 
			  WHERE posts.author_id = ${id};
			`);
			return onePost;
		} catch (error) {
			console.error("ERROR", error);
			return error;
		}
	}

	// Comments //

	static async getAllComments(id) {
		try {
			let allComments = await db.any(`
				SELECT comments.comment, comments.post_id, comments.author_id, authors.author as comment_author, authors.email as comment_email FROM comments
				INNER JOIN authors
				ON comments.author_id = authors.id
			  WHERE post_id = ${id};
			`);
			return allComments;
		} catch (error) {
			console.error("ERROR", error);
			return error;
		}
	}

	// Authors //

	static async getAllAuthors() {
		try {
			let allAuthors = await db.any(`
				SELECT * FROM authors;
			`);
			return allAuthors;
		} catch (error) {
			console.error("ERROR", error);
			return error;
		}
	}

	static async getOneAuthor(id) {
		try {
			let oneAuthor = await db.one(`
				SELECT * FROM authors 
				INNER JOIN posts
				ON authors.id = posts.author_id
			  WHERE authors.id = ${id};
			`);
			return oneAuthor;
		} catch (error) {
			console.error("ERROR", error);
			return error;
		}
	}
}

module.exports = BlogModel;
