const quoteSelector = document.querySelector('.quote');
const QuoteButton = document.getElementById('new-quote-btn');

async function getRandomQuote() {
    try {
        const dataLink = await fetch('https://type.fit/api/quotes');
        if (dataLink.ok) {
        const data = await dataLink.json();
        const lndexGenerator = Math.floor(Math.random() * data.length);
        const randomQuote = data[lndexGenerator];
        quoteSelector.innerHTML = `
        <p>${randomQuote.text}</p> 
        <p> - ${randomQuote.author || 'Unknown author' }</p>
        `;
        } 
        else {
        quoteSelector.innerHTML = 'Failed to fetch the quote.';
        }
    } catch (error) {
        console.error('Error in fetching the quote:', error);
        quoteSelector.innerHTML = 'Error occurred while fetching the quote.';
    }
}
QuoteButton.addEventListener('click', getRandomQuote);
getRandomQuote();