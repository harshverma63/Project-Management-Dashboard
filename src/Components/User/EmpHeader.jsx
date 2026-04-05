import { useState } from "react"
import { HamburgerButton } from "./Hamburger.jsx"

// export const EmpHeader = ({ handleSwitch, themeSwitch, users, loggedInUser, onLogOut }) => {
export const EmpHeader = ({LoggedEmp, users, onLogOut, setTaskMangement}) => {

    // const [menuToggle, setMenuToggle] = useState(false)

    // const handleMenuToggle = () => {
    //     setMenuToggle(!menuToggle)
    // }

    const handleTaskManegmentPortal = () => {
        setTaskMangement(true)
    }
    
    return (
        <header>

            <div className="topHeader">

                <div className="mainLgo">
                <p>Nexora <em>~ Build What’s Next</em>  </p>

                </div>

                <div className="EMP headerRight">

                    {/* <div className="themeSwitcher">
                        <button onClick={handleSwitch}>
                            <span
                                style={{
                                    backgroundColor: !themeSwitch ? "#111827" : "#e3ddd1",
                                    transform: !themeSwitch ? "translateX(0px)" : "translateX(26px)"
                                }}
                                className="switcher">
                            </span>
                        </button>
                       
                    </div> */}

                    <div className="ProjectBTNContainer">
                        <button className="EMP maps-link" onClick={handleTaskManegmentPortal}>Task Management</button>
                    </div>

                    <div>
                        {/* <HamburgerButton handleMenuToggle={handleMenuToggle} loggedInUser={loggedInUser} onLogOut={onLogOut}/> */}
                        <HamburgerButton LoggedEmp={LoggedEmp} onLogOut={onLogOut}/>
                    </div>

                </div>
            </div>

            <p className="header-eyebrow">Profile</p>
            <h1>Hey, <em>{LoggedEmp.name}</em>  </h1>
            <p className="header-subtitle">
                We have {users.length}+ members across the organization
            </p>
        </header>
    )
}