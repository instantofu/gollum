var names = ["Tam", "Muneeb", "Hoa", "Maida", "Dennis", "Srijana", "Hadi", "Dirk"];


function whosNextGollum() {

    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople); //0-0.99999 0.4.99999
    var randomPerson = names[randomPersonPosition];

    return randomPerson;
  
}

nextGollum = whosNextGollum(names);

document.querySelector("h1").innerHTML = "next Gollum is " + nextGollum + " !";
