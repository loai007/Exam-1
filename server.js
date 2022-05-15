const express = require("express");
const path = require("path");
const app = express();
const urllib = require("urllib");

const port = 8080;
let recipesArr;
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

const buildRecipes = function (data) {
  recipesArr = [];
  for (let rec of data.results) {
    recipesArr.push({
      ingredients: rec.ingredients,
      title: rec.title,
      thumbnail: rec.thumbnail,
      href: rec.href,
    });
  }
};

app.get("/recipes/:ingredientName", function (req, res) {
  const ingredientName = req.params.ingredientName;

  urllib.request(
    "https://recipes-goodness.herokuapp.com/recipes/" + ingredientName,
    function (err, data, res) {
      if (err) {
        throw err;
      }

      buildRecipes(JSON.parse(data.toString()), recipesArr);
      res.send(recipesArr);
    }
  );
});

app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});
