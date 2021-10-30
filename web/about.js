console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has been submitted successful!');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

duckImage.addEventListener('mouseover', () => {

	alert('You are Beautiful!');
	})