import React from 'react'
import '../about/about.css'
import ocean from '../../img/laptop-blue.jpg'

function about() {
    return (
        <div className="about" >
            <div className="about-left">
                <div className="about-card bg">

                </div>
                <div className="about-card">
                    <img src={ocean} alt="" className="about-image" />
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">About me</h1>
                <p className="about-sub">
                    Hardworking, creative and passionate
                </p>
                <p className="about-desc">
                    On this computer science journey I have embarked on, I have pushed myself through all the challenges
                    a computer can throw at you but in all those frustrations I have found my passion and I will never let it go. 
                    From finding my creative side on the frontend to applying my logic to the backend and learing a lot on on the way,
                    this journey that I have started is only the beginnng and there's much more to come.
                </p>
                
                </div>
        </div>
    )
}

export default about
