
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
    if (x == "about"){
        document.body.style.backgroundImage = "url('garden3.jpeg')";
        }else if (x == "contact"){
            document.body.style.backgroundImage = "url('garden2.jpeg')";
        }else{
            document.body.style.backgroundImage = "url('garden1.jpg')";
        }
}