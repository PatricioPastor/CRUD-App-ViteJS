
import { loadUsersPage } from "../use-cases/load-users-page"

const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async() => {
    
    const users = await loadUsersPage(state.currentPage + 1)
    if (users.length === 0) return

    state.currentPage+=1
    state.users = users
    
}

const loadPreviousPage = async() => {

    if (state.currentPage === 1) return
    const users = await loadUsersPage(state.currentPage - 1)
    state.currentPage-=1
    state.users = users
}

const reloadPage = () => {
    throw new Error('Not Implemented')
}

const loadUsers = ()=>{
    throw new Error('Not Implemented')
}

const onChangeUser = ()=>{
    throw new Error('Not Implemented')
}



export default {
    loadNextPage,
    loadPreviousPage,
    loadUsers,
    onChangeUser,
    reloadPage,

    getUsers: () => [...state.users],
    getCurrentPage: () => state.currentPage
}