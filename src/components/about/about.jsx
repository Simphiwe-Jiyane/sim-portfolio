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
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Ipsam ?
                </p>
                <p className="about-desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Ipsam quisquam magni necessitatibus quibusdam. Aspernatur, 
                    numquam? Quisquam voluptatum, nemo enim consequuntur, 
                    at saepe labore facilis ipsam perspiciatis rerum odit veniam eligendi.
                </p>
                
                </div>
        </div>
    )
}

export default about
