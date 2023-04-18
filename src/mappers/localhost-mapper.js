
import { User } from "../models/user-models"


export const localHostMapperUser = (localHostNewUser) => {

    const { avatar,
        balance,
        first_name,
        gender,
        id,
        isActive,
        last_name } = localHostNewUser

    return new User({
        avatar,
        balance,
        firstName: first_name,
        gender,
        id,
        isActive,
        lastName: last_name
    })
}