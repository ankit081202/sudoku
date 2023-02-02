import { solve, insertValues, populateValues } from './solver.js'
import { drawBoard } from './draw_board.js'
import { loadRandomBoard } from './load_boards.js'
const solveButton = document.querySelector("#solve-button")
const clearButton = document.querySelector("#clear-button")
const loadButton = document.querySelector('#load-button')
const h1 = document.querySelector('#one')
const h2 = document.querySelector('#two')
const h3 = document.querySelector('#three')
function main() {
    drawBoard();
    let c = 2;
    solveButton.addEventListener('click', () => {
        loadButton.style.display='none'
        insertValues()
        if(solve()) {
            populateValues()
        } 
        else {
            if(c==2){
                c=c-1;
                h3.style.display = "none";
                alert("Can't solve this puzzle!")
            }
            else if(c==1){
                c=c-1;
                h2.style.display = "none";
                h3.style.display = "none";
                alert("Can't solve this puzzle!")
                
            }
            else{
                h1.style.display = "none";
                h2.style.display = "none";
                h3.style.display = "none";
                alert("Good luck next time!")
                c=2;
                window.location.reload(true)
            }
        }
    })
    clearButton.addEventListener('click', () =>{ 
        window.location.reload(true); 
        c=2;
    })
    loadButton.addEventListener('click', () => {
        solveButton.style.display="inline"
        loadRandomBoard()
        c=2;
    })
    
}
main()