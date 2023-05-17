import React from 'react'
import "./Home.css"
import avti from '../../Assets/Image/avti.png'
function Home() {
    return (
        <div>
            <div className='home'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 img'><img src={avti} alt='avti logo' className='avatar' /></div>
                        <div className='col-md-6'><div className='text'><h1>Hi,I am ARAVINDH</h1>  </div>
                            <div className='cont'>Highly motivated and enthusiastic Full Stack Developer with experience in designing, developing and maintaining web applications using technologies such as JavaScript, React, Node.js, Express-js and databases such as SQL MongoDB.</div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Home