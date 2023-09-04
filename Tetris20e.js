document.querySelectorAll(".card-btn").forEach(e => e.addEventListener("click", selectPiece));



function selectPiece (event) {
	if (placed == true) {
		console.log("Card Button Summoned");	
		console.log(event.target.parentElement.querySelector(".product-thumb").src);
		for(let k = 0; k < PIECES.length; k++) {
			if (this.id == PIECES[k][11]) {
				console.log(PIECES[k][11]);
				console.log("i is: " + i);
				console.log("k is: " + k + " i is: " + i);
				
				if (PIECES[k][i+4] === "unused") {
					r = k;
					console.log("get piece");

					//event.target.parentElement.querySelector(".product-thumb").src = "./images/Tetronimo_green/Tetronimo_Y_green.jpg";
					event.target.parentElement.querySelector(".product-thumb").src = grayTetronimos[r];

					get_Piece()
					return;
				} 	
			alert('not valid piece or used already');
			}
		}		
	}
};

const grayTetronimos = ["./images/Tetronimo_gray/Tetronimo_I_gray.jpg","./images/Tetronimo_gray/Tetronimo_J_gray.jpg","./images/Tetronimo_gray/Tetronimo_L_gray.jpg",
	"./images/Tetronimo_gray/Tetronimo_O_gray.jpg","./images/Tetronimo_gray/Tetronimo_S_gray.jpg","./images/Tetronimo_gray/Tetronimo_F_gray.jpg",
	"./images/Tetronimo_gray/Tetronimo_Z_gray.jpg","./images/Tetronimo_gray/Tetronimo_H_gray.jpg","./images/Tetronimo_gray/Tetronimo_C_gray.jpg",
	"./images/Tetronimo_gray/Tetronimo_Y_gray.jpg","./images/Tetronimo_gray/Tetronimo_B_gray.jpg","./images/Tetronimo_gray/Tetronimo_X_gray.jpg",
	"./images/Tetronimo_gray/Tetronimo_M_gray.jpg","./images/Tetronimo_gray/Tetronimo_G_gray.jpg","./images/Tetronimo_gray/Tetronimo_W_gray.jpg",
	"./images/Tetronimo_gray/Tetronimo_V_gray.jpg","./images/Tetronimo_gray/Tetronimo_T_gray.jpg","./images/Tetronimo_gray/Tetronimo_P_gray.jpg",
	"./images/Tetronimo_gray/Tetronimo_U_gray.jpg","./images/Tetronimo_gray/Tetronimo_K_gray.jpg","./images/Tetronimo_gray/Tetronimo_D_gray.jpg",
	"./images/Tetronimo_gray/Tetronimo_A_gray.jpg","./images/Tetronimo_gray/Tetronimo_R_gray.jpg","./images/Tetronimo_gray/Tetronimo_E_gray.jpg",
	"./images/Tetronimo_gray/Tetronimo_Q_gray.jpg"]