import './task.css'

export const TaskPopUp = ({ popUpContent, handlePopUpClose, formatedDateTime, assignTo, handleAssignTo, assignSearch, SearchAssign, handleAssignment, setAssignSearch, LoggedEmp }) => {

    return (
        <>
            <section className="taskPopUp">
                <div className="taskPopUpOverlay">
                    <div className="taskPopUpContainer">
                        <div className="popUpTop">
                            <h2 className="taskSubject">{popUpContent.subject}</h2>
                            <button className="TaskPopUpCloseBTN maps-link" onClick={handlePopUpClose}>X</button>
                        </div>

                        <div className="popUpInfo mt-10">
                            <div className="popUpRight">
                                <p className="taskDescription">{popUpContent.description}</p>

                                <br /><br />
                                <div className="commentContainer">
                                    <h3>Comments</h3>
                                    <div className="commentBox">
                                        {popUpContent.comments && popUpContent.comments.length > 0 ?
                                            popUpContent.comments.map((comment, index) => {
                                                return (<>
                                                    <div key={index} className="comentInfo">
                                                        <p className="commentDescription">{comment.text}</p>
                                                        <p className="commentDetails">
                                                            <span className="commentAuthorContainer">
                                                                <span className="commentAuthorIMG">
                                                                    <img src="https://mockmind-api.uifaces.co/content/human/103.jpg" alt="" />
                                                                </span>

                                                                {comment.author}
                                                            </span>
                                                            <span>{formatedDateTime(comment.timestamp)}</span>
                                                        </p>
                                                    </div>
                                                </>
                                                )
                                            })
                                            :
                                            <p>No Comment Yet</p>
                                        }
                                    </div>
                                </div>

                            </div>

                            <div className="popUpLeft">
                                <div className="popUpOwnerInfos">
                                <p className="taskSubject">Due Date: {popUpContent.dueDateDate} | {popUpContent.dueDateTime}</p>
                                <p>Required Hours: {popUpContent.requiredHours}</p>
                                <p>Status: {popUpContent.status}</p>
                                <p>Priority: {popUpContent.priority}</p>
                                <p>Progress: {popUpContent.progress}% </p>
                                <p>Received On: {formatedDateTime(popUpContent.arrivalTime)}</p>
                                </div>
                                <div className="popUpOwner">
                                    <div className="ownerIMG mb15">
                                        <figure>
                                            <img
                                                src={popUpContent.assignedTo.image}
                                                alt={popUpContent.assignedTo.name} />
                                        </figure>
                                    </div>
                                    <h3 className="mb15">{popUpContent.assignedTo.name}</h3>
                                    <p className="mb15">{popUpContent.assignedTo.designation}</p>

                                    {LoggedEmp.employeeId === 'PM0001' && (
                                        <div className='ownerSearch'>
                                            {!assignTo ?
                                                <button className="maps-link" onClick={handleAssignTo}>Assign To</button>
                                                :
                                                <input type="text"
                                                    value={assignSearch}
                                                    onChange={(e) => setAssignSearch(e.target.value)}
                                                    placeholder="Search users..." />
                                            }
                                            {assignTo && (
                                                <div className="changeAssignTask">

                                                    {SearchAssign.length >= 1
                                                        ?
                                                        <ul className="userList">
                                                            {SearchAssign.map((curUser) => {
                                                                return (
                                                                    <li
                                                                        key={curUser.id}
                                                                        onClick={() => handleAssignment(curUser)}
                                                                    >
                                                                        {curUser.name}
                                                                    </li>
                                                                )
                                                            })
                                                            }
                                                        </ul>
                                                        :
                                                        null}
                                                </div>
                                            )}
                                        </div>
                                    )}


                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}