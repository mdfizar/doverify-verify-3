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
downOne.style.display ="block";
btnOne.style.color ="#3ace4f";
function productInfo() {
  productinfo.style.display ="block";
  productimg.style.display ="none";
  productlocation.style.display ="none"
  btnOne.style.color ="#3ace4f";
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
  btnTwo.style.color ="#3ace4f";
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
  btnThree.style.color ="#3ace4f";
  locationIcon.style.backgroundColor ="#3ace4f"
  downOne.style.display ="none";
  downTwo.style.display ="none";
  downThree.style.display ="block";
}
// hide show btn 
// genuin product===
const genuinSction = document.querySelector(".geneuin-product-container");
const hideShowItem = genuinSction.querySelector(".product-details");
const hideShowItemIcon = genuinSction.querySelector(".show-hide-btn i");

function geneuinProductHideShowButton() {
 if(hideShowItem.style.bottom ==="59px") {
  hideShowItem.style.bottom ="-248px";
  hideShowItemIcon.style.transform ="rotate(180deg)";
 }
 else{
  hideShowItem.style.bottom ="59px";
  hideShowItemIcon.style.transform ="rotate(0deg)";
 }
};
// product sold 
const productSoldSction = document.querySelector(".product-sold-container");
const soldHideShowItem = productSoldSction.querySelector(".product-details");
const soldHideShowItemIcon = productSoldSction.querySelector(".show-hide-btn i");
const soldLocationIcon = productSoldSction.querySelector(".arrow3");
soldLocationIcon.style.display ="block"
soldLocationIcon.style.color ="red"
function productSoldHideShowButton() {
  if(soldHideShowItem.style.bottom ==="59px") {
   soldHideShowItem.style.bottom ="-248px";
   soldHideShowItemIcon.style.transform ="rotate(180deg)";
  }
  else{
   soldHideShowItem.style.bottom ="59px";
   soldHideShowItemIcon.style.transform ="rotate(0deg)";
  }
 };
// no product 
const noProductSction = document.querySelector(".noproduct-container");
const noProductHideShowItem = noProductSction.querySelector(".product-details");
const noProductshowItemIcon = noProductSction.querySelector(".show-hide-btn i");
function noProductSoldHideShowButton() {
  if(noProductHideShowItem.style.bottom ==="0px") {
    noProductHideShowItem.style.bottom ="-248px";
    noProductshowItemIcon.style.transform ="rotate(180deg)";
  }
  else{
    noProductHideShowItem.style.bottom ="0px";
    noProductshowItemIcon.style.transform ="rotate(0deg)";
  }
 };
//  product img slider 
var swiper = new Swiper(".Product-img-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// product img view box 
const imgViewBox = document.querySelector(".product-img-gellary")
const btnNex = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");

// hide the slider arrow 
btnNex.style.opacity ="0";
btnPrev.style.opacity ="0";

// set the cursor zoom-in 
imgViewBox.style.cursor = "zoom-in";

function showImgViewBox() {
  btnNex.style.opacity ="1";
  btnPrev.style.opacity ="1";
  if(imgViewBox.style.position === "static") {
    imgViewBox.style.position = "absolute";
    imgViewBox.style.cursor = "zoom-out";
  } else{
    imgViewBox.style.position = "static";
    imgViewBox.style.cursor = "zoom-in";
  }
}

function hideImgViewBox() {
  imgViewBox.style.position = "static";
}

imgViewBox.addEventListener('click', (event) => {
  // Prevent the event from propagating to the document
  event.stopPropagation();
  showImgViewBox();
});

btnNex.addEventListener('click', (event) => {
  event.stopPropagation();
});
btnPrev.addEventListener('click', (event) => {
  event.stopPropagation();
});

document.addEventListener('click', (event) => {
  // Hide imgViewBox only if the click is outside of it
  if (!imgViewBox.contains(event.target)) {
    hideImgViewBox();
  }
});

//  verify popup 
const verifyBtn = document.querySelectorAll(".verify-btn");
const verifyPopup = genuinSction.querySelector(".verify-popup");
const verifyPopupClose = genuinSction.querySelector(".verify-popup-close-btn");

verifyBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    verifyPopup.style.transform ="translateX(0%)";
  });
});
verifyPopupClose.addEventListener('click', () => {
  verifyPopup.style.transform ="translateX(-100%)";
})
// Manage verfiy with email or sms 
const radioInput = document.querySelectorAll(".radio") ;
const smsInput = document.querySelector(".phone-input");
const emailInput = document.querySelector(".email-input");

function handleRadioChange() {
  if(radioInput[0].checked) {
    smsInput.style.display ="block";
    smsInput.focus();
    emailInput.style.display ="none";
  } else if (radioInput[1].checked) {
    smsInput.style.display ="none";
    emailInput.style.display ="block";
    emailInput.focus();
  }
};

radioInput.forEach(radio => {
  radio.addEventListener('change', handleRadioChange);
});
// run the code on browser loaded 
document.addEventListener("DOMContentLoaded", () => {
  handleRadioChange();
});
