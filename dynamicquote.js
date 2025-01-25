
const quotes = [
    "LET'S CHOOSE YOUR DREAM DESTINATION",
    "TRAVEL FAR, TRAVEL WIDE, TRAVEL OFTEN",
    "ADVENTURE AWAITS, GO FIND IT",
    "EXPLORE. DREAM. DISCOVER.",
    "LIVE WITH NO EXCUSES, TRAVEL WITH NO REGRETS"
];

let index = 0;
const quoteElement = document.getElementById("quote");

function changeQuote() {
    index = (index + 1) % quotes.length;
    quoteElement.textContent = quotes[index];
}

setInterval(changeQuote, 3000);


