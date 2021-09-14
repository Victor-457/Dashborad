function toggleMenu(){
	let toggle  = document.querySelector(".toggle");
	let navigation  = document.querySelector(".navigation");
	let mainWrapper  = document.querySelector(".main-wrapper");
	toggle.classList.toggle('active');
	navigation.classList.toggle('active');
	mainWrapper.classList.toggle('active');
}