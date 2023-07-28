
import React, { useEffect, useRef, useState } from 'react';
import Header from "views/layouts/MainLayout/Header";
import Footer from "views/layouts/MainLayout/Footer";

const MainLayout = ({ children }) => {
    const [isPlay, setIsPlay] = useState(true)
    const videoRef = useRef(null);
    useEffect(() => {
        // Once the component mounts, start playing the video
        videoRef.current.play();
        setTimeout(() => {
            setIsPlay(false)
        }, 7000);
    }, []);
    return (
        <>
            {isPlay ? (
                <div style={{ background: 'black' }} >
                    <video ref={videoRef} autoPlay muted loop style={{ height: '100vh' }} >
                        <source src='/assets/images/banner/logomotion.mp4' />
                    </video>
                </div>
            ) : (
                <div>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </div>
            )}
        </>

    );
};

export default MainLayout;
