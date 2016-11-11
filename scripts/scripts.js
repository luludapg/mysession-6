var links = document.getElementById("imageGallery").getElementsByTagName("a");


window.onload = function(){
	prepareGallery();
}


function prepareGallery(){
	
	for (var i = 0; i < links.length; i++) {
		links[i].onclick = function(){
			showPicOne(this)
			return false;
		}

	}
		showPicOne(links[0]);
		links[0].parentNode.classList.add('active');
		console.log('hi')
}






function showPicOne (whichpic) {
	removeActive();
	whichpic.parentNode.classList.add('active');
	var source = whichpic.getAttribute('href');
	var placeholder = document.getElementById('placeholder');
	placeholder.setAttribute('src', source);

	var text = whichpic.getAttribute('title');
	var description = document.getElementById('description');
	description.innerHTML = text;


}

function removeActive() {
    for (var i = 0; i < links.length; i++) {
        links[i].parentNode.className = ''
    }
}