import { buttonNewUser } from "./presentation/button-new-user/button-new-user";
import { renderButtons } from "./presentation/render-buttons/render-buttons";
import { renderModal } from "./presentation/render-modal/render-modal";
import { renderTable } from "./presentation/render-table/render-table"
import userStore from "./store/crud-store"
import { saveUser } from "./use-cases/save-user";




export const usersApp = async( element )=>{
    element.innerHTML = 'Loading...';
    await userStore.loadNextPage();
    
    element.innerHTML = '';

    renderTable(element);
    renderButtons(element);
    buttonNewUser(element);
    renderModal(element, async( userLike )=>{
        const user = await saveUser(userLike);
        
        userStore.onChangeUser(user);
        renderTable(element);
        
    })
}