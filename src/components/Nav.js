import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';



function Nav() {
    const navStyle = {
        color: "white"
    }


    return(
        <div className="nav">
            <ul className="nav-links">
                <Link style={navStyle} to="/" ><li>Events</li></Link>
                <Link style={navStyle} to="/history" ><li>History</li></Link>
                <Link style={navStyle} to="/people"><li>People</li></Link>
                <Link style={navStyle} to="/culture"><li>Culture</li></Link>
                <Link style={navStyle} to="/gallery"><li>Gallery</li></Link>
                <Link style={navStyle} to="/diaspora"><li>Diaspora Journal</li></Link>
            </ul>
        </div>
    )
}


export default Nav;