export default function validation(e){

    const name = document.getElementById('name').value.trim();
    const photo = document.getElementById('photo').value;
    const position = document.getElementById('position').value;
    const nationality = document.getElementById('nationality').value;
    const flag = document.getElementById('flag').value;
    const club = document.getElementById('club').value.trim();
    const logo = document.getElementById('logo').value;
    const pace = document.getElementById('pace').value;
    const shooting = document.getElementById('shooting').value;
    const passing = document.getElementById('passing').value;
    const dribbling = document.getElementById('dribbling').value;
    const defending = document.getElementById('defending').value;
    const physical = document.getElementById('physical').value;
    const rating = document.getElementById('rating').value;
    const diving = document.getElementById('diving').value;
    const handling = document.getElementById('handling').value;
    const kicking = document.getElementById('kicking').value;
    const reflexes = document.getElementById('reflexes').value;
    const speed = document.getElementById('speed').value;
    const positioning = document.getElementById('positioning').value;


    const errors =  document.getElementsByClassName('error')

    const textRegex = /^[a-zA-Z-\s]+$/; 
    const imageRegex = /\.(jpg|jpeg|png|gif)$/i 

    let isValid = true;


    if (name == "") {

        errors[0].textContent = "Name is required.";
        isValid = false;

    } else if (!textRegex.test(name)) {

        errors[0].textContent = "Name can only contain letters, spaces, and hyphens.";
        isValid = false;

    } else {

        errors[0].textContent = ""; 
    }


    if (photo == "") {

        errors[1].textContent = "Photo URL is required.";
        isValid = false;

    } else {

        errors[1].textContent = ""; 
    }


    if (position == "") {

        errors[2].textContent = "Position is required.";
        isValid = false;

    } else {

        errors[2].textContent = ""; 
    }

    if (nationality == "") {

        errors[3].textContent = "nationality is required.";
        isValid = false;

    } else {

        errors[3].textContent = ""; 
    }

    

    if (flag == "") {

        errors[4].textContent = "Flag URL is required.";
        isValid = false;

    } else if (!imageRegex.test(flag)) {

       errors[4].textContent = "Flag must be a valid image URL.";
       isValid = false;

    }else {

       errors[4].textContent = "";
    }

    if (club == "") {

        errors[5].textContent = "club is required.";
        isValid = false;

    } else {

        errors[5].textContent = ""; 
    }

    if (logo == "") {

        errors[6].textContent = "logo is required.";
        isValid = false;

    } else {

        errors[6].textContent = ""; 
    }

    // if(position == 'GK'){


    //     if (condition) {


                
    //     }

    // } else {

    //     if (condition) {


            
    //     }


    // }

    return isValid

}





        
