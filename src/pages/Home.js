import React from 'react';
export default function Home() {

    return (
        <div className="home">
            <div className="full-screen-video">
                <video  id="background-video" loop autoPlay>
                    <source src={"/video/planetyze.mp4"} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>


            <div className="container-overlay">
                <div className="center-screen">
                    <h1> Innovate a new travel style </h1>
                </div>
                {/*<h1> Innovate a new travel style </h1>*/}

            </div>

        </div>
    )

}