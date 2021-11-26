import React from 'react'
import "../prevProjects/projects.css"

function projects() {
    return (
        <div className="projects">
            <div className="first-project">
                <h2 className="project-title">
                    ACME E-commerce
                </h2>
                <p className="project-desc">This application is an Ecommerce store for a tech store built using the ASP.NET Framework
                 (Not a real store). The application allows the user to browse the store anonymously. However, to add items to their cart, 
                 the application prompts the user to sign up or login first before they can add to their cart or make a purchase. 
                 All the products and user data are stored in a local database..</p>
                <a className="btn" target="_blank" href="https://github.com/Simphiwe-Jiyane/DomingoRoofworksApp.git" rel="noreferrer" >See repo</a>
            </div>
            <div className="second-project">
                <h2 className="project-title">
                    Domingo roofworks
                </h2>
                <p className="project-desc">Domingo roof works is a cloud-based web application with a database also hosted on the cloud. 
                The vendor used for this project is Microsoft Azure. 
                The purpose of this application is to allow employees at Domingo Roof works to manage all job card, this involves, 
                creating a job card, assigning job cards to employees, and deleting job cards. </p>
                <a className="btn" target="_blank" href="https://github.com/Simphiwe-Jiyane/Acme-Ecommerce-website.git" rel="noreferrer" >See repo</a>
            </div>
            <div className="third-project">
                <h2 className="project-title">
                    Beacon mobile
                </h2>
                <p className="project-desc">Beacon is an Android mobile abuilt for Android. 
                The app is a tourist navigation application aimed at assisting tourists navigate while traveling as well as local who
                 want to find tourist destinations they do not know about. The app allows a user to search for a destination or scroll through a list of nearby
                  tourist destinations based on their current location. It is available on the play store</p>
                <a className="btn" target="_blank" href="https://github.com/Simphiwe-Jiyane/BeaconFinalApp.git" rel="noreferrer" >See repo</a>
            </div>
        </div>
    )
}

export default projects
