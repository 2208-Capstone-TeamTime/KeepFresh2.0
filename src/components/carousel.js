import React from "react";
import { Link } from "react-router-dom"


const Carousel = () => {
    return (
        <>
            <div className="wrapper">
                <div className="lil-nav">
                    
                    <img className="lil-nav__img" src="https://i.postimg.cc/D08h0mWr/2.jpg" alt="Yosemite" />
                    <img className="lil-nav__img" src="https://i.postimg.cc/Hs8HCc1H/3.jpg" alt="Houses" />
                    <img className="lil-nav__img" src="https://i.postimg.cc/9Q32Xmc9/4.jpg" alt="Galaxies" />
                    <img className="lil-nav__img" src="https://i.postimg.cc/HnfqLz1m/5.jpg" alt="Motel" />
                    <img className="lil-nav__img" src="https://i.postimg.cc/130k9DCx/6.jpg" alt="Minimalist nightmare" />
                    
                    
                            
                </div>
            </div>
            <div id="get-started">
                <Link to={'/start'}>
                    <button>Get Started</button>
                </Link>
            </div>
        </>
    )
};

export default Carousel;