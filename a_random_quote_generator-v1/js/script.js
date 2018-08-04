// FSJS - Random Quote Generator

// Each array contains: quote, source, optionally: citation, year, category.
const quotes = [
{   quote: `Do or do not, there is not try.`,
    source: `Yoda, Jedi Master`,
    citation: `George Lucas, Star Wars: The Empire Strikes Back`,
    year: 1980,
    category: "Sci-fi"
},
{   quote: `Love your neighbor as yourself.`,
    source: `Jesus of Nazareth`,
    citation: `Matthew 19:19b`,
    category: "Religion"
},
{   quote: `My bed is a magical place where I suddenly remember everything I forgot to do.`,
    source: `Anonymous`,
    category: "Humor"
},
{   quote: `Deeds will not be less valiant because they are unpraised.`,
    source: `Aragorn, King of Gondor`,
    citation: `J.R.R. Tolkien, The Return of the King`,
    year: 1955,
    category: "Fantasy"
    
},
{   quote: `You don't get to choose not to pay a price, you only get to choose which price you pay.`,
    source: `Jordan B. Peterson`,
    citation: `12 Rules for Life`,
    year: 2018,
    category: "Self-Help"
}
];


// Returns a random object from the quotes array.
function getRandomQuote( quotes ) {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return randomQuote;
}
console.log(getRandomQuote( quotes ));

//random background color generator to be called in the printQuote function below-- color spectrum limited to ensure white text is readable
function random_bg_color() {
    let r = Math.floor(Math.random() * 195);
    let g = Math.floor(Math.random() * 195);
    let b = Math.floor(Math.random() * 195);
    let bgColor = `rgb(${r}, ${g}, ${b})`; 
    document.body.style.background = bgColor;
    }

// returns the randomQuote function into a string and prints it to the HTML document.
 function printQuote( ) {
    let randomQuote = getRandomQuote(quotes);
    let stringOfQuoteProperties = `
        <p class="quote">${randomQuote.quote}</p>
        <p class="source">${randomQuote.source}
        `;
     //Prints only if object contains citation value.
    if  (randomQuote.citation )  {
        stringOfQuoteProperties += `
        <span class="citation">${randomQuote.citation}</span>
        `;
    } 

    //Prints only if object contains year value
     if (randomQuote.year){  
    stringOfQuoteProperties += `
    <span class="year">${randomQuote.year}</span>
    `;
    }
    //Prints only if object contains category value
    if (randomQuote.category){  
        stringOfQuoteProperties += `
        <span class="category">, ${randomQuote.category}</span>
        `;
        }
// closing tag for source, citation and year.
        stringOfQuoteProperties += `</p>`; 

        document.getElementById('quote-box').innerHTML = stringOfQuoteProperties; 
        //random color for random quote
        random_bg_color(); 
 } 
 

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById(`loadQuote`).addEventListener(`click`, printQuote, false);

// Runs the printQuote function every 20 seconds.
setInterval(printQuote, 20000);