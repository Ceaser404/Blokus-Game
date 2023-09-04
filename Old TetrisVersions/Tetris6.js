const canvas = document.getElementById("Blokus");
const ctx = canvas.getContext("2d");
const scoreElement = document.getElementById("score");

const ROW = 20;
const COL = COLUMN = 20;
const SQ = squareSize = 22.5;
const VACANT = "WHITE"; // color of an empty squareSize

canvas.width = 450;
canvas.height = 450;

let i = 0;
var xo = 0;
var yo = 0;
var r = 0;
//var piecePlaced = false;

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
// I, J, L, O, S, F, Z, H, C, Y, B, X, M, G, W, V, T, P, U, S, D, A, R, E, Q
// i.73, j.74, l.76, o.79, s.83, f.70, z.90, h.72, c.67, y.89, b.66, x.88, m.77, g.71, w.87, v.86, t.84, p.80, u.85, k.75, d.68, a.65, r.82, e.69, q.81
 
let PIECES = [
	[I,"blue","red","green","yellow","unused"],
	[J,"blue","red","green","yellow","unused"],
	[L,"blue","red","green","yellow","unused"],
	[O,"blue","red","green","yellow","unused"],
	[S,"blue","red","green","yellow","unused"],
	[F,"blue","red","green","yellow","unused"],
	[Z,"blue","red","green","yellow","unused"],
	[H,"blue","red","green","yellow","unused"],
	[C,"blue","red","green","yellow","unused"],
	[Y,"blue","red","green","yellow","unused"],
	[B,"blue","red","green","yellow","unused"],
	[X,"blue","red","green","yellow","unused"],
	[M,"blue","red","green","yellow","unused"],
	[G,"blue","red","green","yellow","unused"],
	[W,"blue","red","green","yellow","unused"],
	[V,"blue","red","green","yellow","unused"],
	[T,"blue","red","green","yellow","unused"],
	[P,"blue","red","green","yellow","unused"],
	[U,"blue","red","green","yellow","unused"],
	[K,"blue","red","green","yellow","unused"],
	[D,"blue","red","green","yellow","unused"],
	[A,"blue","red","green","yellow","unused"],
	[R,"blue","red","green","yellow","unused"],
	[E,"blue","red","green","yellow","unused"],
	[Q,"blue","red","green","yellow","unused"]
];

// generate random pieces

// The Object Piece

document.addEventListener("click", CHOOSEPLACE)
function CHOOSEPLACE(event) {
	xo = event.offsetX;
	yo = event.offsetY;
	//piecePlaced = true;		
	xo = Math.floor(xo / 22.5);
	yo = Math.floor(yo / 22.5);
	
}



function newfunction() {
	console.log("X place");
	console.log(xo);
	console.log("Y place");
	console.log(yo);
	
	i++;
	let r = randomN = Math.floor(Math.random() * PIECES.length)
	
	if (i === 5){
		i = 1;	
	}
	p = new Piece( PIECES[r][0], PIECES[r][i], xo, yo)

	return p ;	
}

function newfunction2() {
	console.log("X place");
	console.log(xo);
	console.log("Y place");
	console.log(yo);
	
	i++;	
	if (i === 5){
		i = 1;	
	}	
	
	p = new Piece( PIECES[r][0], PIECES[r][i], xo, yo)
	console.log("HELLO!");
	console.log(i);
	return p;
}

function Piece(tetromino, color, xo, yo){
	console.log("r is:");
	console.log(r);
	console.log("xo in Piece");
	console.log(xo);
	console.log("yo in Piece");
	console.log(yo);
	
	this.tetromino = tetromino;
	this.color = color;
	
	this.tetrominoN = 0; // we start from the first pattern
	this.activeTetromino = this.tetromino[this.tetrominoN];
	
	// we need to control the pieces
	this.x = xo;
	this.y = yo;
	this.fill(this.color);

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
///****************************************************************************************************
Piece.prototype.moveUp = function(){
	if(!this.collision(0,-1,this.activeTetromino)){
	this.unDraw();
	this.y--
	this.draw();	
	}
}

// move the piece Down

Piece.prototype.moveDown = function(){
	if(!this.collision(0,1,this.activeTetromino)){
	this.unDraw();
	this.y++
	this.draw();	
	}
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
			console.log(this.x);
			console.log(this.y);
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

//let PLACED = ["unused","unused","unused","unused","unused","unused","unused","unused","unused","unused","unused","unused","unused","unused","unused","unused","unused","unused","unused","unused","unused","unused","unused","unused","unused"]

// i.73, j.74, l.76, o.79, s.83, f.70, z.90, h.72, c.67, y.89,
function CONTROL(event){
	console.log("control");
	if(event.keyCode == 37){
		p.moveLeft();
	}else if(event.keyCode == 38){
		console.log("moveup");
		p.moveUp();
		//dropStart = Date.now();
	}else if(event.keyCode == 39){
		console.log("moveright");
		p.moveRight();
	}else if(event.keyCode == 40){
		p.moveDown();
	}else if(event.keyCode == 16){
		p.lock();
	}else if(event.keyCode == 32){
		p.rotate();
	}else if(event.keyCode == 73 && PIECES[0][5] == "unused"){
		PIECES[0][5] = "used"
		r = 0;
		newfunction2();	
	}else if(event.keyCode == 74 && PIECES[1][5] == "unused"){
		PIECES[1][5] = "used"
		r = 1;
		newfunction2();
	}else if(event.keyCode == 76 && PIECES[2][5] == "unused"){
		PIECES[2][5] = "used"
		r = 2;
		newfunction2();
	}else if(event.keyCode == 79 && PIECES[3][5] == "unused"){
		PIECES[3][5] = "used"
		r = 3;
		newfunction2();
	}else if(event.keyCode == 83 && PIECES[4][5] == "unused"){
		PIECES[4][5] = "used"
		r = 4;
		newfunction2();	
	}else if(event.keyCode == 70 && PIECES[5][5] == "unused"){
		PIECES[5][5] = "used"
		r = 5;
		newfunction2();
	}else if(event.keyCode == 90 && PIECES[6][5] == "unused"){
		PIECES[6][5] = "used"
		r = 6;
		newfunction2();
	}else if(event.keyCode == 72 && PIECES[7][5] == "unused"){
		PIECES[7][5] = "used"
		r = 7;
		newfunction2();
	}else if(event.keyCode == 67 && PIECES[8][5] == "unused"){
		PIECES[8][5] = "used"
		r = 8;
		newfunction2();	
	}else if(event.keyCode == 89 && PIECES[9][5] == "unused"){ //  b.66, x.88, m.77, g.71, w.87, v.86, t.84, p.80, u.85, k.75, d.68, a.65, r.82, e.69, q.81
		PIECES[9][5] = "used"
		r = 9;
		newfunction2();
	}else if(event.keyCode == 66 && PIECES[10][5] == "unused"){
		PIECES[10][5] = "used"
		r = 10;
		newfunction2();
	}else if(event.keyCode == 88 && PIECES[11][5] == "unused"){
		PIECES[11][5] = "used"
		r = 11;
		newfunction2();
	}else if(event.keyCode == 77 && PIECES[12][5] == "unused"){
		PIECES[12][5] = "used"
		r = 12;
		newfunction2();	
	}else if(event.keyCode == 71 && PIECES[13][5] == "unused"){
		PIECES[13][5] = "used"
		r = 13;
		newfunction2();
	}else if(event.keyCode == 87 && PIECES[14][5] == "unused"){
		PIECES[14][5] = "used"
		r = 14;
		newfunction2();
	}else if(event.keyCode == 86 && PIECES[15][5] == "unused"){
		PIECES[15][5] = "used"
		r = 15;
		newfunction2();
	}else if(event.keyCode == 84 && PIECES[16][5] == "unused"){
		PIECES[16][5] = "used"
		r = 16;
		newfunction2();	
	}else if(event.keyCode == 80 && PIECES[17][5] == "unused"){
		PIECES[17][5] = "used"
		r = 17;
		newfunction2();
	}else if(event.keyCode == 85 && PIECES[18][5] == "unused"){
		PIECES[18][5] = "used"
		r = 18;
		newfunction2();
	}else if(event.keyCode == 75 && PIECES[19][5] == "unused"){
		PIECES[19][5] = "used"
		r = 19;
		newfunction2();
	}else if(event.keyCode == 68 && PIECES[20][5] == "unused"){
		PIECES[20][5] = "used"
		r = 20;
		newfunction2();	
	}else if(event.keyCode == 65 && PIECES[21][5] == "unused"){
		PIECES[21][5] = "used"
		r = 21;
		newfunction2();
	}else if(event.keyCode == 82 && PIECES[22][5] == "unused"){
		PIECES[22][5] = "used"
		r = 22;
		newfunction2();
	}else if(event.keyCode == 69 && PIECES[23][5] == "unused"){
		PIECES[23][5] = "used"
		r = 23;
		newfunction2();
	}else if(event.keyCode == 81 && PIECES[24][5] == "unused"){
		PIECES[24] = "used"
		r = 24;
		newfunction2();
	}else{
		alert('not valid piece');
	}
}
