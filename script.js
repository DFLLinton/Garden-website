
function render(x){
    const about = document.getElementById('aboutpara');
const contact = document.getElementById('contactpara');
    if (x == "about"){
    about.style.display = "block";
    contact.style.display = "none";
    }else if (x == "contact"){
        about.style.display = "none";
        contact.style.display = "block";
    }else{
        about.style.display = "none";
        contact.style.display = "none";
    }
}
const images =[
    'garden1.jpeg',
    'garden2.jpeg',
    'garden3.jpeg',
    'garden4.jpeg'
]
function changeImage(x){

    if (x == "about"){
        document.body.style.backgroundImage = `url(${images['1']})`;
        }else if (x == "contact"){
            document.body.style.backgroundImage = `url(${images['2']})`;
        }else{
            document.body.style.backgroundImage = `url(${images['0']})`;
        }
}

let currentIndex = 1

function nextImageSlide(){
currentIndex++;
if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  document.body.style.backgroundImage = `url(${images[currentIndex]})`
} 

function prevImageSlide(){
    currentIndex--;
    if (currentIndex < 1) {
        currentIndex = images.length -1;
      }
      document.body.style.backgroundImage = `url(${images[currentIndex]})`
    } 