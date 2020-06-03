//set up modules
const gameBoard = (function(){
    //select game elements
    const cells=new Array();
    const instructions=document.querySelector(".instruct");
    const board=document.querySelector(".board");
    const side=document.querySelector("input");
    let red=false;

    //figure out which side
    const setUp = function(){
        red=side.checked;
        console.log(red);
        board.innerHTML="";
        for (let i=0;i<9;i++){
            cells[i]=document.createElement('div');
            cells[i].id=i;
            cells[i].className='cell';
            cells[i].textContent="1";
            cells[i].style.color="white";
            board.appendChild(cells[i]);
        }
    };
    const step= function(){
        // instructions.textContent="It's your turn!";
        cells.forEach(addEventListener('click',function(e){
            if (red){
                e.target.style.background="red";
                e.target.style.color="red";
            } else {
                e.target.style.background="blue";
                e.target.style.color="blue";
            }
        }))
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


// gameBoard.step();