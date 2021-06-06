console.log('Hello World!');
const input = document.querySelector("input");
const button = document.querySelector(".btn");

button.addEventListener("click",() =>{
  let url = "https://www.google.com/search?q=" + input.value;
  window.open(url,'_self');
});