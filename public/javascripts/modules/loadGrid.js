import { makeGridFunc , ShowPlayerName  ,  gridColoringFunc  , facitFunc } from './grid.mjs';
import {buildChat, sendMessage} from './chat.mjs';

export default function loadGrid () {
    //Selecting color that must be deleted after login section 
    // setColor()

    //make Grid box 
    makeGridFunc();
    //showing name of player

    ShowPlayerName();

    // coloring the grid 
    gridColoringFunc();
   

    buildChat();
    sendMessage();
   //check the game after click on finish button  
    facitFunc()

}