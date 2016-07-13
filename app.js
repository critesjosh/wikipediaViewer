var searchTerm = '';
var titles = [];
var descriptions = [];
var links = [];

$(document).ready(function() {
  $(".search").append('<i id="search-icon" class="fa-5x fa fa-search" aria-hidden="true"></i>');
  $(".w").append('</br><i id="wiki-icon" class="fa-2x fa fa-wikipedia-w" aria-hidden="true"></i>');
  $('#search-icon').mouseover(function(){
    $("#search-icon").animate({
      opacity: 0
    }, 500,
    function() {
      $(this).animate({
        opacity: 1
      }, 500);
      $('#search-icon').replaceWith('<i class="search-input fa fa-search" aria-hidden="true"></i>  <input id="search-input" value="" class="search-input" type="text">');
      $('#search-input').change(function(){
        searchTerm = $('#search-input').val();
        sendRequest(searchTerm);
      });
    });
  });
});

var sendRequest = function(searchTerm){
    $.ajax( "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=wikiCallback", {
      dataType: 'jsonp'
      }).done(function(data){
      console.log(data);
      data[1].forEach(function(element){
        titles.push(element);
      });
      data[2].forEach(function(element){
        descriptions.push(element);
      });
      data[3].forEach(function(element){
        links.push(element);
        console.log(titles);
      });
      displayResults();
    });
}

var displayResults = function(){
  $('.search').hide();
  for (var i = 0; i < titles.length; i++){
    var title = titles[i];
    var description = descriptions[i];
    var link = links[i];
    $('.results').append('<div class="result-div"><h2>' + title + '</h2><p>' + description + '</p><a href=' + link + '>' + link + '</a></div>');
  }

}
