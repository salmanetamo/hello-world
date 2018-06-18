'AIzaSyAF7ZJGd-dV7mNr0DyXiD-3LtHTEzDDexg'

// var map;
//       function initMap() {
//         map = new google.maps.Map(document.getElementById('map'), {
//           center: {lat: -34.397, lng: 150.644},
//           zoom: 8
//         });
//       }var map;
//       function initMap() {
//         map = new google.maps.Map(document.getElementById('map'), {
//           center: {lat: -34.397, lng: 150.644},
//           zoom: 8
//         });
//       }

function activateLink(index, e) {
    if (e == 'onclick') {
        var links = document.querySelectorAll('nav a');
        for (var i = 0; i < links.length; i++) {
            links[i].setAttribute('onmouseout', 'deactivateLink('+ i +')');
            links[i].classList.remove('active');
            deactivateLink(i);
        }
        links[index].setAttribute('onmouseout', '');
        links[index].classList.add('active');

    }
    var linkImages = document.querySelectorAll('nav img');
    var currentSrc = linkImages[index].getAttribute('src');

    if (currentSrc.slice(-10) != '_black.svg') {
        let newSrc = currentSrc.slice(0, -4) + '_black.svg';
        linkImages[index].setAttribute('src', newSrc);
    }
}

function deactivateLink(index) {
    var linkImages = document.querySelectorAll('nav img');
    var currentSrc = linkImages[index].getAttribute('src');

    if (currentSrc.slice(-10) == '_black.svg') {
        let newSrc = currentSrc.slice(0, -10) + '.svg';
        linkImages[index].setAttribute('src', newSrc);
    }
}
