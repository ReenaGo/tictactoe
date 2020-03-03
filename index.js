var board = [
    ["","",""],
    ["","",""],
    ["","",""]]

var symbol = ["X", "O"]

var players = [
    {
        name: "",
        turn: true,
    },
    {
        name: "",
        turn: false,
    }
]

var boardHTML = document.getElementById("tictactoeBox")

function renderBoard(board){
    var boardInnerHTML =  board.map((row,i)=>{
           return  `<div class="row row${i+1}">${row.map((cell,j)=>{
                return `<div class="box col${j}" data-row="${i}" data-col="${j}"></div>`
           }).join(" ")}</div>` 
    }).join("")
    return boardInnerHTML
}

boardHTML.innerHTML = renderBoard(board)

var allCells = document.getElementsByClassName('box')
var allCellsArray = [...allCells]

setPlayerNames()
makeCellsClickable()

function makeCellsClickable(array1, array2){
    for(let i=0; i<allCellsArray.length; i++){
        var singleCell = allCellsArray[i]
        singleCell.addEventListener("click", (e)=>{
            const player1=players[0]
            const player2=players[1]

            if(player1.turn && event.target.innerHTML===""){
                event.target.innerHTML = "X";
                player1.turn =false
                player2.turn = true
                declareWinner(allCellsArray)

            }else if(player2.turn && event.target.innerHTML===""){
                event.target.innerHTML = "O";
                player1.turn = true
                player2.turn = false
                declareWinner(allCellsArray)
            }
        })
    }    
}

function setPlayerNames(){
    var player1Name = prompt("Please enter a name for player 1", "name")
    var player2Name = prompt("Please enter a name for player 2", "name")

    if(player1Name !=null){
        players[0].name = player1Name
    }
    if(player2Name !=null){
        players[1].name = player2Name
    }
}

function declareWinner(array){
        var evalHTML = (num, value)=>{
            var HTMLValue = array[num].innerHTML === value
           return HTMLValue           
        }
        var allCellsFilled = ()=>{
            var counterFilled = 0
            for (let i=0; i<array.length;i++){
                if(array[i].innerHTML != ""){
                    counterFilled ++
                }
            }
            if(counterFilled===9){
                return true
            }
        }

        if(evalHTML(0, "X") && evalHTML(1, "X") && evalHTML(2, "X") ||
            evalHTML(3, "X") && evalHTML(4, "X") && evalHTML(5, "X") || 
            evalHTML(6, "X") && evalHTML(7, "X") && evalHTML(8, "X") ||
            evalHTML(0, "X") && evalHTML(3, "X") && evalHTML(6, "X") ||
            evalHTML(1, "X") && evalHTML(4, "X") && evalHTML(7, "X") ||
            evalHTML(2, "X") && evalHTML(5, "X") && evalHTML(8, "X") ||
            evalHTML(0, "X") && evalHTML(4, "X") && evalHTML(8, "X") ||
            evalHTML(2, "X") && evalHTML(4, "X") && evalHTML(6, "X")){
            alert(players[0].name + " Wins!")
        }else if(evalHTML(0, "O") && evalHTML(1, "O") && evalHTML(2, "O") ||
            evalHTML(3, "O") && evalHTML(4, "O") && evalHTML(5, "O") || 
            evalHTML(6, "O") && evalHTML(7, "O") && evalHTML(8, "O") ||
            evalHTML(0, "O") && evalHTML(3, "O") && evalHTML(6, "O") ||
            evalHTML(1, "O") && evalHTML(4, "O") && evalHTML(7, "O") ||
            evalHTML(2, "O") && evalHTML(5, "O") && evalHTML(8, "O") ||
            evalHTML(0, "O") && evalHTML(4, "O") && evalHTML(8, "O") ||
            evalHTML(2, "O") && evalHTML(4, "O") && evalHTML(6, "O")){
            alert(players[1].name + " Wins!")
        }else if(allCellsFilled()){
            alert("No Winnner :/")
        }
}






