/*--------- Photo Slider ----------*/

const photoSlider = document.querySelector('.productView_photoSlider');
const allPhoto = photoSlider.querySelectorAll('.productView-photo_img');
const btnNextPhoto = photoSlider.querySelector('.sliderPhoto_next');
const btnPrevPhoto = photoSlider.querySelector('.sliderPhoto_prev');


btnNextPhoto.addEventListener('click', showNextPhoto);
btnPrevPhoto.addEventListener('click', showPrevPhoto);

function showPrevPhoto() {
    let arrayPhotoSlider = Array.from(allPhoto);
    let actualPhoto = photoSlider.querySelector('.current_photo');
    n = arrayPhotoSlider.indexOf(actualPhoto);


    if (n > 0) {
        n = n - 1;
    } else {
        n = arrayPhotoSlider.length - 1;
    }


    let newPhotoShow = arrayPhotoSlider[n];

    actualPhoto.classList.remove('current_photo');
    newPhotoShow.classList.add('current_photo');
}

function showNextPhoto() {
    let arrayPhotoSlider = Array.from(allPhoto);
    let actualPhoto = photoSlider.querySelector('.current_photo');
    n = arrayPhotoSlider.indexOf(actualPhoto);


    if (n < (arrayPhotoSlider.length - 1)) {
        n = n + 1;
    } else {
        n = 0;
    }


    let newPhotoShow = arrayPhotoSlider[n];

    actualPhoto.classList.remove('current_photo');
    newPhotoShow.classList.add('current_photo');
}


