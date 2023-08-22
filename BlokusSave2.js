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
	[I,"blue","red","green","yellow"],
	[J,"blue","red","green","yellow"],
	[L,"blue","red","green","yellow"],
	[O,"blue","red","green","yellow"],
	[S,"blue","red","green","yellow"],
	[F,"blue","red","green","yellow"],
	[Z,"blue","red","green","yellow"],
	[l,"blue","red","green","yellow"],
	[C,"blue","red","green","yellow"],
	[Y,"blue","red","green","yellow"],
	[b,"blue","red","green","yellow"],
	[X,"blue","red","green","yellow"],
	[m,"blue","red","green","yellow"],
	[G,"blue","red","green","yellow"],
	[W,"blue","red","green","yellow"],
	[V,"blue","red","green","yellow"],
	[T,"blue","red","green","yellow"],
	[z,"blue","red","green","yellow"],
	[U,"blue","red","green","yellow"],
	[d,"blue","red","green","yellow"],
	[A,"blue","red","green","yellow"],
	[j,"blue","red","green","yellow"],
	[f,"blue","red","green","yellow"],
	[q,"blue","red","green","yellow"]
];



// generate random pieces

function randomPiece(){
	i++;

	if (i === 1) {
		let r = randomN = Math.floor(Math.random() * PIECES.length) // 8 -> 6
		return new Piece( PIECES[r][0], PIECES[r][i]);	
	} else if (i === 2) {
		let r = randomN = Math.floor(Math.random() * PIECES.length) // 8 -> 6
		return new Piece( PIECES[r][0], PIECES[r][i]);
	} else if (i === 3) {
		let r = randomN = Math.floor(Math.random() * PIECES.length) // 8 -> 6
		return new Piece( PIECES[r][0], PIECES[r][i]);
	} else if (i === 4) {
		let r = randomN = Math.floor(Math.random() * PIECES.length) // 8 -> 6
		if (i === 4){
			i = 0;
		}			
		return new Piece( PIECES[r][0], PIECES[r][4]);
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

// move the piece Up

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

// move the piece Down

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

// move the piece Right
Piece.prototype.moveRight = function(){
	if(!this.collision(1,0,this.activeTetromino)){
	this.unDraw();
	this.x++;
	this.draw();
	}
}

// move the piece Left
Piece.prototype.moveLeft = function(){
	if(!this.collision(-1,0,this.activeTetromino)){
	this.unDraw();
	this.x--;
	this.draw();
	}
}

// Rotate the piece
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

			board[this.y + r][this.x + c] = this.color;
		}
	}

	drawBoard();
	
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


