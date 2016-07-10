var searchTerm = 'bananas';

    $.ajax( "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=wikiCallback", {
      dataType: 'jsonp'
      }).done(function(data){
      console.log(data);
    });
