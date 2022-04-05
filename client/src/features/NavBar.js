import { NavLink } from "react-router-dom";

function NavBar() {
    return(
        <div>
           <NavLink style={{marginRight: "15px"}} to="/"> All My Games</NavLink> 
            <NavLink style={{marginRight: "15px"}} to="/GameCounter">Count Games</NavLink>
            <NavLink style={{ marginRight: "15px"}} to="/GameForm">Add Some Games</NavLink>
            
            
            
        </div>
    )
}

export default NavBar;