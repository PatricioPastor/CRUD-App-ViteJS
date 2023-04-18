import { localHostMapperUser } from "../mappers/localhost-mapper"






export const getUserById = async ( id )=> {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`
    const req = await fetch(url)
    const data = await req.json()


    const user = localHostMapperUser(data)
    return user

}

