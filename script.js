
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

