export default class Game{
    constructor(){
        this.turn='X';
        this.board= new Array(9).fill(null);
    }
    nextTurn(){
        this.turn=(this.turn==='X')?'O':'X';
    }
    makemove(i){
        if(!this.isinprogress){
            return;
        }
        if(this.board[i]){
            return;
        }

        this.board[i]=this.turn;
        if(!this.findwinningcombination())
        {
            this.nextTurn();
        }

    }
    findwinningcombination(){
        const winningcombination=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for (var con of winningcombination){
           var [a,b,c]=con;
            if(this.board[a] && (this.board[a]===this.board[b] && this.board[a]===this.board[c]))
            {
                return con;
            }
        }
        return false;
    }
    isinprogress(){
        if (!this.findwinningcombination() && this.board.includes(null)){
            return true;
        }
    }
}