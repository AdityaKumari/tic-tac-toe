export default class GameView{
    constructor(root){
        this.root=root;
        this.root.innerHTML=`<div class="model">
        <div class="model-box">
    
        </div>
    </div><div class="header">
        <div class="header__turn">
        </div>
        <div class="header__status">
        </div>
        <button type='button' class="header__reset"><span class="material-icons">
        cached
        </span></button>
    </div>
    <div class="board">
        <div class="board_tile" data-index="0">O</div>
        <div class="board_tile" data-index="1">X</div>
        <div class="board_tile" data-index="2"></div>
        <div class="board_tile" data-index="3"></div>
        <div class="board_tile" data-index="4"></div>
        <div class="board_tile" data-index="5"></div>
        <div class="board_tile" data-index="6"></div>
        <div class="board_tile" data-index="7"></div>
        <div class="board_tile" data-index="8"></div>

    </div>
        `;
        this.ontileclick=undefined;
        this.onrestartclick=undefined;
        this.root.querySelectorAll(".board_tile").forEach(tile => {
            tile.addEventListener("click", () =>{
            this.ontileclick(tile.dataset.index);
            });
            
         });
         this.root.querySelector(".header__reset").addEventListener("click", () =>{
             if (this.onrestartclick()){
                 location.reload();
                 this.onrestartclick();
             }
         }
         );
        

                
    
        
    }
    update(game){
        this.updateTurn(game);
        this.updateStatus(game);
        this.updateBoard(game);
    }
    updateTurn(game){
        this.root.querySelector(".header__turn").textContent=`${game.turn}'s turn`;

    }
    updateStatus(game){
        let status="In Progress";
        if(game.findwinningcombination()){
            status=`${game.turn} is the winner :)`;
        }
        else if (!game.isinprogress()){
            status="It's a tie";
        }
        this.root.querySelector(".header__status").textContent=status;

    }
    updateBoard(game){
        const winningcombination = game.findwinningcombination();
        for(let i=0;i<game.board.length;i++){
            const tile = this.root.querySelector(`.board_tile[data-index="${i}"]` );
            const test=this.root.querySelector(".model");
            const testbox =this.root.querySelector(".model-box");
            
            tile.textContent=game.board[i];
            tile.classList.remove("board_tile_winner");
            if(winningcombination && winningcombination.includes(i)){
                tile.classList.add("board_tile_winner");
                testbox.style.visibility="visible";
                test.style.visibility="visible";
                testbox.textContent=`${game.turn}'s Wins`;
                testbox.addEventListener("click",()=>this.onrestartclick());
                
            } 
            if(!game.isinprogress() && !game.findwinningcombination()){
                tile.classList.add("board_tile_winner");
                testbox.style.visibility="visible";
                test.style.visibility="visible";
                testbox.textContent=`Its a tie`;
                testbox.addEventListener("click",()=>this.onrestartclick());
            }
        }
       
        
       


    }
    
}