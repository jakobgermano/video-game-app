import { NavLink } from "react-router-dom";

function NavBar() {
    return(
        <div>
           <NavLink style={{marginRight: "15px"}} to="/"> All My Games</NavLink> 
             <NavLink style={{marginRight: "15px"}} to="/About">About</NavLink>
             <NavLink style={{ marginRight: "15px"}} to="/GameForm">Add Some Foods</NavLink>
            
        </div>
    )
}

export default NavBar;