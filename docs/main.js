class Board{
	constructor(rows, cols){
		this.rows = rows
		this.cols = cols
	}
	build(){
		for(let i=0; i<this.rows; i++){
			const row = document.createElement("row")
			row.setAttribute("class", "row")

			const game = document.getElementById("gameContainer")
			game.appendChild(row)

			for(let i=0; i<this.cols; i++){
				const cell = document.createElement("cell")
				cell.setAttribute("class", "cell")
				
				row.appendChild(cell)
			}
		}
	}
}

const b = new Board(10, 10)
b.build()