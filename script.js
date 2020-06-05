const board = (function(){
    // an array filled with zeros
    let gameArray=new Array(9).fill(0);
    const takeInput = function(cells){
        //let cells = Array.from(document.querySelectorAll('.cell'));
        cells.forEach(addEventListener('click',(e)=>{
            console.log(gameArray);
            gameArray[e.target.id]=1;
            computerInput();
        }));
    };
    const computerInput=function(){
        for(let i=0;i<9;i++){
            if (gameArray[i]!=1){
                gameArray[i]=-1;
                break;
            }
        }
    };
    const checkWin=function(){
        let a=GameArray;
        let pWin=[1,1,1];
        let eWin=[-1,-1,-1];
        //check rows
        if (a.slice(0,3)===pWin 
        || a.slice(3,6===pWin) || a.slice(6,9)===pWin){
            return(1)
        };
        if (a.slice(0,3)===eWin 
        || a.slice(3,6===eWin) || a.slice(6,9)===eWin){
            return(-1)
        };
        //check columns
        let sumOne=a[0]+a[3]+a[6];
        let sumTwo=a[1]+a[4]+a[7];
        let sumThree=a[2]+a[5]+a[8];
        if (sumOne===3 || sumTwo===3 || sumThree===3){
            return(1)
        };
        if (sumOne===-3 || sumTwo===-3 || sumThree===-3){
            return(-1)
        };
        //check diagonals
        sumOne=a[0]+a[4]+a[8];
        sumTwo=a[2]+a[4]+a[6];
        if (sumOne===3 || sumTwo===3){
            return(1)
        };
        if (sumOne===3 || sumTwo===3){
            return(-1)
        } else {
            return (0)
        }
        ;
    };
    const logic = function(){
        display.setUp();
        let hasWon=false;
        while (hasWon==false){
            takeInput(display.cells);
            display.color();
            if (checkWin()===1 || checkWin===-1){
                let hasWon=true;
            }
        }
    };

    return {
        logic
    }

})();

const display = (function(){
    const cells=new Array();
    const playerColor="blue";
    const enemyColor="red";

    //function to create board in DOM
    const setUp = function(){
        const board=document.querySelector(".board");
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
    //function to color board
    const color =function(arr){
        console.log("hello");
        //copy values into cell values
        for (let i=0;i<9;i++){
            if (arr[i]===1){
                cells[i].style.color=playerColor;
                cells[i].style.background=playerColor;
            } else if (arr[i]===-1){
                cells[i].style.color=enemyColor;
                cells[i].style.background=enemyColor;
            }
        }
    };
    return {
        setUp,
        color,
        cells
    }
})();
board.logic();