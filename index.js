var names = ["Tam", "Muneeb", "Hoa", "Maida", "Dennis", "Srijana", "Hadi", "Dirk"];


function whosNextGollum() {

    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople); //0-0.99999 0.4.99999
    var randomPerson = names[randomPersonPosition];

    return randomPerson;

}

nextGollum = whosNextGollum(names);



/*
$("button").click(function() {
  $("h1").text("next Gollum is " + nextGollum + " !");

  setTimeout(function() {
    $("h1").text("test");
  }, 1000);

});
*/

$("button").on("click", function() {
  $("h1").text(nextGollum + " !");
  $("h1").addClass("h1-name");
  setTimeout(function() {
    //$("h1").fade;
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
    location.reload();
  }, 3000);
});

// onClick="window.location.reload();"
// document.querySelector("h1").innerHTML = "next Gollum is " + nextGollum + " !";
