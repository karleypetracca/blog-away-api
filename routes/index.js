const express = require("express"),
	router = express.Router();

/* GET home page. */
router.get("/", function(req, res) {
	res.render("index", { title: "Express" });
});

// api test
router.get("/api", async (req, res) => {
	let data = (await drinkModel.getRandomCocktail()) || "";

	res.json(data);
});

module.exports = router;
