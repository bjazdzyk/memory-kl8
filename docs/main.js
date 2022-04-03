
class Board{
	constructor(rows, cols, cellWidth, cellHeight, borderWidth){
		this.rows = rows
		this.cols = cols
		this.cellSize = [cellWidth, cellHeight]
		this.bordWid = borderWidth
	}
	build(){
		const game = document.getElementById("gameContainer")
		const board = document.createElement("div")
		board.setAttribute("class", "board")
		board.style.position = "absolute"
		board.style.width = this.cellSize[0]*this.rows+"px"
		board.style.height = this.cellSize[1]*this.cols+"px"
		board.style.top = "50%"
		board.style.left = "50%"
		board.style.transform = "translate(-50%, -50%)"
		for(let i=0; i<this.rows; i++){
			const row = document.createElement("div")
			row.setAttribute("class", "row")
			row.style.clear = "both"

			game.appendChild(board)
			board.appendChild(row)

			for(let j=0; j<this.cols; j++){
				const cell = document.createElement("div")
				cell.setAttribute("class", "cell")
				cell.style.float = "left"
				cell.style.backgroundColor = "white"
				cell.style.width = (this.cellSize[0]-(this.bordWid*2))+"px"
				cell.style.height = (this.cellSize[1]-(this.bordWid*2))+"px"
				if((i+j)%2==0){
					cell.style.border = this.bordWid+"px solid gray"
				}
				else{
					cell.style.border = this.bordWid+"px solid darkgray"
				}
				row.appendChild(cell)
			}
		}
	}
}

const b = new Board(5,5,100,100,3)
b.build()