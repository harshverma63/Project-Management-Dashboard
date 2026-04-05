
export const StartingPopUp = ({setStartingPopUp}) => {

    const handleStartingPopUpClose = () =>{
        setStartingPopUp(false)
    }

    return (
        <div class="popUpOverlay">
            <div className="highlightedName">
                <p className="main">Nexora</p>
                <p className="sub"><em>~ Build What’s Next</em></p>
            </div>
            <div class="startingPopUpMainContainer popUpContainer">
                <div class="popUpCloseBTN">
                    <button onClick={handleStartingPopUpClose} class="maps-link">X</button>
                </div>

                <div class="startingPopUpContainer">
                    <h3>Welcome, Please Check the below readme file for credentials, thankyou!</h3>
                    <a class="maps-link" href="https://raw.githubusercontent.com/harshverma63/emp-hr-dashboard-react/refs/heads/main/README.md" target="_blank">Read Me</a>
                </div>
            </div>
        </div>
    )
}