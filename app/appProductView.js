const otherInfo = document.querySelector('.productView_otherInfo');
const btnMenu = otherInfo.querySelectorAll('[data-menu]');
const allBtnReviews = document.querySelectorAll('.productView-review_link');


/*---------- OtherInfo Product Menu ----------*/

btnMenu.forEach(item => {
    item.addEventListener('click', event => {

        let currentBtn = otherInfo.querySelector('.otherInfo-block_active');
        let currentMenu = otherInfo.querySelector('.otherInfo-current_block');

        currentBtn.classList.remove('otherInfo-block_active');
        currentMenu.classList.remove('otherInfo-current_block');

        let activeBtn = event.currentTarget;
        let menuId = activeBtn.getAttribute('data-menu');
        let activeMenu = document.getElementById(menuId);

        activeBtn.classList.add('otherInfo-block_active');
        activeMenu.classList.add('otherInfo-current_block');
    })
})


/*---------- Btns for Reviews ----------*/

allBtnReviews.forEach(btnReviews => {
    btnReviews.addEventListener('click', event => {

        let currentBtn = otherInfo.querySelector('.otherInfo-block_active');
        let currentMenu = otherInfo.querySelector('.otherInfo-current_block');

        currentBtn.classList.remove('otherInfo-block_active');
        currentMenu.classList.remove('otherInfo-current_block');

        let activeBtn = otherInfo.querySelector('[data-menu="reviews"]');
        let activeMenu = document.getElementById("reviews");

        activeBtn.classList.add('otherInfo-block_active');
        activeMenu.classList.add('otherInfo-current_block');
    })
})

