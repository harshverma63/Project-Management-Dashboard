import { TaskHeader } from "./TaskHeader"
import TaskData from './Task.json'
import { useEffect, useState } from "react"
import './task.css'
import { TaskList } from "./TaskList"
import { TaskPopUp } from "./TaskPopUp"
import { Filters } from "./Filters"

export const TaskManager = ({ LoggedEmp, users, onLogOut }) => {

    const [tasks, setTasks] = useState([])
    const [isPopUp, setIsPopUp] = useState(false)
    const [popUpContent, setPopUpContent] = useState('')
    const [assignTo, setassignTo] = useState(false)
    const [assignSearch, setAssignSearch] = useState('')

    const [taskSearch, setTaskSearch] = useState('')
    const [status, setStatus] = useState('All')
    const [statusField, setStatusField] = useState(false)
    const [priorityField, setPriorityField] = useState(false)
    const [priorities, setPriorities] = useState('All')
    const [showOnlyMyTasks, setShowOnlyMyTasks] = useState(false)


    // const TaskApi = "https://raw.githubusercontent.com/harshverma63/APIs/refs/heads/main/Tasks/Tasks2.json"
    const TaskApi = "https://raw.githubusercontent.com/harshverma63/APIs/refs/heads/main/Tasks/Tasks1000%2B/Tasks1000.json"
    
    const taskFetch = async() =>{
        try {
            const res = await fetch(TaskApi)
            const data = await res.json()
            setTasks(data.tasks)
            // console.log(tasks);
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        taskFetch()
    }, [])

    const handleTaskPopUp = (value) => {
        setIsPopUp(true)
        setPopUpContent(value)
    }
    const handlePopUpClose = () => {
        setIsPopUp(false)
    }

    const formatedDateTime = (isoString) => {
        const date = new Date(isoString)

        const formatedDate = date.toISOString().slice(0, 10)
        const formatedTime = date.toISOString().slice(11, 16)

        return `${formatedDate} | ${formatedTime}`
    }

    const handleAssignTo = () => {
        setassignTo(true)
    }

    const SearchAssign = (users || []).filter((curUserSearch) => {
        return (
            curUserSearch.name.toLowerCase().includes(assignSearch.toLowerCase())
        )
    })

    const handleAssignment = (user) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === popUpContent.id) {
                return { ...task, assignedTo: user }
            }
            return task;
        })
        setTasks(updatedTasks)
        setPopUpContent({ ...popUpContent, assignedTo: user })
        setassignTo(false)
        setAssignSearch('')
    }

    const filterTask = tasks.filter((curTask) => {
        const matchesSearch = curTask.subject?.toLowerCase().includes(taskSearch.toLowerCase())

        const matchesStatus = status === 'All' || curTask.status.includes(status)

        const matchespriorities = priorities === 'All' || curTask.priority.includes(priorities)

        const myTaskMatch = !showOnlyMyTasks || curTask.assignedTo.employeeId.includes(LoggedEmp.employeeId)

        return matchesSearch && matchesStatus && matchespriorities && myTaskMatch
    })



    return (
        <>
            {/* // <section className={!themeSwitch ? "bodyDarkTheme" : "bodyLightTheme"}> */}
            <section className="bodyDarkTheme">

                <div className="EMP container">

                    <TaskHeader LoggedEmp={LoggedEmp} users={users} onLogOut={onLogOut} />

                    <Filters taskSearch={taskSearch} showOnlyMyTasks={showOnlyMyTasks} statusField={statusField} TaskData={TaskData} priorityField={priorityField} priorities={priorities} setShowOnlyMyTasks={setShowOnlyMyTasks} setStatusField={setStatusField} setStatus={setStatus} setPriorityField={setPriorityField} setPriorities={setPriorities} setTaskSearch={setTaskSearch} status={status} LoggedEmp={LoggedEmp}/>

                    <TaskList tasks={filterTask} handleTaskPopUp={handleTaskPopUp} LoggedEmp={LoggedEmp} showOnlyMyTasks={showOnlyMyTasks}/>



                </div>

            </section >

            {isPopUp && (
                <TaskPopUp setAssignSearch={setAssignSearch} popUpContent={popUpContent} handlePopUpClose={handlePopUpClose} formatedDateTime={formatedDateTime} assignTo={assignTo} handleAssignTo={handleAssignTo} assignSearch={assignSearch} SearchAssign={SearchAssign} handleAssignment={handleAssignment} LoggedEmp={LoggedEmp}/>
            )}

        </>
    )
}
