const canvas = document.getElementById("Blokus");
const ctx = canvas.getContext("2d");
const scoreElement = document.getElementById("score");

const ROW = 20;
const COL = COLUMN = 20;
const SQ = squareSize = 22.5;
const VACANT = "WHITE"; // color of an empty squareSize

canvas.width = 450;
canvas.height = 450;

let i = 1;
var xo = 0;
var yo = 0;
var r = 0;

let score_b = 107;
let score_g = 107;
let score_r = 107;
let score_y = 107;

let playerBlue = true;
let playerRed = true;
let playerGreen = true;
let playerYellow = true;

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
	[I,"blue","red","green","yellow","unused","unused","unused","unused",73,4],
	[J,"blue","red","green","yellow","unused","unused","unused","unused",74,4],
	[L,"blue","red","green","yellow","unused","unused","unused","unused",76,4],
	[O,"blue","red","green","yellow","unused","unused","unused","unused",79,4],
	[S,"blue","red","green","yellow","unused","unused","unused","unused",83,4],
	[F,"blue","red","green","yellow","unused","unused","unused","unused",70,4],
	[Z,"blue","red","green","yellow","unused","unused","unused","unused",90,4],
	[H,"blue","red","green","yellow","unused","unused","unused","unused",72,5],
	[C,"blue","red","green","yellow","unused","unused","unused","unused",67,5],
	[Y,"blue","red","green","yellow","unused","unused","unused","unused",89,6],
	[B,"blue","red","green","yellow","unused","unused","unused","unused",66,5],
	[X,"blue","red","green","yellow","unused","unused","unused","unused",88,5],
	[M,"blue","red","green","yellow","unused","unused","unused","unused",77,3],
	[G,"blue","red","green","yellow","unused","unused","unused","unused",71,4],
	[W,"blue","red","green","yellow","unused","unused","unused","unused",87,5],
	[V,"blue","red","green","yellow","unused","unused","unused","unused",86,5],
	[T,"blue","red","green","yellow","unused","unused","unused","unused",84,5],
	[P,"blue","red","green","yellow","unused","unused","unused","unused",80,5],
	[U,"blue","red","green","yellow","unused","unused","unused","unused",85,5],
	[K,"blue","red","green","yellow","unused","unused","unused","unused",75,2],
	[D,"blue","red","green","yellow","unused","unused","unused","unused",68,1],
	[A,"blue","red","green","yellow","unused","unused","unused","unused",65,3],
	[R,"blue","red","green","yellow","unused","unused","unused","unused",82,5],
	[E,"blue","red","green","yellow","unused","unused","unused","unused",69,5],
	[Q,"blue","red","green","yellow","unused","unused","unused","unused",81,5]
];

let PIECESPoints = [4,4,4,4,4,4,4,5,5,6,5,5,3,4,5,5,5,5,5,2,1,3,5,5,5];

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

function get_Piece() {
	/*
	console.log("X place");
	console.log(xo);
	console.log("Y place");
	console.log(yo);
	*/

	i = checkOutPlayers(i)	

	
	console.log("i is: " + i);
	console.log("r is: " + r);
	if (PIECES[r][i+4] == "unused") {
		PIECES[r][i+4] = "used";
		console.log("howdy");
		do_score()
		p = new Piece( PIECES[r][0], PIECES[r][i], xo, yo)	
		i++;
		return p;
	}





	console.log("here");
	return null;
}

function checkOutPlayers(i) {
	console.log(playerBlue);
	console.log(playerRed);
	console.log(playerGreen);
	console.log(playerYellow);
	console.log(i);
	if ((i === 1) && (!playerBlue)) {
		i = 2;
		return checkOutPlayers(i);
	} else if ((i === 1) && (playerBlue)) {
		return i;
	} else if ((i === 2) && (!playerRed)) {
		i = 3;
		return checkOutPlayers(i);
	} else if ((i === 2) && (playerRed)) {
		return i;
	} else if ((i === 3) && (!playerGreen)) {
		i = 4;
		return checkOutPlayers(i);	
	} else if ((i === 3) && (playerGreen)) {
		return i;	
	} else if ((i === 4) && (!playerYellow)) {
		i = 1;
		return checkOutPlayers(i);
	} else if ((i === 4) && (playerYellow)) {
		return i;
	} else {
		alert("uh oh");
		return i;
	}
}

function do_score() {
	console.log("This is i for color")
	console.log(i)
	if (i == 1)
		score_b = score_b - PIECESPoints[r]
	else if (i == 2)
		score_r = score_r - PIECESPoints[r]
	else if (i == 3)
		score_g = score_g - PIECESPoints[r]
	else if (i == 4)
		score_y = score_y - PIECESPoints[r]
	document.getElementById('score_blue').innerHTML = score_b;
	document.getElementById('score_red').innerHTML = score_r;
	document.getElementById('score_green').innerHTML = score_g;
	document.getElementById('score_yellow').innerHTML = score_y;	
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

Piece.prototype.lock = function(){
	for( g = 0; g < this.activeTetromino.length; g++){
		for(c = 0; c < this.activeTetromino.length; c++){
			// we skip the vacant squares
			if( !this.activeTetromino[g][c]){
				continue;
			}

			board[this.y + g][this.x + c] = this.color;
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
	}
	for(let k = 0; k < PIECES.length; k++) {
		if (event.keyCode == PIECES[k][9]) {
			console.log("i is: " + i);
			if (i === 5){
				i = 1;	
			} 	
			r = k;
			get_Piece()
			return
			
		alert('not valid piece or used already');	
		}
	}
}

document.getElementById('score_blue').innerHTML = score_b;
document.getElementById('score_red').innerHTML = score_r;
document.getElementById('score_green').innerHTML = score_g;
document.getElementById('score_yellow').innerHTML = score_y;


let blueButton = document.querySelector("#blue");
blueButton.addEventListener("click",blueplayerLife);

let redButton = document.querySelector("#red");
redButton.addEventListener("click",redplayerLife);

let greenButton = document.querySelector("#green");
greenButton.addEventListener("click",greenplayerLife);

let yellowButton = document.querySelector("#yellow");
yellowButton.addEventListener("click",yellowplayerLife);


function blueplayerLife() {
	if(playerBlue) {
		playerBlue = false;
		document.getElementById("blue").style.color = "grey";
		document.getElementById("blue").style.opacity = "0.8";
		console.log(playerBlue);
		return playerBlue;
	} else {
		document.getElementById("blue").style.color = "blue";
		document.getElementById("blue").style.opacity = "0.9";
		playerBlue = true;
		return playerBlue;
	}
}

function redplayerLife() {
	if(playerRed) {
		playerRed = false;
		document.getElementById("red").style.color = "grey";
		document.getElementById("red").style.opacity = "0.8";
		return playerRed;
	} else {
		document.getElementById("red").style.color = "red";
		playerRed = true;
		return playerRed;
	}
}

function greenplayerLife() {
	if(playerGreen) {
		playerGreen = false;
		document.getElementById("green").style.color = "grey";
		document.getElementById("green").style.opacity = "0.8";
		return playerGreen;
	} else {
		playerBlue = true;
		document.getElementById("green").style.color = "green";
		return playerGreen;
	}
}

function yellowplayerLife() {
	if(playerYellow) {
		playerYellow = false;
		document.getElementById("yellow").style.color = "grey";
		document.getElementById("yellow").style.opacity = "0.8";
		return playerYellow;
	} else {
		document.getElementById("yellow").style.color = "yellow";
		document.getElementById("yellow").style.opacity = "0.7";
		playerYellow = true;
		return playerYellow;
	}
}
