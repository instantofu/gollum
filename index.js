var names = ["Tam", "Muneeb", "Hoa", "Maida", "Dennis", "Srijana", "Silke"];


function whosPaying() {

    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople); //0-0.99999 0.4.99999
    var randomPerson = names[randomPersonPosition];

    return randomPerson;
  
}

nextGollum = whosPaying(names);

document.querySelector("h1").innerHTML = "next Gollum is " + nextGollum + " !";