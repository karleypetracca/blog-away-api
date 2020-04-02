const db = require("./conn"),
	fetch = require("node-fetch");

class BlogModel {
	constructor(id) {
		this.id = id;
	}

	static async getWithAwait(url) {
		try {
			const response = await fetch(url);
			const data = await response.json();
			return data;
		} catch (error) {
			console.error("ERROR: ", error);
			return error;
		}
	}

	static async getBlogs() {
		try {
			// let avgRating = await db.one(
			//   `SELECT AVG(comment.rating) FROM comment
			//   WHERE comment.drink_id = ${id};`
			// );
			return "";
		} catch (error) {
			console.error("ERROR", error);
			return error;
		}
	}
}

module.exports = BlogModel;
