// Your code goes here
let anchorTag = document.querySelector(".nav :first-child")
let anchorAll = document.querySelector(".nav")
var dragged;

  /* events fired on the draggable target */
  document.addEventListener("drag", function( event ) {

  }, false);

  document.addEventListener("dragstart", function( event ) {
      // store a ref. on the dragged elem
      dragged = event.target;
      // make it half transparent
      event.target.style.opacity = .5;
  }, false);

  document.addEventListener("dragend", function( event ) {
      // reset the transparency
      event.target.style.opacity = "";
  }, false);

  /* events fired on the drop targets */
  document.addEventListener("dragover", function( event ) {
      // prevent default to allow drop
      event.preventDefault();
  }, false);

  document.addEventListener("dragenter", function( event ) {
      // highlight potential drop target when the draggable element enters it
      if ( event.target.className == "nav-link" ) {
          event.target.style.background = "purple";
      }

  }, false);

  document.addEventListener("dragleave", function( event ) {
      // reset background of potential drop target when the draggable element leaves it
      if ( event.target.className == "nav-link" ) {
          event.target.style.background = "";
      }

  }, false);

  document.addEventListener("drop", function( event ) {
      // prevent default action (open as link for some elements)
      event.preventDefault();
      // move dragged elem to the selected drop target
      if ( event.target.className == "nav-link" ) {
          event.target.style.background = "";
        //   dragged.parentNode.removeChild( dragged );
          event.target.appendChild( dragged );
      }
    
  }, false);

document.addEventListener("drop", (event) => {
    event.preventDefault();
    if( event.target.className = "nav-link") {
        event.target.style.background = "";
        anchorTag.parentNode.removeChild( anchorTag );
        event.target.appendChild( anchorTag );
    }
})

//end of drag and drop functions.

document.querySelector(".intro").addEventListener("click", function() {
    console.log("Don't touch my head!");
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
bttn.style.width = "28vw";
bttn.style.height = "26vh";
bttn.style.position = "absolute";
document.querySelector(".main-navigation").append(bttn);

let partyTime = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    bttn.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
}
bttn.addEventListener("click", partyTime);

let body = document.querySelector("body");
let div = document.querySelector("#bruv");
let scale = 1;
function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    div.style.transform = `scale(${scale})`;
  }

div.addEventListener("wheel", zoom);
div.style.color = "green";

let imageShadow = document.querySelector(".content-section :last-child img")
imageShadow.addEventListener("dblclick", function() {
    imageShadow.style.boxShadow = "1vw .7vw green";
})

let tenDigits = document.querySelector(".form input");
tenDigits.addEventListener("select", function() {
    alert("Hello! I am an alert box!!");
})