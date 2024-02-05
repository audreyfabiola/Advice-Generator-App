// Define the API link to fetch advice
const API_LINK = "https://api.adviceslip.com/advice";

// Get references to HTML elements
const adviceNumberSpan = document.querySelector('.advice-generator__advice-number');
const adviceQuoteSlot = document.querySelector('.advice-generator__quote');
const fetchBtn = document.querySelector('button.advice-generator__btn');

// Async function to fetch new advice from the API
const fetchNewAdvice = async () => {
    // Await the fetch request
    const response = await fetch(API_LINK);
    // Await parsing the response as JSON
    const advice = await response.json();
    return advice;
}; 

// Function to render advice on the webpage
const renderAdvice = (adviceObj) => {
    // Destructure advice object
    const { id, advice } = adviceObj;
    // Update HTML elements with new advice
    adviceNumberSpan.textContent = `ADVICE #${id}`;
    adviceQuoteSlot.textContent = advice;
}; 

// Async function to generate and render new advice
const generateNewAdvice = async () => {
    // Fetch new advice
    const data = await fetchNewAdvice();
    const advice = data.slip;

    // Render the new advice
    renderAdvice(advice);
}; 

// Event listener for generating new advice on button click
window.addEventListener('DOMContentLoaded', () => {
    fetchBtn.addEventListener('click', generateNewAdvice);
});

// Uncommented code
// setTimeout(() => {console.log(2.5)}, 1)
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
