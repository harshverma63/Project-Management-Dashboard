import { useState } from "react";
import "./hamburger.css";


// export const HamburgerButton = ({loggedInUser, HRstorage, onLogOut}) => {
export const HamburgerButton = ({LoggedEmp, onLogOut}) => {
  const [open, setOpen] = useState(false);

  
  return (
  <>
    <button
      className={`hamburger ${open ? "active" : ""}`}
      onClick={() => setOpen(!open)}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>


{open && (
    <section className="sideMenuContainer tasks"
    // style={{transform: !open ? "translateX(300px)" : "translateX(0px)"}}
    >
        <div>

          {LoggedEmp &&(
            <ul>
                <li>
                    <figure>
                    <img src={LoggedEmp.image} alt={LoggedEmp.name} />
                    </figure>
                </li>
                <li><p>Hey, <em>{LoggedEmp.name}</em>  </p></li>
                <li><button onClick={onLogOut} className="maps-link">Log Out</button></li>
            </ul>
          )
        }
        </div>
    </section>
)}
    


    </>
  );
};