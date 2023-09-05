const qText = document.querySelector("#quote");
const authorN = document.querySelector("#author #name");
const qBtn = document.querySelector("button");

const stormlightQuotes = [
    {
        quote: "\"Two blind men waited at the end of an era, contemplating beauty.\"",
        author: "Hoid"
    },
    {
        quote: "\"Life before death. Strength before weakness. Journey before destination.\"",
        author: "Kaladin Stormblessed"
    },
    {
        quote: "\"Words are where most change begins.\"",
        author: "Navani Kholin"
    },
    {
        quote: "\"The purpose of a storyteller is not to tell you how to think, but to give you questions to think upon.\"",
        author: "Wit"
    },
    {
        quote: "\"Expectation is the root of all heartache.\"",
        author: "Dalinar Kholin"
    },
    {
        quote: "\"The most important step a person can take is always the next one.\"",
        author: "Dalinar Kholin"
    },
    {
        quote: "\"Life breaks us, Teft. Then we fill the cracks with something stronger.\"",
        author: "Brandon Sanderson"
    },
    {
        quote: "\"Honor is not dead so long as he lives in the hearts of men!\"",
        author: "Captain Notum"
    },
    {
        quote: "\"I will take responsibility for what I have done. If I must fall, I will rise each time a better man.\"",
        author: "Dalinar Kholin"
    }
];

function randomQ() {
    const randomIndex = Math.floor(Math.random() * stormlightQuotes.length);
    const randomQuote = stormlightQuotes[randomIndex];
    qText.innerText = randomQuote.quote;
    authorN.innerText = randomQuote.author;
}

qBtn.addEventListener("click", randomQ); 
randomQ();
