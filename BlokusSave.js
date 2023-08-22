const cvs = document.getElementById("tetris");
const ctx = cvs.getContext("2d");
const scoreElement = document.getElementById("score");

const ROW = 20;
const COL = COLUMN = 20;
const SQ = squareSize = 22.5;
const VACANT = "WHITE"; // color of an empty squareSize

let i = 0;

// draw a square
function drawSquare(x,y,color){
    ctx.fillStyle = color;
    ctx.fillRect(x*SQ,y*SQ,SQ,SQ);

    ctx.strokeStyle = "BLACK";
    ctx.strokeRect(x*SQ,y*SQ,SQ,SQ);
}

// create the board

let board = [];
for( r = 0; r <ROW; r++){
    board[r] = [];
    for(c = 0; c < COL; c++){
        board[r][c] = VACANT;
    }
}

// draw the board
function drawBoard(){
    for( r = 0; r <ROW; r++){
        for(c = 0; c < COL; c++){
            drawSquare(c,r,board[r][c]);
        }
    }
}

drawBoard();

// the pieces and their colors
// I, J, L, O, S, F, Z, l, C, Y, b, X, m, G, W, V, T, p, U, s, d, A, j, f, q
const PIECES = [
	[I,"blue"],
	[J,"blue"],
	[L,"blue"],
	[O,"blue"],
	[S,"blue"],
	[F,"blue"],
	[Z,"blue"],
	[l,"blue"],
	[C,"blue"],
	[Y,"blue"],
	[b,"blue"],
	[X,"blue"],
	[m,"blue"],
	[G,"blue"],
	[W,"blue"],
	[V,"blue"],
	[T,"blue"],
	[z,"blue"],
	[U,"blue"],
	[d,"blue"],
	[A,"blue"],
	[j,"blue"],
	[f,"blue"],
	[q,"blue"]
];
// I, J, L, O, S, F, Z, l, C, Y, b, X, i, z, W, V, T, z, U, s, d, A, j, f, q
const PIECESTWO = [
	[I,"red"],
	[J,"red"],
	[L,"red"],
	[O,"red"],
	[S,"red"],
	[F,"red"],
	[Z,"red"],
	[l,"red"],
	[C,"red"],
	[Y,"red"],
	[b,"red"],
	[X,"red"],
	[m,"red"],
	[G,"red"],
	[W,"red"],
	[V,"red"],
	[T,"red"],
	[z,"red"],
	[U,"red"],
	[s,"red"],
	[d,"red"],
	[A,"red"],
	[j,"red"],
	[f,"red"],
	[q,"red"]
];

const PIECESThree = [
	[I,"green"],
	[J,"green"],
	[L,"green"],
	[O,"green"],
	[S,"green"],
	[F,"green"],
	[l,"green"],
	[Z,"green"],
	[C,"green"],
	[Y,"green"],
	[b,"green"],
	[X,"green"],
	[m,"green"],
	[G,"green"],
	[W,"green"],
	[V,"green"],
	[T,"green"],
	[z,"green"],
	[U,"green"],
	[d,"green"],
	[A,"green"],
	[j,"green"],
	[f,"green"],
	[q,"green"]
];

const PIECESFour = [
	[I,"yellow"],
	[J,"yellow"],
	[L,"yellow"],
	[O,"yellow"],
	[S,"yellow"],
	[I,"yellow"],
	[F,"yellow"],
	[Z,"yellow"],
	[l,"yellow"],
	[C,"yellow"],
	[Y,"yellow"],
	[b,"yellow"],
	[X,"yellow"],
	[m,"yellow"],
	[G,"yellow"],
	[W,"yellow"],
	[V,"yellow"],
	[T,"yellow"],
	[z,"yellow"],
	[U,"yellow"],
	[d,"yellow"],
	[A,"yellow"],
	[j,"yellow"],
	[f,"yellow"],
	[q,"yellow"]
];



// generate random pieces

function randomPiece(){
	i++;
	if (i === 1) {
		let r = randomN = Math.floor(Math.random() * PIECES.length) // 8 -> 6
		return new Piece( PIECES[r][0], PIECES[r][1]);	
	} else if (i === 2) {
		let r = randomN = Math.floor(Math.random() * PIECESTWO.length) // 8 -> 6
		return new Piece( PIECESTWO[r][0], PIECESTWO[r][1]);
	} else if (i === 3) {
		let r = randomN = Math.floor(Math.random() * PIECESThree.length) // 8 -> 6
		return new Piece( PIECESThree[r][0], PIECESThree[r][1]);
	} else if (i === 4) {
		let r = randomN = Math.floor(Math.random() * PIECESFour.length) // 8 -> 6
		if (i === 4){
			i = 0;
		}			
		return new Piece( PIECESFour[r][0], PIECESFour[r][1]);
	} 
}

let p = randomPiece();

// The Object Piece

function Piece(tetromino, color){
	this.tetromino = tetromino;
	this.color = color;
	
	this.tetrominoN = 0; // we start from the first pattern
	this.activeTetromino = this.tetromino[this.tetrominoN];

	// we need to control the pieces
	this.x = 9;
	this.y = 7;
}

// fill function

Piece.prototype.fill = function(color){
	for( r = 0; r < this.activeTetromino.length; r++){
		for(c = 0; c < this.activeTetromino.length; c++){
			// we draw only occupied squares
			if( this.activeTetromino[r][c]){
				drawSquare(this.x + c, this.y + r, color);	
			}
		}
	}
}

// draw a piece to the board

Piece.prototype.draw = function(){
	this.fill(this.color);
}

// undraw a piece


Piece.prototype.unDraw = function(){
	this.fill(VACANT);
}

// move Up the piece

Piece.prototype.moveUp = function(){
	if(!this.collision(0,-1,this.activeTetromino)){
	this.unDraw();
	this.y--
	this.draw();	
	}
	//else{
		// we lock the piece and generate a new one
		//this.lock();
		//p = randomPiece();
	//}
	
}

// move Down the piece

Piece.prototype.moveDown = function(){
	if(!this.collision(0,1,this.activeTetromino)){
	this.unDraw();
	this.y++
	this.draw();	
	}
	//else{
		// we lock the piece and generate a new one
		//this.lock();
		//p = randomPiece();
	//}
	
}

// move Right the piece
Piece.prototype.moveRight = function(){
	if(!this.collision(1,0,this.activeTetromino)){
	this.unDraw();
	this.x++;
	this.draw();
	}
}

// move Left the piece
Piece.prototype.moveLeft = function(){
	if(!this.collision(-1,0,this.activeTetromino)){
	this.unDraw();
	this.x--;
	this.draw();
	}
}

// rotate the piece
Piece.prototype.rotate = function(){
	let nextPattern = this.tetromino[(this.tetrominoN + 1)%this.tetromino.length];
	let kick = 0;
	
	if(this.collision(0,0,nextPattern)){
		if(this.x > COL/2){
			// it's the right wall
			kick = -1; // we need to move the piece to the left
		}else{
				// it's the left wall
			kick = 1; // we need to move the piece to the right
		}
	}
	
	if(!this.collision(kick,0,nextPattern)){
		this.unDraw();
		this.x += kick;
		this.tetrominoN = (this.tetrominoN + 1)%this.tetromino.length; // (0+1)%4 => 1
		this.activeTetromino = this.tetromino[this.tetrominoN];
		this.draw();
		}
}

let score = 0;

Piece.prototype.lock = function(){
	for( r = 0; r < this.activeTetromino.length; r++){
		for(c = 0; c < this.activeTetromino.length; c++){
			// we skip the vacant squares
			
			if( !this.activeTetromino[r][c]){
				continue;
			}
			// pieces to lock on top = game over
			/*
			if(this.y + r < 0){
				alert("Game Over! Final Score: " + score);
				// stop request animation frameElement
				gameOver = true;
				break;
			
			}
			*/
			// we lock the piece
			board[this.y + r][this.x + c] = this.color;
		}
	}
	/*
	// remove full rows
	for(r = 0; r < ROW; r++){
		let isRowFull = true;
		for( c = 0; c < COL; c++){
			isRowFull = isRowFull && (board[r][c] != VACANT);
		}
		if(isRowFull){
			// if the row is full
			// we move down all the rows above it
			for ( y =r; y > 1; y--){
				for( c =0; c < COL; c++){
					board[y][c] = board[y-1][c];
				}
			}
			// the top row board[0][..] has no row above it
			for( c = 0; c < COL; c++){
				board[0][c] = VACANT;
			}
			// increment the score
			score += 10;
			if (score < 100) {
			time = time / 1.07;
			}
			if (score > 200) {
			time = 200;
			}
			if (score > 300) {
			time = time / 1.2;	
			}
		}
	}
	*/
	// update the board
	drawBoard();
	
	// update the score
	//scoreElement.innerHTML = score;
	
}

// collision function

Piece.prototype.collision = function(x, y, piece){
	for( r = 0; r < piece.length; r++){
		for(c = 0; c < piece.length; c++){
			// if the square is empty, we skip it
			
			if(!piece[r][c]){
				continue;
			}
			
			// coordinates of the piece after movement
			let newX = this.x + c + x;
			let newY = this.y + r + y;

			// conditions
			if(newX < 0 || newX >= COL || newY >= ROW || newY < 0){
				return true;
			}
			// skip newY < 0; board[-1] will crash our game
			if(newY <0){
				continue;
			}
			// check if there is a locked piece already in place
			if ( board[newY][newX] != VACANT){
				return true;
			}
		}
	}
	return false;
}

// Control the piece

document.addEventListener("keydown", CONTROL);

function CONTROL(event){
	if(event.keyCode == 37){
		p.moveLeft();
	}else if(event.keyCode == 38){
		p.moveUp();
		//dropStart = Date.now();
	}else if(event.keyCode == 39){
		p.moveRight();
	}else if(event.keyCode == 40){
		p.moveDown();
	}else if(event.keyCode == 16){
		p.lock();
		p = randomPiece();
	}else if(event.keyCode == 32){
		p.rotate();
	}		
}

function ChoosePiece() {
	
}


// drop the piece every 1sec

let dropStart = Date.now();
let gameOver = false;
function drop(){
	let now = Date.now();
	let delta = now - dropStart;
	
	
	if(delta > time){
		//p.moveDown();
		dropStart = Date.now();
		
	}
	if( !gameOver){
		requestAnimationFrame(drop);
	}
	
}

time = 500;
drop();



