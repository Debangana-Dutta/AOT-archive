const quotes = [
    "If you win, you live. If you lose, you die. If you don't fight, you can't win!",
    "The world is cruel, but also very beautiful.",
    "I'm not a monster. I'm a soldier.",
    "Dedicate your heart!"
];

function newQuote() {
    const quoteDisplay = document.getElementById('quote-display');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    
    // Add a simple fade animation via classes
    quoteDisplay.style.opacity = 0;
    setTimeout(() => {
        quoteDisplay.innerText = quotes[randomIndex];
        quoteDisplay.style.opacity = 1;
    }, 200);
}