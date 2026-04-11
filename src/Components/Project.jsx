import { useEffect, useState } from 'react'
import './ProjectUser.css'
// import './Task/task.css'

import TeamData from "./TeamAPI.json";
import { Login } from './Login'
import { getLocalStorage } from './LocalStorage'
import { LoggedUser } from './User/LoggedUser.jsx'
import { EmpHeader } from './User/EmpHeader.jsx'
import { TaskManager } from './Task/TaskManager.jsx';
import { StartingPopUp } from './StartingPopUp.jsx';

export const Projects = () => {

    const [users, setUsers] = useState([])
    const [userLoggedIn, setUserLoggedIn] = useState(false)
    const [LoggedEmp, setLoggedEmp] = useState(() => getLocalStorage())
    const [taskMangement, setTaskMangement] = useState(false)
    const [startingPopUp, setStartingPopUp] = useState(true)

    // console.log(`TASK: ${taskMangement}`);


    // const UserAPI = "https://raw.githubusercontent.com/harshverma63/APIs/refs/heads/main/Employees/employees5.json"
    const UserAPI = "https://raw.githubusercontent.com/harshverma63/APIs/refs/heads/main/Employees/Employees500%2B/Employees500.json"

    // URL FETCH
    const fetchUser = async () => {
        try {
            const res = await fetch(UserAPI)
            const data = await res.json()
            setUsers(data)
            // console.log(users);
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        fetchUser()
    }, [])

    // LOCAL FETCH
    // useEffect(() => {
    //     setUsers(TeamData)
    // }, [])

    const onLogOut = () => {
        localStorage.clear()
        setLoggedEmp(null)
        setUserLoggedIn(false)
        setTaskMangement(false)
    }

    const handleLoginSuccess = () => {
        setLoggedEmp(getLocalStorage()) // sync state with what Login.jsx just wrote
        setUserLoggedIn(true)
    }

    // console.log(`Logged In ${userLoggedIn}`);

    if (LoggedEmp && taskMangement) {
        return (
            <TaskManager LoggedEmp={LoggedEmp} users={users} onLogOut={onLogOut}/>
        )
    }
    

    if (!userLoggedIn && !LoggedEmp & startingPopUp) {
    return(
        <StartingPopUp setStartingPopUp={setStartingPopUp}/>
    )
    }

    if (!userLoggedIn && !LoggedEmp && !startingPopUp) {
        return (
            <Login users={users} setUserLoggedIn={handleLoginSuccess} LoggedEmp={LoggedEmp} onLogOut={onLogOut} setTaskMangement={setTaskMangement}/>
        )
    } else {
        return (
            <LoggedUser LoggedEmp={LoggedEmp} users={users} onLogOut={onLogOut} setTaskMangement={setTaskMangement} />
        )
    }
    



    return (
        <>
        
        </>
    )
}
