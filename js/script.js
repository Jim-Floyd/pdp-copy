const eduLeft = document.querySelector(".left"),
  eduRight = document.querySelector(".right"),
  eduLeft2 = document.querySelector(".left2"),
  eduRight2 = document.querySelector(".right2");
//first edu
eduLeft.addEventListener("mouseover", () => {
  document.querySelector(".left-hover1").style.cssText = "bottom:0";
  document.querySelector(".left1").style.cssText = "display:none";
  eduLeft.style.cssText = "background-color:rgb(69, 207, 69)";
});
eduLeft.addEventListener("mouseout", () => {
  document.querySelector(".left-hover1").style.cssText = "bottom:-100%";
  document.querySelector(".left1").style.cssText = "display:flex";
  eduLeft.style.cssText = "background-color:rgb(250, 245, 245)";
});

eduRight.addEventListener("mouseover", () => {
  document.querySelector(".right-hover1").style.cssText = "bottom:0";
  document.querySelector(".right1").style.cssText = "display:none";
  eduRight.style.cssText = "background-color:rgb(69, 207, 69)";
});
eduRight.addEventListener("mouseout", () => {
  document.querySelector(".right-hover1").style.cssText = "bottom:-100%";
  document.querySelector(".right1").style.cssText = "display:flex";
  eduRight.style.cssText = "background-color:rgb(250, 245, 245)";
});
//second edu
eduLeft2.addEventListener("mouseover", () => {
  document.querySelector(".img-left2").style.cssText = "display:none";
  document.querySelector(".text-left2").style.cssText = "display:none";
  document.querySelector(".text-text-left2").style.cssText = "display:block";
  document.querySelector(".img-img-left2").style.cssText = "opacity:1";
});
eduLeft2.addEventListener("mouseout", () => {
  document.querySelector(".img-left2").style.cssText = "display:block";
  document.querySelector(".text-left2").style.cssText = "display:block";
  document.querySelector(".text-text-left2").style.cssText = "display:none";
  document.querySelector(".img-img-left2").style.cssText = "opacity:0";
});
eduRight2.addEventListener("mouseover", () => {
  document.querySelector(".img-right2").style.cssText = "display:none";
  document.querySelector(".text-right2").style.cssText = "display:none";
  document.querySelector(".text-text-right2").style.cssText = "display:block";
  document.querySelector(".img-img-right2").style.cssText = "opacity:1";
});
eduRight2.addEventListener("mouseout", () => {
  document.querySelector(".img-right2").style.cssText = "display:block";
  document.querySelector(".text-right2").style.cssText = "display:block";
  document.querySelector(".text-text-right2").style.cssText = "display:none";
  document.querySelector(".img-img-right2").style.cssText = "opacity:0";
});
//animation
let i = 0;
document.querySelector(".");
