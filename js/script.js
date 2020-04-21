/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * quote - string - contains the quote
 * source - string - contains the "auhtor" of the quote
 * citation - string - contains the medium the quote is taken from
 * year - integer - represents the published year of the quote
 * topic - string - represents a general topic the quote is related to.
***/
const quotes = [
  {
    quote: 'A wonderful fact to reflect upon, that every human creature is constituted to be that profound secret and mystery to every other.',
    source: 'Charles Dickens',
    citation:'A tale of Two Cities',
    year: 1859,
    topic: 'psychology'
  },
  {
    quote: 'According to Madam Pomfrey, thoughts could leave deeper scars than almost anything else.',
    source: 'J.K. Rowling',
    citation:'Harry Potter and the Order of the Phoenix',
    year: 2003,
    topic: 'psychology'
  },
  {
    quote: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live',
    source: 'John Woods',
    citation: '',
    year: '',
    topic: 'coding'
  },
  {
    quote: 'You\'ve baked a really lovely cake, but then you\'ve used dog shit for frosting.',
    source: 'Steve Jobs',
    citation: '',
    year:'',
    topic: 'coding'
  },
  {
    quote: 'Object-oriented programming offers a sustainable way to write spaghetti code. It lets you accrete programs as a series of patches.',
    source: 'Paul Graham',
    citation: ' Hackers & Painters: Big Ideas from the Computer Age',
    year: 2004,
    topic: 'coding'
  },
  {
    quote: 'If you ever find yourself in the wrong story, leave.',
    source: 'Mo Willems',
    citation: 'Goldilocks and the Three Dinosaurs',
    year:2012,
    topic: 'psycholoogy'
  },
  {
    quote: 'Our wounds are often the openings into the best and most beautiful part of us.',
    source: 'David Richo',
    citation:'',
    year:'',
    topic: 'psychology'
  }

];

//console.log(quotes);

/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  let randQuote = Math.floor(Math.random() * (quotes.length)); //generate random number 

  //find random quote in the random number
  return quotes[randQuote];


}
//console.log(getRandomQuote(quotes));

/***
 * RandomBackGroundColor Generator
 */
function randomBgColor(){
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let bgColor = `rgb(${red},${green},${blue})`;
  //console.log(bgColor);
  document.body.style.background = bgColor;
}
/***
 * `printQuote` function
***/
function printQuote(){
  //store Randomquote
  let prQuote = getRandomQuote();
  let html = `
    <p class="quote"> ${prQuote.quote} </p>
    <p class="source"> ${prQuote.source}`;
  
  //check if property of citation hast content
  if (!(prQuote.citation === '')){
    html += ` 
      <span class="citation"> ${prQuote.citation} </span>
    `;
  }
  //check if property of year hast content
  if (!(prQuote.year === '')){
    html += `<span class="year"> ${prQuote.year} </span>`;
  }
  //check if property of topic hast content
  if (!(prQuote.topic === '')){
    html += `<span class="topic"> ,${prQuote.topic} </span>`;
  }
  html += '</p>';

  //console.log(html);
  
  randomBgColor();
  return document.getElementById('quote-box').innerHTML = html; ;
}

//Reload every 7 seconds
setInterval(printQuote, 7000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);