/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote: 'A wonderful fact to reflect upon, that every human creature is constituted to be that profound secret and mystery to every other.',
    source: 'Charles Dickens',
    citation:'A tale of Two Cities',
    year: 1859
  },
  {
    quote: 'According to Madam Pomfrey, thoughts could leave deeper scars than almost anything else.',
    source: 'J.K. Rowling',
    citation:'Harry Potter and the Order of the Phoenix',
    year: 2003
  },
  {
    quote: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live',
    source: 'John Woods',
    citation:'',
    year:''
  },
  {
    quote: "You've baked a really lovely cake, but then you've used dog shit for frosting.",
    source: 'Steve Jobs',
    citation: '',
    year:''
  },
  {quote: 'Object-oriented programming offers a sustainable way to write spaghetti code. It lets you accrete programs as a series of patches.',
    source: 'Paul Graham',
    citation: ' Hackers & Painters: Big Ideas from the Computer Age',
    year: 2004
  },
  {quote: 'If you ever find yourself in the wrong story, leave.',
    source: 'Mo Willems',
    citation: 'Goldilocks and the Three Dinosaurs',
    year:2012
  },
  {
    quote: 'Our wounds are often the openings into the best and most beautiful part of us.',
    source: 'David Richo',
    citation:'',
    year:''
  }

];

//console.log(quotes);

/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  let rand;
  

}


/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);