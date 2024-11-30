import { innerplayer, innergoalkeeper } from './playerRender.js';

export default function addplayer(player) {

    let reserve = document.getElementById('reserve');
    let pl = document.getElementById(player.position);
   
    if (player.position == "GK") {

        innergoalkeeper(player,pl)

    }else {

        innerplayer(player,pl)


    }
}
