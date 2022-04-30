/*---------- Local Stores Info -----------*/

const allBtnLocalStores = document.querySelectorAll('[data-store]');

allBtnLocalStores.forEach(btnLocalStores => {
    btnLocalStores.addEventListener('click', event => {
        let activeBtn = event.currentTarget;
        let localStoresId = activeBtn.getAttribute('data-store');
        let activeLocalStoreInfo = document.getElementById(localStoresId);
        let actualStoreInfo = document.querySelector('.localStores-info_show');

        actualStoreInfo.classList.remove('localStores-info_show');
        activeLocalStoreInfo.classList.add('localStores-info_show');
    })
})


