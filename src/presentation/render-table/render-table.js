import './render-table.css'
import crudStore from '../../store/crud-store';
import { changeUser } from '../render-modal/render-modal';
import { deleteUserById } from '../../use-cases/delete-user';


let table;

const createTable = () => {

    const tableUsers = document.createElement('table');
    const tableHead = document.createElement('thead');

    tableUsers.appendChild(tableHead);
    tableHead.innerHTML = `
        <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Balance</th>
            <th>Is Active</th>
            <th>Actions</th>
        </tr>
    `
    const tableBody = document.createElement('tbody')
    tableUsers.append(tableHead, tableBody);

    return tableUsers;

}

const tableSelectListener = (event) => {
    const element = event.target.closest('.select-user')
    if(!element)return
    const id = element.getAttribute('data-id')
    
    changeUser(id)


}

const tableDeleteUser = async (event) => {
    const element = event.target.closest('.delete-user')
    if(!element) return 
    const id = element.getAttribute('data-id')
    try{
        await deleteUserById(id);
        await crudStore.reloadPage(); 
        document.querySelector('#current-page').innerText = crudStore.getCurrentPage();
        renderTable()
    }catch(error){
        console.log(error)
        alert(error)
    }

}


export const renderTable = (element) => {

    const users = crudStore.getUsers();
    
    if (!table) {
        table = createTable()
        element.appendChild(table)

        table.addEventListener('click', tableSelectListener)
        table.addEventListener('click', tableDeleteUser)
    }



    let tableUsersHTML = ''

    users.forEach(user => {

        tableUsersHTML+= `
            <tr>
                <td>${user.id}</td>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.balance}</td>
                <td>${(user.isActive) ? "🟢" : "🔴" }</td>
                <td>
                    <a href="#" class="select-user" data-id="${user.id}">Change</a>
                    |
                    <a href="#" class="delete-user" data-id="${user.id}">Delete</a>
                </td>
            </tr>
            `

    })
    table.querySelector('tbody').innerHTML = tableUsersHTML;
}


