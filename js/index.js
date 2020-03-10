// Your code goes here
let anchorTag = document.querySelector(".nav :first-child")

document.querySelector(".intro").addEventListener("click", function() {
    // console.log("Don't touch my head!");
})

let scrolly = document.querySelector("nav a");

scrolly.addEventListener("mouseover", function() {
    scrolly.style.color = "white";
})

scrolly.addEventListener("mouseleave", function() {
    scrolly.style.color = "black";
    scrolly.style.background = "green";
})

let bttn = document.createElement("button");
bttn.textContent = "Click for a good time!";
bttn.style.background = "black";
bttn.style.color = "green";
bttn.style.padding = "1.5vw";
bttn.style.fontSize = "1.5vw";
bttn.style.marginTop = "1.5vw";
bttn.style.width = "100vw";
document.querySelector(".main-navigation").append(bttn);

let partyTime = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    bttn.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
}
bttn.addEventListener("click", partyTime);

let body = document.querySelector("body");
let div = document.querySelector("#bruv");

div.addEventListener("wheel", zoom)