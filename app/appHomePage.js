/*---------- Main Menu ----------*/

const main = document.querySelector('.main');
const btnMenu = main.querySelectorAll('[data-menu]');

btnMenu.forEach(item => {
    item.addEventListener('click', event => {

        let currentMenu = main.querySelector('.block_show');
        let currentBtn = main.querySelector('.block_active');

        currentBtn.classList.remove('block_active');
        currentMenu.classList.remove('block_show');

        let activeBtn = event.currentTarget;
        let menuId = activeBtn.getAttribute('data-menu');
        let activeMenu = document.getElementById(menuId);

        activeBtn.classList.add('block_active');
        activeMenu.classList.add('block_show');
    })
})


/*---------- Main Card Photo ----------*/

const allMenu = document.querySelector('.main_menu');
const allPhotoBtns = allMenu.querySelectorAll('.card-photo_min');

allPhotoBtns.forEach(photoBtn => {
    photoBtn.addEventListener('click', event => {
        let activePhotoBtn = event.currentTarget;
        let currentCard = photoBtn.closest(".product_card");

        let allCardBtns = currentCard.querySelectorAll('.card-photo_min');
        let arrayBtns = Array.from(allCardBtns);
        let n = arrayBtns.indexOf(activePhotoBtn);

        let allPhotoCard = currentCard.querySelectorAll('.product-card_img');
        let arrayPhoto = Array.from(allPhotoCard);
        let photoShow = arrayPhoto[n];
        
        let activePhoto = currentCard.querySelector('.product-img_view');

        activePhoto.classList.remove('product-img_view');
        photoShow.classList.add('product-img_view');
    })
})

