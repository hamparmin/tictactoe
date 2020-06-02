//set up modules
const gameBoard = (function(){
    const n = 9;
    const board= new Array(n).fill(0);
})();

const displayController = (function(){
    const setUp = function(){
        //add cells
        const board=document.querySelector(".board");
        board.innerHTML="";
        const cells=new Array();
        for (let i=0;i<9;i++){
            cells[i]=document.createElement('div');
            cells[i].id='cell'+i;
            cells[i].className='cell';
            cells[i].textContent="1";
            cells[i].style.color="white";
            board.appendChild(cells[i]);
        }
        //add instructions
        const instructions=document.querySelector(".instructions");
    };
    return{
        setUp
    }
})();

//
const playButton=document.querySelector(".play");
playButton.addEventListener('click', () => displayController.setUp());