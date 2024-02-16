import React from 'react';
import './Footer.css';
import instagram from '../../Images/icon-instagram.svg';
import twitter from '../../Images/icon-twitter.svg';
import pinterest from '../../Images/icon-pinterest.svg';
import facebook from '../../Images/icon-facebook.svg';




const Footer = () => {




    return (
        <div className="footer">
            <div className="leftfooter">

                <div className="Lfoot">
                    <h1>loopstudios</h1>
                </div>

                <div className="leftMenu">
                    <ul className='leftlist'>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Events</li>
                        <li>Products</li>
                        <li>Support</li>

                    </ul>
                </div>

            </div>

            <div className="rightFooter">
                <div className='rightMenu'>
                    <ul>
                        <li><img src={facebook} /></li>
                        <li><img src={twitter} /></li>
                        <li><img src={pinterest} /></li>
                        <li><img src={instagram} /></li>
                    </ul>
                </div>

                <div className="reservered">
                    2021 Loopstudios. All rights reserved.
                </div>

            </div>
        </div>
    )


}



export default Footer