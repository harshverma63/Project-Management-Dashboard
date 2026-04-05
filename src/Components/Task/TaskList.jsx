
export const TaskList = ({ LoggedEmp, StatusChange, tasks, handleTaskPopUp }) => {


    return (
        <>
        
            <ul className={`pokemon-card taskMainContainer EMP card-memo EMPcard-memo ${!tasks?.length > 0 ? "allS" : "allH"}`}>
                {tasks?.length > 0 ? (
                    tasks.map((curTask) => (
                        
                        <li
                            className="taskItemContainer "
                            key={curTask.id}
                            onClick={() => handleTaskPopUp(curTask)}
                        >
                            <div className="taskItemTop">
                                <h2 className="taskSubject">{curTask.subject}</h2>

                                <p className="dueDate">{curTask.dueDateDate} | {curTask.dueDateTime}</p>
                            </div>

                            <div className="taskItemBottom">
                                <p className="taskDescription">
                                    {curTask.description.length > 75
                                        ? curTask.description.slice(0, 75) + "..."
                                        : curTask.description}
                                </p>

                                <div className="assignedInfo">

                                    {/* <span>Assigned To:</span> */}
                                    <span className="assignedIMG"><img src={curTask.assignedTo.image} alt={curTask.assignedTo.name} /></span>
                                    <span>{curTask.assignedTo.name}</span>

                                </div>
                            </div>
                        </li>
                    )))
                     :
                         (
                            <div className="noTaskFound">
                         <h2 className="taskSubject">No Task Found</h2>
                         </div>
                )}
                
            </ul>
        </>

    )
}