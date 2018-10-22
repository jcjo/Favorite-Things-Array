$(document).ready(function(){
  $("#favorite_form").submit(function(event){
    event.preventDefault();
    var name = $("input#name").val();
    var favorite1 = $("input#favorite1").val();
    var favorite2 = $("input#favorite2").val();
    var favorite3 = $("input#favorite3").val();

    var favorites = [];
    favorites.push(name, favorite1, favorite2, favorite3);
    var newFaves = [];
    newFaves.push(favorites[0], favorites[3], favorites[1])

    console.log(favorites, newFaves);

    var favorites = [name, favorite1, favorite2, favorite3];
    favorites.forEach(function(favorite) {
     $("ul#list").append("<li>" + favorite + "</li>");
   });
  });
});

    // for each ("newFaves[i]") {
    //   $("ul#list").append("<li>" + newFaves[i] + "</li>")
    // }
