import { gsap } from "gsap";

//Replace this value with your name
const yourName = "Valnetina"
document.querySelector("#name").innerHTML = yourName;

//GreenSock Timeline


document.querySelector("#name").innerHTML="Valentina";

const mainTL = gsap.timeline();
mainTL
.from(".graph", {duration:2, alpha:0})
.from(".red",{ duration:1, x:0, y:150, ease:"power1.out"}, 2)
.from (".blue",{duration:1, x:350, y:150, ease:"power1.out"}, 2)
.to(".red", {duration:2, y:0, ease:"power1.out"}, 4)
.to(".blue", {duration:2, y:300, ease:"power1.out"}, 4)
//.from("green", { duration:14, x:350, ease: })
;

//a div with class of .graph (400x350 grid of 50x50 tiles)
//a div with class of .red positioned at x:150, y:150
//a div with class of .blue positioned at x:200, y:150
//a div with class of .green

//fade in the graph element for 2 seconds prior to the other animations
//• have the green element grow from left to right over the course of the entire animation