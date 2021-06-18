// Fetch data from json
fetch("data.json")
 	.then((function(resp){
	 	return resp.json();
 	}))

 	.then((function(data) {
	 	getTemplate(data);
 	})); 

function getTemplate(data) {
	let tab_menu = '';
	let tab_content = '';
			
	for ( let i = 0; i < data.length; i++) {	
		if (i > 0) {
			tab_menu += '<button class="tab__selector" onclick=\'showContent(event, "content-'+ i +'", '+ i +')\'>' + data[i].title + '</button>';
			tab_content +=	'<div class="content" id="content-' + i + '" style="display: none;">' + data[i].content + '</div>';
		} else {
			tab_menu += '<button class="tab__selector active" onclick=\'showContent(event,"content-'+ i +'", '+ i +')\'>' + data[i].title + '</button>';
			tab_content +=	'<div class="content show" id="content-' + i + '">' + data[i].content + '</div>';
		}
	}
	document.getElementById("tab_bar").innerHTML = tab_menu;
	document.getElementById("content_wrapper").innerHTML = tab_content;
	
}
	
function showContent(event, content, elem_index) {
	let i, tabContent, tabLink;

	// hide contents
	tabContent = document.getElementsByClassName("content");
	for (i = 0; i < tabContent.length; i++) {
		tabContent[i].style.display = "none";
		tabContent[i].className = tabContent[i].className.replace(" show", "");
	}

	// enable/disable accordion link/tab
	tabLink = document.getElementsByClassName("tab__selector");
	for (i = 0; i < tabLink.length; i++) {
		tabLink[i].className = tabLink[i].className.replace(" active", "");
	}

	tabLink[elem_index].className += " active";

	// show content
	document.getElementById(content).style.display = "block";

	setTimeout(() => {
		tabContent[elem_index].className += " show";	
	}, 15);

	// Prevent Default
	event.preventDefault();
}





