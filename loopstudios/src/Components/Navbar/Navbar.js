import React from 'react';
import './Navbar.css'




const Navbar = () => {


    return (
        <div className="headerContainer">
            <div className="navParent">
                <div className="logo">
                    <h1><a>loopstudios</a></h1>
                </div>


                <div className="navbar">
                    <ul className="ullist">
                        <li>About</li>
                        <li>Careers</li>
                        <li>Events</li>
                        <li>Products</li>
                        <li>Support</li>
                    </ul>

                </div>
            </div>


            <div class="borderMe">
                <h1> <span className="newLine">IMMERSIVE</span>
                    <span className="newLine">EXPERIENCES </span>
                    <span className="newLine">THAT DELIVER</span></h1>
            </div>
        </div>
    )
}



export default Navbar