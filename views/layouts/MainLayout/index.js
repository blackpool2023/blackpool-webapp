
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Header from "views/layouts/MainLayout/Header";
import Footer from "views/layouts/MainLayout/Footer";

const MainLayout = ({ children }) => {
    const router = useRouter();
    const isBaseRoot = router.asPath === '/';

    const [isPlay, setIsPlay] = useState(true)
    const videoRef = useRef(null);
    useEffect(() => {
        // Once the component mounts, start playing the video
        if (isBaseRoot === true) {
            videoRef.current.play();
            setTimeout(() => {
                setIsPlay(false)
            }, 8000);
        }
    }, []);
    return (
        <>
            {isBaseRoot && isPlay ? (
                <div style={{ background: 'black' }} >
                    <video ref={videoRef} autoPlay muted loop style={{ height: '100vh' }} >
                        <source src='/assets/images/banner/logo-motion.mp4' />
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
