//set up modules
const gameBoard = (function(){
    //select game elements
    const cells=new Array();
    const instructions=document.querySelector(".instruct");
    const board=document.querySelector(".board");
    let red=false;

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
        // set up helper function
        const paint = function(color,event){
            event.target.style.color=color;
            event.target.style.background=color;
        };
        const color=red ? "red" : "blue";
        // activate for one step
        cells.forEach(cell =>{
            cell.addEventListener('click',function(e){
                paint(color,e);
            }, {once : true});
    });
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