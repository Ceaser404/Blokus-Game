const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];
const cardBtn = [...document.querySelectorAll('.card-btn')];

productContainers.forEach((item, i, cardBtn) => {
	let containerDimensions = item.getBoundingClientRect();
	let containerWidth = containerDimensions.width;

	nxtBtn[i].addEventListener('click', () => {
		item.scrollLeft += containerWidth;
	})

	preBtn[i].addEventListener('click', () => {
		item.scrollLeft -= containerWidth;
	})

    cardBtn[i].addEventListener('click', (event) => {
        //const qoute = document.getElementById("card");
        console.log(event.target.innerHTML);
    })
})