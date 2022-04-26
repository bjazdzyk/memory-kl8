class Game{
	constructor(cols, rows){
		//kolumny/wiersze
		this.rows = rows
		this.cols = cols

		//górna część planszy
		this.boardSection = document.createElement("div")
		this.boardSection.setAttribute("class", "boardSection")

		//dolna część planszy
		this.playerSection = document.createElement("div")
		this.playerSection.setAttribute("class", "playerSection")		

		//cały ekran
		const game = document.getElementById("gameContainer")
		game.appendChild(this.boardSection)
		game.appendChild(this.playerSection)

		//plansza
		this.board = document.createElement("div")
		this.board.setAttribute("class", "board")

		this.boardSection.appendChild(this.board)

		//linki do zdjęć
		this.alternativeImage = "imgs/bug.png" //<-- gdy jest za mało zdjęć wypełniamy tym
		this.images = ["imgs/troll.png", "imgs/buzka.png", this.alternativeImage]

		//ile razy zdjęcie było już przypisane do kafelka
		this.imageRepetitions = []
		//wypełnienie tablicy zerami
		for(let i=0; i<this.images.length-1; i++){
			this.imageRepetitions.push(0)
		}
		this.zuzyteZdjecia = 0

		
		//indexy zdjęć dla poszczególnych coordów

		//klucz - "x:y"
		//wartość  - id zdjęcia w  this.images i this.imageRepetitions
		this.imageData = {}


		this.build()

	}
	build(){
		//dodawanie elementów do html
		//ctrl+shift+i - zobacz strukturę gry
		for(let i=0; i<this.rows; i++){

			const row = document.createElement("row")
			row.setAttribute("class", "row")

			this.board.appendChild(row)

			for(let j=0; j<this.cols; j++){
				const cell = document.createElement("cell")
				const pos = `${j}:${i}`//"x:y"
				cell.setAttribute("class", "cell")
				cell.setAttribute("onclick", "clickCell(this)")//dodanie eventu
				cell.setAttribute("data-position", pos)//coordy kafelka
				
				row.appendChild(cell)

				//losowanie zdjęcia
				const r = Math.floor(Math.random()*(this.images.length-1 - this.zuzyteZdjecia)) 
				let l = 0
				
				if(this.zuzyteZdjecia>=this.images.length-1){
					this.imageData[pos] = this.images.length-1
				}else{

					for(let i=0; i<this.images.length-1; i++){
						if(this.imageRepetitions[i]<2){


							if(l == r){
								//zliczanie ilości wylosowań
								this.imageRepetitions[i]++
								//zapisywanie id zdjęcia w imageData
								this.imageData[pos] = i
								if(this.imageRepetitions[i] == 2){
									this.zuzyteZdjecia ++
								}
							}
							l++
						}
					}
				}

				
			}
		}
	}
}

const game = new Game(2, 2)
//gdy zmieniasz cols/rows zmień też w styles.css!!


const clickCell = (cell)=>{
	//po kliknięciu kafelka
	const position = cell.getAttribute("data-position")
	//position jest w formacie "x:y"
	cell.style["background-image"] = `url(${game.images[game.imageData[position]]})`
	//zmiana obrazka na kafelku

}


//7 * 6 = 42 (21 uczniów 21 par 21*2=42)