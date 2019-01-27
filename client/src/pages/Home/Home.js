import React from 'react';
import i18next from 'i18next';

import Head from "../../components/Head";
import './style.css';

export default function Home() {

    return (
        <div className="home">
            <Head title={"Home"}/>
            <div>
                <div className="full-screen-video">
                    <video id="background-video" loop autoPlay>
                        <source src={"/video/planetyze.mp4"} type="video/mp4"/>
                        {i18next.t("videoError")}
                    </video>
                </div>

                <div className="container-overlay">
                    <div className="center-screen">
                        <h1>{i18next.t("homeMessage")}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}