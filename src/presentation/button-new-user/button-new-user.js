import './button-new-user.css'
import buttonFunctions from '../../use-cases/toggle-modal'






export const buttonNewUser = (element) => {
    const newUser = document.createElement('button');
    newUser.id = ('new-user')
    newUser.innerHTML = `<span class="span-button">➕</span>`
    element.append(newUser)
    
    newUser.addEventListener('click', () => {
        document.querySelector('.modal-main').classList.toggle('hide-modal')
        document.querySelector('.span-button').classList.toggle('close-modal')
        document.querySelector('form').reset()
    })



}