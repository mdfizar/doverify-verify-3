var productinfo = document.querySelector(".product-info-item1");
var productimg = document.querySelector(".product-img-item1");
var productlocation = document.querySelector(".location-menu-item1");
var locationIcon = document.querySelector(".location-icon");
var downOne = document.querySelector(".arrow1")
var downTwo = document.querySelector(".arrow2")
var downThree = document.querySelector(".arrow3")
var btnOne = document.querySelector(".product-info-menu");
var btnTwo = document.querySelector(".product-img-menu");
var btnThree = document.querySelector(".location-menu");
downThree.style.display ="block";
btnThree.style.color ="red";
function productInfo() {
  productinfo.style.display ="block";
  productimg.style.display ="none";
  productlocation.style.display ="none"
  btnOne.style.color ="red";
  btnTwo.style.color ="#23215c";
  btnThree.style.color ="#23215c";
  locationIcon.style.backgroundColor ="#23215c"
  downOne.style.display ="block";
  downTwo.style.display ="none";
  downThree.style.display ="none";
}

function productImg() {
  productinfo.style.display ="none";
  productimg.style.display ="block";
  productlocation.style.display ="none"
  btnOne.style.color ="#23215c";
  btnTwo.style.color ="red";
  btnThree.style.color ="#23215c";
  locationIcon.style.backgroundColor ="#23215c"
  downOne.style.display ="none";
  downTwo.style.display ="block";
  downThree.style.display ="none";
}

function productLocaiton() {
  productinfo.style.display ="none";
  productimg.style.display ="none";
  productlocation.style.display ="block"
  btnOne.style.color ="#23215c";
  btnTwo.style.color ="#23215c";
  btnThree.style.color ="red";
  locationIcon.style.backgroundColor ="red"
  downOne.style.display ="none";
  downTwo.style.display ="none";
  downThree.style.display ="block";
}
// hide show btn 
const hideShowItem = document.querySelector(".product-details");
const hideShowItemIcon = document.querySelector(".show-hide-btn i");

function hideShowButton() {
 if(hideShowItem.style.transform ==="translateY(0px)") {
  hideShowItem.style.transform ="translateY(265px)";
  hideShowItemIcon.style.transform ="rotate(180deg)";
 }
 else{
  hideShowItem.style.transform ="translateY(0px)"
  hideShowItemIcon.style.transform ="rotate(0deg)";
 }
  
}