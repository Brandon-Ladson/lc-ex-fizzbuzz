// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz

// utilizzo un ciclo per estrarre i numeri
var numroLista = "";
for (var i = 1; i <= 100; i++) {

  // console.log(i);

  // definiamo i multipli di 3 e 5
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
    numroLista = numroLista + "<li>" + "FizzBuzz" + "</li>";

  // definire i multipli di 3
  } else if (i % 3 === 0) {
    console.log("Fizz");
    numroLista = numroLista + "<li class='fizz'>" + "Fizz" + "</li>";

  // definire i multipli di 5
  } else if (i % 5 === 0) {
    console.log("Buzz");
    numroLista = numroLista + "<li>" + "Buzz" + "</li>";

  } else {
    console.log(i);
    numroLista = numroLista + "<li>" + i + "</li>";
  }


}

// stampiamo la lista di numeri con rispettivi fizz buzz e fizzbuzz
document.getElementById('lista').innerHTML = numroLista;
