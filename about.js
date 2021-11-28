console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Submitted Successfully");
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

const imgSelect = document.querySelector("img")


const compliment = () =>{
	alert("you're kinda cute, here's my ip address ;)\n127.0.0.1")
}

imgSelect.addEventListener("mouseover", compliment)