const quoteText =document.querySelector(".quote"),
autherName=document.querySelector(".auther .name"),
quoteBtn=document.querySelector("button");

soundBtn=document.querySelector(".sound");
copyBtn=document.querySelector(".copy");
twitterBtn=document.querySelector(".twitter");


// simple fetch api and random quote
function randomQuote() {
    // dont understand 
    quoteBtn.classList.add("Loading");
    quoteBtn.innerText='Loading Quote';
        

    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(result => {
       console.log(result); 
       quoteText.innerText=result.content;
       autherName.innerText=result.authorSlug;
       quoteBtn.innerText='New Quote';
    //    quoteBtn.classList.remove("Loading");

    })
};

// that was new 
soundBtn.addEventListener("click",()=>{
    let utterance=new SpeechSynthesisUtterance(`${quoteText.innerText}`);
    speechSynthesis.speak(utterance);
    
});

copyBtn.addEventListener("click", ()=>{
navigator.clipboard.writeText(quoteText.innerText)

})
twitterBtn.addEventListener("click", ()=>{
    let tweetUrl=`https://twitter.com/intent/tweet?url=
    ${quoteText.innerText}`;
    window.open(tweetUrl)
})
quoteBtn.addEventListener("click",randomQuote)

