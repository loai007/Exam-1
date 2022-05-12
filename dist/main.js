const fetchRecipesData = function () {
  let input = $("#ingredientName").val();

  $.get(`recipes/${input}`, function (recipesData) {
    render(recipesData)
  });
};
