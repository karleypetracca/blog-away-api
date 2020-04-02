const db = require("./conn"),
	fetch = require("node-fetch");

class BlogModel {
	constructor(id) {
		this.id = id;
	}

	// Posts //

	static async getAllPosts() {
		try {
			let allPosts = await db.one(`SELECT * FROM posts;`);
			return allPosts;
		} catch (error) {
			console.error("ERROR", error);
			return error;
		}
	}

	static async getOnePost(id) {
		try {
			let onePost = await db.one(
				`SELECT * FROM posts 
			  WHERE id = ${id};`
			);
			return onePost;
		} catch (error) {
			console.error("ERROR", error);
			return error;
		}
	}

	// Comments //

	static async getAllComments(id) {
		try {
			let allComments = await db.one(
				`SELECT * FROM comments 
			  WHERE post_id = ${id};`
			);
			return allComments;
		} catch (error) {
			console.error("ERROR", error);
			return error;
		}
	}

	// Authors //

	static async getAllAuthors(id) {
		try {
			let allAuthors = await db.one(`SELECT * FROM authors;`);
			return allAuthors;
		} catch (error) {
			console.error("ERROR", error);
			return error;
		}
	}

	static async getOneAuthor(id) {
		try {
			let oneAuthor = await db.one(
				`SELECT * FROM authors 
			  WHERE id = ${id};`
			);
			return oneAuthor;
		} catch (error) {
			console.error("ERROR", error);
			return error;
		}
	}
}

module.exports = BlogModel;
