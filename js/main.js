//Elemek kiválasztása
//@param selector: string az elemet kiválasztó selector.

function _q(selector){ 
    
    //Elemek kiválasztása
    
    var elements = document.querySelectorAll(selector);
    
    return elements;
    
}

// Showing profile input

function showProfile(){
    
    var profileDiv =document.querySelector(".profile-div");
    
    
    if(profileDiv.classList.contains("show"))
    {
        
        profileDiv.classList.remove("show");
        
    }  
    else
    {
        profileDiv.classList.add("show");
        
    }
}

