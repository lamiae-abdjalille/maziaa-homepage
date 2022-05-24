
/** steaky navbar */

$(window).scroll(function()
{
    $('nav').toggleClass('scrolled', $(this).scrollTop()>50);
});

/** steaky navbar */






/**********Start slider *****************/

const slides = document.querySelectorAll('.slide');
const indicator = document.querySelectorAll('.indicator');

var index = 0;


function indicateSlide(element){
    
    index = element.id;
    changeSlide();
    updateCircleIndicator();
    resetTimer();
}


function circleIndicator(){
    for(let i=0; i < slides.length; i++){
      indicator[i].setAttribute("onclick","indicateSlide(this)");

          
            }
           
}


circleIndicator();

function changeSlide(){
    for(let i=0; i<slides.length; i++){
         slides[i].classList.remove("active");
    }

slides[index].classList.add("active");

}


 function updateCircleIndicator(){
    for(let i=0; i<indicator.length; i++){
        indicator[i].classList.remove("indicator-active");
    }
  indicator[index].classList.add("indicator-active");
  
}



function resetTimer(){
    // when click to indicator or controls button 
    // stop timer 
    clearInterval(timer);
    // then started again timer
   timer=setInterval(autoPlay,4000);
}

function nextSlide(){
    if(index==slides.length-1){
        index=0;
    }
    else{
        index++;
    }
    changeSlide();
 }
  function autoPlay(){
    nextSlide();
    updateCircleIndicator();
}



let timer=setInterval(autoPlay,6000);



/**********End slider *****************/

/* Button back to up */
var mybutton = document.getElementById("back-to-top");

mybutton.setAttribute('onclick','topFunction();')

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }


/* Button back to up */

 