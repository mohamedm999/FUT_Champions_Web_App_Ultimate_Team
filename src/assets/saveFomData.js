import validation from "./validation.js";



let playerform = document.getElementById('playerform');

let players = JSON.parse(localStorage.getItem('players')) || []; ;

playerform.addEventListener('submit',function (e) {


    e.preventDefault(); 



    // if (validation()) {} ;

    let imgProfile = document.getElementById('profile');
    imgProfile.addEventListener("onchange",function (e) {
            imgProfile.src = URL.createObjectURL(e.target.files[0]);
    })


        let player = {
            name: document.getElementById('name').value.trim(),
            photo: imgProfile.src ,
            position: document.getElementById('position').value,
            nationality: document.getElementById('nationality').value,
            flag: document.getElementById('flag').value,
            club: document.getElementById('club').value.trim(),
            logo: document.getElementById('logo').value,
            rating: document.getElementById('rating').value,
        };
    
        if (player.position === 'GK') {
            player.diving = document.getElementById('diving').value;
            player.handling = document.getElementById('handling').value;
            player.kicking = document.getElementById('kicking').value;
            player.reflexes = document.getElementById('reflexes').value;
            player.speed = document.getElementById('speed').value;
            player.positioning = document.getElementById('positioning').value;
    
        } else {
            player.pace = document.getElementById('pace').value;
            player.shooting = document.getElementById('shooting').value;
            player.passing = document.getElementById('passing').value;
            player.dribbling = document.getElementById('dribbling').value;
            player.defending = document.getElementById('defending').value;
            player.physical = document.getElementById('physical').value;
        }
        
        players.push(player);

        addplayer(player);
    
    
        localStorage.setItem('players', JSON.stringify(players));
    
    
        playerform.reset();
    
})



function addplayer(player) {

    if (player.position == "") {
        
    }

    let goalKepeer = document.getElementById('gk')

    let reserve = document.getElementById('reserve')

    const card = document.createElement('div');

    card.className = "gk-info";


    card.innerHTML = `
                                <div class="photo">
                <img src="${player.photo}" >
            </div>

            <div class="name">${player.name}</div>

            <div class="rating">91</div>

            <div class="position">ST</div>

            <div >
                <img class="flag" src="/src/assets/images/icons/canada.png" >
            </div>

            <div >
                <img class="logo" src="/src/assets/images/logos/borusia-dortmund.png" >
            </div>

            <div class="stats">
                <div>
                    <p>PAC 91 </p>
                    <p>SHO 93</p>
                    <p>PAS 89 </p>
                </div>
                <div>
                    <p>DRI 99 </p>
                    <p>DEF 55 </p>
                    <p>PHY 74 </p>
                </div>
            </div>
    
    `

    goalKepeer.appendChild(card);
    
}







