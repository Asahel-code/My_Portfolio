import React from 'react'
import img1 from '../../assets/images/sokofiti.png'
import img2 from '../../assets/images/sgr-reservation.png'
import img3 from '../../assets/images/freshgrocery.png'
import img4 from '../../assets/images/summerwatersource.png'
import './Projects.css'

export const Projects = () => {
    return (
        <div>
            <div className="container-fluid p-0">
                <div className="row w-100 d-flex m-auto justify-content-between">
                    <div className="col-lg-4 col-sm-6 col-md-4 p-1">
                        <img src={img1} alt="" className="w-95" />
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-4 p-1">
                        <img src={img2} alt="" className="w-95" />
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-4 p-1">
                        <img src={img3} alt="" className="w-95" />
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-4 p-1">
                        <img src={img4} alt="" className="w-95" />
                    </div>
                </div>

            </div>
        </div>
    )
}