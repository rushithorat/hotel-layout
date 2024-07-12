
function handleIconClick(inputId) {
    document.getElementById(inputId).click();
}

function handleFileSelect(event, imageId, inputId) {
    var file = event.target.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var imageElement = document.getElementById(imageId);
            imageElement.src = e.target.result;
            imageElement.style.display = 'block';
            // Hide the icon for home-image1 specifically
            if (inputId === 'fileInput1') {
                var iconElement = document.querySelector('#fileInput1').previousElementSibling;
                iconElement.style.display = 'none';
            }
        };
        reader.readAsDataURL(file);
    }
}


function updateGuestCount() {
    var maxGuestInput = document.getElementById('max-guest');
    var minGuestInput = document.getElementById('min-guest');
    var guestStayInput = document.querySelector('.address-input3');

    var maxGuestValue = maxGuestInput.value.trim();
    var minGuestValue = minGuestInput.value.trim();

    guestStayInput.value = minGuestValue + ' - ' + maxGuestValue +' Guests ';
}

var click1 = document.querySelector('.guest');
var pop1 = document.querySelector('.guest-pop');


click1.addEventListener('click',function(){
    pop1.classList.toggle('gues-pop');
});