import React from 'react'
import "./intro.css"
import simphiwe from "../../img/edited-simz-image.jpg"

function Intro() {
    return (
        <div className="intro">
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2 className="intro-i">Hello, My name is</h2>
                    <h2 className="intro-name">Simphiwe Jiyane</h2>
                    <div className="intro-title">
                        <div className="intro-title-wrapper">
                            <div className="intro-title-item">Software developer</div>
                            <div className="intro-title-item">Web developer</div>
                            <div className="intro-title-item">Computer Science Graduate</div>
                            <div className="intro-title-item">Future SovTech engineer</div>
                        </div>
                    </div>
                    <p className="intro-description">
                        Welcome and thanks for visiting my page. I am a freelance software developer trying to make a difference in the IT space by creating innovative projects and solutions.
                    </p>
                </div>
            </div>
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 416.031 416.031" className="intro-scroll"  >
                <path d="M221.605,0h-31.913C123.743,0,72.083,53.745,72.083,122.356v171.306c0,68.618,51.66,122.369,117.609,122.369h31.913
	                    c67.46,0,122.343-54.894,122.343-122.369V122.356C343.948,54.889,289.065,0,221.605,0z M206.781,64.12h2.469c3.859,0,7,3.14,7,7
	                    v49.833c0,3.86-3.141,7-7,7h-2.469c-3.859,0-7-3.14-7-7V71.12C199.781,67.26,202.922,64.12,206.781,64.12z M327.948,293.662
	                    c0,58.652-47.705,106.369-106.343,106.369h-31.913c-56.978,0-101.609-46.723-101.609-106.369V122.356
	                    C88.083,62.718,132.715,16,189.692,16h10.225v33.167c-9.34,2.927-16.136,11.661-16.136,21.954v49.833
	                    c0,10.292,6.796,19.027,16.136,21.953v41.166c0,4.418,3.582,8,8,8s8-3.582,8-8v-41.108c9.441-2.865,16.333-11.647,16.333-22.011
	                    V71.12c0-10.364-6.892-19.146-16.333-22.012V16h5.688c58.638,0,106.343,47.711,106.343,106.356V293.662z"/>
            </svg>

            <div className="intro-right">
                <div className="intro-bg">

                </div>
                <img src={simphiwe} alt="" className="intro-image" />
            </div>
        </div>
    )
}

export default Intro
