
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

function changeImage(x){
    const images ={
        1: 'garden1.jpeg',
        2: 'garden2.jpeg',
        3: 'garden3.jpeg',
        4: 'garden4.jpeg',
    }
    let count = 1;
    if (x == "about"){
        document.body.style.backgroundImage = `url(${images['2']})`;
        }else if (x == "contact"){
            document.body.style.backgroundImage = `url(${images['3']})`;
        }else if (x == "left"){
            document.body.style.backgroundImage = `url(${images[`${count - 1}`]})`;
        }else if (x == "right"){
            document.body.style.backgroundImage = `url(${images[`${count + 1}`]})`;
        }else{
            document.body.style.backgroundImage = `url(${images['1']})`;
        }
}

