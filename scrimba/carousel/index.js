

const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;


const totalSlides = slides.length;

setInterval(moveToNextSlide, 5000)


console.log(slides);
 
document.getElementById('carousel-button-prev')  //.addEventListener("click",  moveToPrevSlide)
 document.getElementById('carousel-button-next')//.addEventListener("click",  moveToNextSlide)
    
function hideAllSlides(){
    for(let slide of slides){
        
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }

} 

 function moveToNextSlide(){
    hideAllSlides();
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
}
function moveToPrevSlide(){
    hideAllSlides();
    if(slidePosition === 0){
        slidePosition = totalSlides-1;
    }
    else{
        slidePosition--;
    }
    slides[slidePosition].classList.add("carousel-item-visible");
}



// My Solution Which also Works

// function moveToNextSlide(){
//     slides[slidePosition].style.display = "none";
//     slidePosition +=1; 
//     if(slidePosition < totalSlides){
//         slides[slidePosition].style.display = 'block';
//     }
//     if(slidePosition === totalSlides){
//         slidePosition -= 1; 
//         slides[slidePosition].style.display = "none";
//         slidePosition = 0;
//         slides[slidePosition].style.display = 'block';
//     }
   
// }


// function moveToPrevSlide(){
    
//     slides[slidePosition].style.display = "none";
//     slidePosition -=1; 
//     if(slidePosition >= 0){
//         slides[slidePosition].style.display = 'block';
//     }
//     if(slidePosition < 0){
//         slidePosition = 0; 
      
//         slides[slidePosition].style.display = "none";
//         slidePosition = totalSlides-1;
//         slides[slidePosition].style.display = 'block';
//     }

    
// }




