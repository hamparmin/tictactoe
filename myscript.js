//set up modules
const gameBoard = (function(){
    //select game elements
    const cells=new Array();
    const instructions=document.querySelector(".instruct");
    const board=document.querySelector(".board");
    let red=false;
    let gameArray=[];

    //figure out which side
    const setUp = function(){
        //check side
        red=document.querySelector("input").checked;

        //reset board
        board.innerHTML="";
        for (let i=0;i<9;i++){
            cells[i]=document.createElement('div');
            cells[i].id=i;
            cells[i].className='cell';
            cells[i].textContent="1";
            cells[i].style.color="white";
            board.appendChild(cells[i]);
        }
        //reset if changes sides
        document.querySelector("input").addEventListener('click',function(){
            setUp();
        })
    };
    const step = function(){
        let playerColor=red ? "red" : "blue";
        let enemyColor=red ? "blue" : "red";
        document.documentElement.style.setProperty("--player-color",playerColor);
        document.documentElement.style.setProperty("--enemy-color",enemyColor);
        // activate for one step
        cells.forEach(cell =>{
            cell.addEventListener('click',function(e){
                e.target.style.background=playerColor;
                e.target.style.color=playerColor;
                console.log(e.target.value);
            });
    });
    const logic = function(){
        setUp()
        for (let i=0;i<4;i++){

        };

    };
};


    return{
        setUp,
        step
    }
})();

const displayController = (function(){

})();

//main
gameBoard.setUp();

const side=document.querySelector("input");
side.addEventListener('click',function() {
    gameBoard.setUp();
}
);

 gameBoard.step();