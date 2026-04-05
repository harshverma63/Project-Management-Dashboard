import {EmpHeader} from './EmpHeader'

// export const LoggedUser = ({ themeSwitch, handleSwitch, users, handleTeamPopUp, isPopUpOpen, handlePopUpClose, popUpData, LoggedEmp, onLogOut }) => {
export const LoggedUser = ({ LoggedEmp,users,onLogOut,setTaskMangement}) => {
    
    // const mapsUrl = `https://www.google.com/maps?q=${LoggedEmp.address.geo.lat},${LoggedEmp.address.geo.lng}`;


    return (
        // <section className={!themeSwitch ? "bodyDarkTheme" : "bodyLightTheme"}>
        <section className="bodyDarkTheme">

            <div className="EMP container">

                {/* <EmpHeader onLogOut={onLogOut} LoggedEmp={LoggedEmp} handleSwitch={handleSwitch} themeSwitch={themeSwitch} users={users}/> */}
                
                <EmpHeader LoggedEmp={LoggedEmp} users={users} onLogOut={onLogOut} setTaskMangement={setTaskMangement}/>


                {/* Employee Cards */}
                {/* <ul className="EMP card-memo EMPcard-memo"> */}
                <ul className="">

                    <li key={LoggedEmp.id} className="EMP pokemon-card" >

                        <div className="EMP card-avatar-zone">
                            <figure>
                                <img src={LoggedEmp.image} alt={LoggedEmp.name} />
                            </figure>
                        </div>


                        <div className="EMP card-body card-memo">
                            <h2 className="EMP userName">{LoggedEmp.name}</h2>


                            <div className="EMP EMPinfo-list ">
                                <div className="EMP info-row">
                                    <span className="EMP info-icon">✉</span>
                                    <a href={`mailto:${LoggedEmp.employeeId}`}>{LoggedEmp.employeeId}</a>
                                </div>
                                <div className="EMP info-row">
                                    <span className="EMP info-icon">✉</span>
                                    <a href={`mailto:${LoggedEmp.email}`}>{LoggedEmp.email}</a>
                                </div>
                                <div className="EMP info-row">
                                    <span className="EMP info-icon">☏</span>
                                    <a href={`tel:${LoggedEmp.phone}`}>{LoggedEmp.phone}</a>
                                </div>


                                <div className="EMP info-row">
                                    <span className="EMP info-icon">☏</span>
                                    <p className="EMP salary-block">
                                        Designation: {LoggedEmp.designation}
                                    </p>
                                </div>
                                <div className="EMP info-row">
                                    <span className="EMP info-icon">☏</span>
                                    <p className="EMP salary-block">
                                        Department: {LoggedEmp.department}
                                    </p>
                                </div>

                                {LoggedEmp.isManager && (
                                    <div className="EMP info-row">
                                        <span className="EMP info-icon">☏</span>
                                        <p className="EMP salary-block">
                                            {`Team Size: ${LoggedEmp.teamSize}`}
                                        </p>
                                    </div>
                                )}


                                <div className="EMP info-row">
                                    <span className="EMP info-icon">☏</span>
                                    <p className="EMP salary-block">
                                        Salary: ${LoggedEmp.salary} PM
                                    </p>
                                </div>

                                <div className="EMP info-row">
                                    <span className="EMP info-icon">⊕</span>
                                    <p>
                                        Employment Type: {LoggedEmp.employmentType}
                                    </p>
                                </div>

                                <div className="EMP info-row">
                                    <span className="EMP info-icon">⊕</span>
                                    <p>
                                    Joining Date: {LoggedEmp.joinDate}
                                    </p>
                                </div>

                                {/* {LoggedEmp.isManager && (
                            <div className="EMP info-row">
                                <span className="EMP info-icon info-icon-temMember">⊕ </span>
                                <p>Team:</p>
                                <button className='maps-link' onClick={() => handleTeamPopUp(LoggedEmp.teamMembers)}>Click Here</button>
                            </div>
                        )} */}

                                <div className="EMP info-row">
                                    <span className="EMP info-icon">⊕</span>
                                    <a
                                        href={`https://${LoggedEmp.website}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {LoggedEmp.website}
                                    </a>
                                </div>

                            </div>




                            <div className="EMP card-divider" />

                            <div className="EMP footerAddress">
                            <p className="EMP address-block">
                                {LoggedEmp.address.suite}, {LoggedEmp.address.street},&nbsp;
                                {LoggedEmp.address.city} — {LoggedEmp.address.zipcode}
                            </p>

                            {/* <a
                                href={mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="EMP maps-link"
                            >
                                <span>View on Maps</span>
                                <span className="EMP maps-link-arrow">→</span>
                            </a> */}
                            </div>
                        </div>
                    </li>
                </ul>


                {/* POP Up */}
                {/* <UserTeamPopUp isPopUpOpen={isPopUpOpen} handlePopUpClose={handlePopUpClose} popUpData={popUpData} /> */}

            </div>

        </section >
    )
}