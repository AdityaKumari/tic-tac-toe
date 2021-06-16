import Game from "./game.js";
import GameView from "./GameView.js";
let gameView= new GameView(document.getElementById("app"));
let game=new Game();


gameView.ontileclick=function(i){
    game.makemove(i);
    gameView.update(game);
    console.log(game.findwinningcombination());

};
gameView.onrestartclick = function(){
game=new Game();
gameView.update(game);
location.reload();
}
gameView.update(game);
