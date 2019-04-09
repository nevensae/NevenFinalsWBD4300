

  // API
  // https://api.myjson.com/bins/155q14
const xhr = new XMLHttpRequest();
xhr.responseType = 'json';

xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        for(let i=1; i<10; i++){
          let tmp = document.querySelector("#gl-"+i);
          if(tmp !== null) {
          tmp.setAttribute("src", xhr.response.galleryImages[i]);
          }
        }
      }

      if (xhr.status == 404) {
        console.log("File or resource not found");
      }
    }
};

xhr.open('get', 'https://api.myjson.com/bins/12wq4w', true);
xhr.send();


  // MAIN SLIDER

  let sliderImages = document.querySelectorAll(".slide");
  let arrowLeft = document.querySelector("#arrow-left");
  let arrowRight = document.querySelector("#arrow-right");
  let playPouse = document.querySelector("#play-pouse");
  let current = 0;
  let timer = null;
  let play = 0;

  // clear images

  function reset() {
    for(let i = 0; i < sliderImages.length; i++){
      sliderImages[i].style.display = "none";
    }
  }

  function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
  }
  
  // Show previous
  function slideLeft(){
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
  }

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

  // left arrow click
  if(arrowLeft !== null){
  arrowLeft.addEventListener('click', function(){
    if(current === 0){
      current = sliderImages.length;
    }
    slideLeft();

  });
  }
  if(arrowRight !== null){
    // left arrow click
    arrowRight.addEventListener('click', function(){
      if(current === sliderImages.length - 1){
        current = -1;
      }
      slideRight();
  
    });
  
   startSlide();
  }
  //  play pause

  function setTimer(){
    if (timer) {
       // stop 
       clearInterval( timer );
       timer=null;
    }
    else {
       timer = setInterval(function(){
         arrowRight.click();
       },2000);
    }
}
if(playPouse !== null){
playPouse.addEventListener('click', function(){
  if(play === 0){
    setTimer();
    play = 1;
    playPouse.innerHTML='<i class="fas fa-pause-circle"></i>';
  }else{
    setTimer();
    play = 0;
    playPouse.innerHTML= '<i class="fas fa-play-circle">';
  }

});
}
  

// CFORM

function validateForm()
{
  event.preventDefault();
  var a=document.forms["loginform"]["email"].value;
  var b=document.forms["loginform"]["subject"].value;
  var c=document.forms["loginform"]["yourMessage"].value;
    if (a === "") {
      alert("Please enter your email");
      return false;
    }
    if (b === "") {
      alert("Please enter the subject");
      return false;
    }
    if (c === "") {
      alert("Please enter your message");
      return false;
    }
}