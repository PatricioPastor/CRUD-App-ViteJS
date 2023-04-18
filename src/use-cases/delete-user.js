


export const deleteUserById= async ( id ) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`
    const req = await fetch(url, {
        method: 'DELETE'
    })

    const deleteUser = await req.json()
    console.log({deleteUser})

    return true

}

