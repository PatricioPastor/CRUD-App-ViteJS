import './render-modal.css'
import HTMLModal from './render-modal.html?raw'
import toggleModal from '../../use-cases/toggle-modal'
import { getUserById } from '../../use-cases/get-user-by-id'

let modal 
let form 
let loadedUser = {}

export const changeUser = async ( id )=>{
    
    toggleModal.showModal()

    loadedUser = {}

    if (!id) return

    const user = await getUserById( id )

    setFormValuesUser(user)
}

//! Set form values 

const setFormValuesUser = ( user )=>{

    form.querySelector('[name="firstName"]').value = user.firstName
    form.querySelector('[name="lastName"]').value = user.lastName
    form.querySelector('[name="balance"]').value = user.balance
    form.querySelector('[name="isActive"]').checked = user.isActive
    
    loadedUser = user

}



//! Render modal with empty form



export const renderModal = ( element, callback )=>{

    if ( modal ) return 
    modal = document.createElement('div')
    modal.innerHTML = HTMLModal
    modal.className = 'modal-main hide-modal'
    
    modal.addEventListener('click', (event)=>{
        if (event.target.className === 'modal-main'){
            toggleModal.hideModal()
        }
    })

    element.append(modal)

    //!Form Event
    if ( !form ) form = modal.querySelector('form')
    
    form.addEventListener('submit',async (event)=>{
        event.preventDefault()

        const data = new FormData( form )
        const userLike = {...loadedUser}

        for (const [key, value] of data) {
            if (key === 'balance'){
                userLike[key] = +value
                continue
            }

            if (key === 'isActive') {
                userLike[key] = (value === 'on') ? true : false
                continue
            }
            
            userLike[key] = value
        }
        await callback(userLike)

        form?.reset()
    })
}