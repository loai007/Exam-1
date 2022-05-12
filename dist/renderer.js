const render = function (recipesData) {
  $("#recipes-grid").empty();
  this.source = $("#recipes").html();
  this.template = Handlebars.compile(this.source);
  this.newHTML = this.template({ recipesData });
  $("#recipes-grid").append(this.newHTML);
};
