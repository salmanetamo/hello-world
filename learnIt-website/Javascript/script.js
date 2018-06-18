
/*The following function is used in the module pages to display info in four different tabs*/
function openTab(event, tabName) {
	var i, tabcontent, tablinks, arrow;
	// Get all elements with class="tabcontent" and hide them
    tabcontent = document.querySelectorAll(".tabcontent");
    arrow = document.querySelectorAll("#moduleMain div.tab button img");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        arrow[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "inline-block";
    document.getElementById(tabName +'Arrow').style.display = "";
    event.currentTarget.className += " active"; 
}
document.getElementById('default').click();


/*The following function is used for the dropdown All topics on the top left 
  corner of each page to display modules and their topics
*/
document.querySelector('header #topBar #allTopics button img#arrowUp').style.display = 'none';
document.getElementById('allTopicsContent').style.display = 'none';

function displayTopics(){
	var arrowUp = document.querySelector('header #topBar #allTopics button img#arrowUp');
	var arrowDown = document.querySelector('header #topBar #allTopics button img#arrowDown');
	if (document.getElementById('allTopicsContent').style.display == 'none'){
		document.getElementById('allTopicsContent').style.display = '';	
		arrowUp.style.display = '';
		arrowDown.style.display = 'none';
	}	else {
		document.getElementById('allTopicsContent').style.display = 'none';
		arrowUp.style.display = 'none';
		arrowDown.style.display = '';
	}
}

