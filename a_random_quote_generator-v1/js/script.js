// FSJS - Random Quote Generator

// Each array contains: qoute, source, citation and year.
const quotes = [
{   quote: `Do or do not, there is not try.`,
    source: `Yoda, Jedi Master`,
    citation: `George Lucas, Star Wars: The Empire Strikes Back.`,
    year: 1980 
},
{   quote: `Love your neighbor as yourself.`,
    source: `Jesus of Nazareth`,
    citation: `Matthew 19:19b`,
    year: `1st Century AD`
},
{   quote: `My bed is a magical place where I suddenly remember everything I forgot to do.`,
    source: `Anonymous`,
},
{   quote: `Deeds will not be less valiant because they are unpraised.`,
    source: `Aragorn, King of Gondor`,
    citation: `J.R.R. Tolkien, The Return of the King`,
    year: 1955
},
{   quote: `You don't get to choose not to pay a price, you only get to choose which price you pay.`,
    source: `Jordan B. Peterson`,
    citation: `12 Rules for Life`,
    year: 2018
}
];


// Returns a random object from the quotes array.
function getRandomQuote( quotes ) {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return randomQuote;
}
console.log(getRandomQuote( quotes ));


// returns the randomQuote function into a string and prints it to the HTML document.
 function printQuote( randomQuote ) {
    let stringOfQuoteProperties = `
        <p class="quote"> ${randomQuote.quote} </p>
        <p class="source"> ${randomQuote.quote}
        <span class="citation"> ${randomQuote.citation} </span>
        <span class="year"> ${randomQuote.year} </span>
        </p>
        `;
        return stringOfQuoteProperties;
        document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;
 } 
 

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById(`loadQuote`).addEventListener(`click`, printQuote, false);