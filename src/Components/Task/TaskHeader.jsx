import { useState } from "react"
import { HamburgerButton } from "../User/Hamburger"

// export const EmpHeader = ({ handleSwitch, themeSwitch, users, loggedInUser, onLogOut }) => {
export const TaskHeader = ({LoggedEmp,users,onLogOut}) => {

    // const [menuToggle, setMenuToggle] = useState(false)

    // const handleMenuToggle = () => {
    //     setMenuToggle(!menuToggle)
    // }
    
    return (
        <header>

            <div className="topHeader task">

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

                    <div>
                        <HamburgerButton LoggedEmp={LoggedEmp} onLogOut={onLogOut}/>
                    </div>

                </div>
            </div>

            <p className="header-eyebrow">Tasks</p>
            
        </header>
    )
}