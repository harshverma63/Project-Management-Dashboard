import { useState } from "react"
import { setLocalStorage } from "./LocalStorage.jsx"
import { EmpHeader } from "./User/EmpHeader.jsx"
import { DefaultHeader } from "./DefaultHeader.jsx"

export const Login = ({ users, setUserLoggedIn, LoggedEmp, onLogOut, setTaskMangement }) => {

    const [loginValue, setLoginValue] = useState({
        employeeID: "",
        employeePassword: "",
    })

    const handleLogin = (e) => {
        const { name, value } = e.target
        setLoginValue((prev) => ({ ...prev, [name]: value }))
    }

    const handleLoginForm = (e) => {
        e.preventDefault()

        const LoginCheck = (users || []).find((curUser) => {
            return (
                curUser.employeeId === loginValue.employeeID &&
                curUser.password === loginValue.employeePassword
            )
        })

        if (LoginCheck) {
            console.log(`LOGGED IN`);
            setLocalStorage(LoginCheck)
            setUserLoggedIn(true)
        } else {
            alert("Invalid credentials or user data not loaded");
        }
    }

    return (
        <>
            <section className="bodyDarkTheme">
                <div className="container formContainer">
                    
                    <DefaultHeader />

                    <div className="loginForm">
                        <form onSubmit={handleLoginForm}>
                            <h1>Login</h1>
                            <div className="fieldContainer">
                                <input
                                    type="text"
                                    placeholder="Employee ID"
                                    name="employeeID"
                                    value={loginValue.employeeID}
                                    onChange={handleLogin}
                                />

                            </div>
                            <div className="fieldContainer">

                                <input
                                    type="password"
                                    placeholder="Employee Password"
                                    name="employeePassword"
                                    value={loginValue.employeePassword}
                                    onChange={handleLogin}
                                />
                            </div>
                            <div className="formBottomBTN fieldContainer">
                                <button className="maps-link" type="submit">Login</button>
                            </div>
                        </form>
                    </div>

                </div>
            </section>

            {/* <div className="container">
                <ul>
                    {users.map((curUser) => {
                        return (
                            <li key={curUser.id}>{curUser.name}</li>
                        )
                    })}
                </ul>
            </div> */}
        </>
    )
}