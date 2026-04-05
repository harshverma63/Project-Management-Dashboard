
export const Filters = ({ taskSearch, showOnlyMyTasks, statusField, TaskData, priorityField, priorities, setShowOnlyMyTasks, setStatusField, setStatus, setPriorityField, setPriorities, setTaskSearch, status, LoggedEmp }) => {

    return (
        <>
            <div className="Filters">
                <div className="searchContainer">
                    <input type="text"
                        placeholder="Live Search..."
                        value={taskSearch}
                        onChange={(e) => setTaskSearch(e.target.value)} />
                </div>

                <div className="filter">

                    {!(LoggedEmp.employeeId === 'PM0001') && (
                        <div className="filterItem myTask" onClick={() => setShowOnlyMyTasks(!showOnlyMyTasks)}>
                            <span >{!showOnlyMyTasks ? "My Tasks" : "All Tasks"}</span>
                        </div>
                    )}


                    <div className="filterItem status" onClick={(e) => setStatusField(true)}>
                        <span >Status</span>
                        <select className={statusField ? "status" : "none"}
                            name="statusFilter"
                            value={status}
                            onChange={(e) => setStatus(e.target.value) + setStatusField(!statusField)}>
                            <option value="All">ALL</option>
                            {TaskData.meta.statuses.map((statuses, index) => {
                                return (
                                    <option key={index} value={statuses}>{statuses.toUpperCase()}</option>
                                )
                            })}
                        </select>
                    </div>

                    <div className="filterItem priority" onClick={(e) => setPriorityField(true)}>
                        <span >Priority</span>
                        <select className={priorityField ? "priority" : "none"}
                            name="priorities"
                            value={priorities}
                            onChange={(e) => setPriorities(e.target.value)}>
                            <option value="All">ALL</option>
                            {TaskData.meta.priorities.map((priority, index) => {
                                return (
                                    <option key={index} value={priority}>{priority.toUpperCase()}</option>
                                )
                            })}
                        </select>
                    </div>


                </div>
            </div>
        </>
    )
}