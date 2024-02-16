import React from 'react';
import './Content.css';
import interActiveImg from '../../Images/image-interactive.jpg';
import imageEarth from '../../Images/image-deep-earth.jpg';
import nightArcade from '../../Images/image-night-arcade.jpg';
import soccer from '../../Images/image-soccer-team.jpg';
import grid from '../../Images/image-grid.jpg';
import fromabove from '../../Images/image-from-above.jpg';
import pocketBorealis from '../../Images/image-pocket-borealis.jpg';
import fisheye from '../../Images/image-fisheye.jpg';
import curosity from '../../Images/image-curiosity.jpg';


const Content = () => {




    return (
        <>
            <div className="content">
                <div className="upperContent">

                    <div class="img">

                        <img src={interActiveImg} alt='virtual-reality' />

                    </div>

                    <div className="contentText">
                        <h1> THE LEADER IN <span class="newLine"></span> INTERACTIVE VR</h1>


                        <p className="paraContent " >
                            Founded in 2011, Loopstudios has been producing world-class <span className="newLine"></span> virtual reality projects
                            for some of the  best companies around the <span className="newLine"></span>globe.Our award-winning creations have transformed <span className="newLine"></span>
                            businesses through digital experiences that bind to their brand.
                        </p>

                    </div>

                </div>

                <div className="galleryContent">
                    <div className='topsubContent'>
                        <h1>OUR CREATIONS</h1>


                        <button className="topSubheader">
                            SEE ALL
                        </button>
                    </div>


                    <div className="gallery">
                        <div className="img1">
                            <img src={imageEarth} />
                        </div>
                        <div className="img2">
                            <img src={nightArcade} />
                        </div>
                        <div className="img3">
                            <img src={soccer} />
                        </div>
                        <div className="img4">
                            <img src={grid} />
                        </div>
                        <div className="img5">
                            <img src={fromabove} />
                        </div>
                        <div className="img6">
                            <img src={pocketBorealis} />
                        </div>
                        <div className="img7">
                            <img src={curosity} />
                        </div>
                        <div className="img8">
                            <img src={fisheye} />
                        </div>


                    </div>

                </div>
            </div>
        </>
    )
}



export default Content