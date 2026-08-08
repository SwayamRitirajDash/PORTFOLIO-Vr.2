const quotes = [

{
quote:"The best way to predict the future is to invent it.",
author:"Alan Kay"
},

{
quote:"First, solve the problem. Then, write the code.",
author:"John Johnson"
},

{
quote:"Programs must be written for people to read.",
author:"Harold Abelson"
},

{
quote:"Stay hungry. Stay foolish.",
author:"Steve Jobs"
},

{
quote:"The expert in anything was once a beginner.",
author:"Helen Hayes"
},

{
quote:"Code is like humor. When you have to explain it, it's bad.",
author:"Cory House"
},

{
quote:"Simplicity is the soul of efficiency.",
author:"Austin Freeman"
},

{
quote:"Learning never exhausts the mind.",
author:"Leonardo da Vinci"
},

{
quote:"Success is the sum of small efforts repeated every day.",
author:"Robert Collier"
},

{
quote:"Dream big. Start small. Act now.",
author:"Robin Sharma"
}

];

const quoteText=document.getElementById("quoteText");

const quoteAuthor=document.getElementById("quoteAuthor");

const newQuote=document.getElementById("newQuote");

function loadQuote(){

const random=quotes[Math.floor(Math.random()*quotes.length)];

quoteText.style.opacity=0;

quoteAuthor.style.opacity=0;

setTimeout(()=>{

quoteText.innerText=`"${random.quote}"`;

quoteAuthor.innerText=`— ${random.author}`;

quoteText.style.opacity=1;

quoteAuthor.style.opacity=1;

},200);

}

loadQuote();

newQuote.addEventListener("click",loadQuote);