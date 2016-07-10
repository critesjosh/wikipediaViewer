var searchTerm = 'bananas';

var titles = [];
var descrptions = [];
var links = [];

var sendRequest = function(searchTerm){

    $.ajax( "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=wikiCallback", {
      dataType: 'jsonp'
      }).done(function(data){
      data[1].forEach(function(element){
        titles.push(element);
      });
      data[2].forEach(function(element){
        descrptions.push(element);
      });
      data[3].forEach(function(element){
        links.push(element);
      });
    });
}
