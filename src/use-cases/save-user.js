import { localHostMapperUser } from "../mappers/localhost-mapper"
import { modelMapperUser } from "../mappers/model-localhost.mapper"
import { User } from "../models/user-models"






export const saveUser = async (likeUser) => {



    const user = new User(likeUser)

    if (!user.firstName || !user.lastName) throw new Error('First name and last name is required')


    const userMapped = modelMapperUser(user)

    let userReady 

    if (user.id) {
       userReady = await updatedUser(userMapped)
    } else {
        userReady = await createUser(userMapped)
    }

    return localHostMapperUser(userReady)
    
}


const createUser = async (user) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users`
    const req = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        },

    })

    const newUser = await req.json(user)

    return newUser

}


export const updatedUser = async (user) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${user.id}`
    const req = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        },

    })

    const updatedUser = await req.json(user)

    return updatedUser

}


