var MY_ARTICLES = {
	articles: ['albums2016', 'albums2017']	
}

createLoadContentFunction = function(category) {
  return function(pushState) {
    if(MY_ARTICLES.categories.indexOf(category) == -1) {
      console.log("category does not exist.");
      //create some error page
    }

    //state tracker
    MY_ARTICLES.selected = category;
    if(pushState !== false) {
      if(category === "home") {
        window.history.pushState("home", "Eric Song", "/");
      } else {
        window.history.pushState(category, "Eric Song", "/" + category);
      }
    }

    for(var i = 0; i < MY_ARTICLES.categories.length; i++) {
      var container_name = "#" + MY_ARTICLES.categories[i] + "-container",
          category_name = "#" + MY_ARTICLES.categories[i] + "-category";

      //switch content/category
      if(MY_ARTICLES.categories[i] === category) {
        $(container_name).css('display', 'block');
        $($(category_name).find('hr')[0]).css('visibility', 'visible');
      } else {
        $(container_name).css('display', 'none');
        $($(category_name).find('hr')[0]).css('visibility', 'hidden');
      }
    }
  }
}