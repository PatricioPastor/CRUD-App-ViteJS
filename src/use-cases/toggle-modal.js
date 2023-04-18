


const showModal = ()=> {
    document.querySelector('.modal-main').classList.remove('hide-modal')
    document.querySelector('.span-button').classList.add('close-modal')
}


const hideModal = ()=> {
    document.querySelector('.modal-main').classList.add('hide-modal')
    document.querySelector('.span-button').classList.remove('close-modal')
    document.querySelector('form').reset()
}


export default {
    hideModal,
    showModal
}