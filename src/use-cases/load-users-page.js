import { localHostMapperUser } from "../mappers/localhost-mapper"



export const loadUsersPage = async ( page = 1 )=> {
     const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`
     const req = await fetch(url)
     const data = await req.json()

     const users = data.map(user => localHostMapperUser(user))

     return users
}