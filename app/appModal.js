/*--------- Modal Window Privacy ----------*/

const body = document.querySelector('body');

const bgModal = body.querySelector('.modal');
const windowModal = body.querySelector('.modal_privacy');
const btnShowPrivacy = body.querySelector('.btn_showPrivacy');
const btnClosePrivacy = body.querySelector('.modal_close');


btnShowPrivacy.addEventListener('click', event => {
    body.classList.add('no_scroll');
    bgModal.classList.add('bg-modal_show');
    windowModal.classList.add('window-modal_show');

    windowModal.addEventListener('click', event => {
        event.stopPropagation();
    })
})

btnClosePrivacy.addEventListener('click', event => {
    body.classList.remove('no_scroll');
    bgModal.classList.remove('bg-modal_show');
    windowModal.classList.remove('window-modal_show');
})

bgModal.addEventListener('click', event => {
    body.classList.remove('no_scroll');
    bgModal.classList.remove('bg-modal_show');
    windowModal.classList.remove('window-modal_show');
})


