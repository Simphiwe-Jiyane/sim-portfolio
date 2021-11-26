import React from 'react'
import "../prevProjects/projects.css"

function projects() {
    return (
        <div className="projects">
            <div className="first-project">
                <h2 className="project-title">
                    ACME E-commerce
                </h2>
                <p className="project-desc">Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. In sed unde et, porro impedit doloremque, quibusdam,
                    fugiat consequatur explicabo quidem voluptate laboriosam perspiciatis?
                    Quis natus amet aut a asperiores unde.</p>
                <a className="btn" target="_blank" href="https://github.com/Simphiwe-Jiyane/DomingoRoofworksApp.git" rel="noreferrer" >See repo</a>
            </div>
            <div className="second-project">
                <h2 className="project-title">
                    Domingo roofworks
                </h2>
                <p className="project-desc">Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. In sed unde et, porro impedit doloremque, quibusdam,
                    fugiat consequatur explicabo quidem voluptate laboriosam perspiciatis?
                    Quis natus amet aut a asperiores unde.</p>
                <a className="btn" target="_blank" href="https://github.com/Simphiwe-Jiyane/Acme-Ecommerce-website.git" rel="noreferrer" >See repo</a>
            </div>
            <div className="third-project">
                <h2 className="project-title">
                    Beacon mobile
                </h2>
                <p className="project-desc">Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. In sed unde et, porro impedit doloremque, quibusdam,
                    fugiat consequatur explicabo quidem voluptate laboriosam perspiciatis?
                    Quis natus amet aut a asperiores unde.</p>
                <a className="btn" target="_blank" href="https://github.com/Simphiwe-Jiyane/BeaconFinalApp.git" rel="noreferrer" >See repo</a>
            </div>
        </div>
    )
}

export default projects
