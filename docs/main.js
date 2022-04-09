class Game{
	constructor(cols, rows){
		this.rows = rows
		this.cols = cols

		this.boardSection = document.createElement("div")
		this.boardSection.setAttribute("class", "boardSection")

		this.playerSection = document.createElement("div")
		this.playerSection.setAttribute("class", "playerSection")		

		const game = document.getElementById("gameContainer")
		game.appendChild(this.boardSection)
		game.appendChild(this.playerSection)

		this.board = document.createElement("div")
		this.board.setAttribute("class", "board")
		this.board.style.width

		this.boardSection.appendChild(this.board)


		this.images = ["images/troll.png", "images/buzka.png"]


		this.build()

	}
	build(){
		for(let i=0; i<this.rows; i++){
			const row = document.createElement("row")
			row.setAttribute("class", "row")

			this.board.appendChild(row)
			//this.boardSection.appendChild(document.createElement("br"))

			for(let i=0; i<this.cols; i++){
				const cell = document.createElement("cell")
				cell.setAttribute("class", "cell")
				
				row.appendChild(cell)
			}
		}
	}
}

const b = new Game(4, 4)