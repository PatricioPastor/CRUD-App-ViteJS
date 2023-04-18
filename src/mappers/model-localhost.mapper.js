


export const modelMapperUser = (modelUser) => {

    const { avatar,
        balance,
        firstName,
        gender,
        id,
        isActive,
        lastName } = modelUser

    return {
        avatar,
        balance,
        first_name: firstName,
        gender,
        id,
        isActive,
        last_name: lastName
    }
}