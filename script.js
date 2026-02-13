const url = 'https://quoteslate.vercel.app/api/quotes/random';
const quoteText = document.querySelector('.quote');
const authorName = document.querySelector('.name');
const qtBtn = document.querySelector('.new-quote');
const soundBtn = document.querySelector('.sound');
const copyBtn = document.querySelector('.copy');
const whatsappBtn = document.querySelector('.whatsApp');
const tweetBtn = document.querySelector('.twitter');
const facebookBtn = document.querySelector('.facebook');
  const getData = async()=>{
    try{
      qtBtn.classList.add("loading");
      qtBtn.innerText= "loading quote...";
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
      console.log(result.author);
      console.log(result.quote);
      quoteText.innerText=result.quote;
      authorName.innerText=result.author;
      qtBtn.classList.remove("loading");
      qtBtn.innerText="New Quote";
    }
    catch{
      console.error(error);
    }
  }
  getData();
  qtBtn.addEventListener("click",getData);
  soundBtn.addEventListener("click",()=>{
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
  });
  copyBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(`${quoteText.innerText} --${authorName.innerText}`);
  });


tweetBtn.addEventListener("click", () => {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quoteText.innerText}" — ${authorName.innerText}`)}`;
  window.open(tweetUrl, "_blank");
});

whatsappBtn.addEventListener("click", () => {
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`"${quoteText.innerText}" — ${authorName.innerText}`)}`;
  window.open(whatsappUrl, "_blank");
});

facebookBtn.addEventListener("click", () => {
  const quote = `"${quoteText.innerText}" — ${authorName.innerText}`;
  const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=&quote=${encodeURIComponent(quote)}`;
  window.open(fbShareUrl, "_blank");
});

  