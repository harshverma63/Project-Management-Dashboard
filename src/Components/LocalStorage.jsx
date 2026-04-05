const storageKey = "LoggedInUser"

export const setLocalStorage = (LoginCheck) => {
    localStorage.setItem(storageKey, JSON.stringify(LoginCheck))
}

export const getLocalStorage = () => {
    const rawData = localStorage.getItem(storageKey)
    if(!rawData) return null
    return JSON.parse(rawData)
}


// export const setTaskManagementStorage = () =>{
//     localStorage.setItem()
// }