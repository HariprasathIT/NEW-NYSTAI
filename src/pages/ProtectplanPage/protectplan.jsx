import React from 'react'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import planbanner from "../../assets/Images/Protectplan-Images/protectplanbanne.jpeg"

import plan1Video from "../../assets/Images/Protectplan-Images/plan-video-1.mp4"
import plan2Video from "../../assets/Images/Protectplan-Images/plan-video-2.mp4"
import plan3Video from "../../assets/Images/Protectplan-Images/plan-video-3.mp4"

import camerapost from "../../assets/Images/Protectplan-Images/post.png"
import { BadgeCheck } from 'lucide-react'

const Protectplan = () => {
    return (
        <>
            <Hero />
            <SectionTwo />
            <SectionThree />
        </>
    )
}

export default Protectplan;


function Hero() {
    return (
        <>
            {/* CATEGORY BANNER */}
            <section className="relative w-full">
                {/* Banner Image */}
                <img
                    src={planbanner}
                    alt="Category Banner"
                    className="
            w-full
            h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[75vh] xl:h-[98vh]
            object-cover
            rounded-b-3xl
        "
                />

                {/* Overlay Content */}
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-end px-6 sm:px-10 md:px-[80px]">
                    <div className="text-right">

                        {/* Title */}
                        <h1 className="text-2xl sm:text-3xl md:text-[35px] font-bold text-white leading-snug md:leading-tight">
                            Enhanced Protection, Anytime
                        </h1>

                        {/* Divider */}
                        <div className="ml-auto w-32 sm:w-60 h-[3px] border-b border-dotted mt-3 sm:mt-4 border-white" />

                        {/* Description */}
                        <p className="mt-3 sm:mt-4 text-white text-xs sm:text-sm md:text-[17px] leading-relaxed" style={{ lineHeight: "25px" }}>
                            Add monitoring and emergency support to<br /> your Nystai Protect Plan.
                        </p>

                        {/* Button */}
                        <button
                            className="
                    mt-5 sm:mt-6
                    bg-white text-red
                    px-5 sm:px-6 py-2.5 sm:py-3
                    rounded-full font-semibold
                    hover:bg-red-700 transition-colors
                    text-xs sm:text-sm md:text-[14px]
                "
                        >
                            Explore Nystai Products
                        </button>

                    </div>
                </div>
            </section>

        </>
    )
}

function SectionTwo() {
    return (
        <>
            <section className="max-w-[1540px] mx-auto px-4">

                {/* Header */}
                <header className="text-center py-16">
                    <h1 className="text-3xl md:text-[35px] font-bold text-red-600 mb-3">
                        Security Excellence
                    </h1>
                    <p className="text-gray-600 text-sm md:text-[15px] max-w-2xl mx-auto">
                        NYSTAI Protect Plan: Revolutionizing Security
                        and Efficiency Across Industries
                    </p>
                </header>

                {/* FIRST SECTION */}
                <section className="mb-6">
                    <div className="flex flex-col md:flex-row items-center gap-6">

                        {/* VIDEO FIRST on mobile */}
                        <div className="w-full md:w-[650px] rounded-2xl overflow-hidden group order-1 md:order-1">
                            <video
                                src={plan2Video}   // import your video file
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="
            w-full
            h-[260px] sm:h-[330px] md:h-[400px] lg:h-[420px]
            object-cover
            transition-transform duration-700 ease-out group-hover:scale-110
        "
                            />
                        </div>


                        {/* Text SECOND on mobile */}
                        <div className="flex-1 bg-[#f9f9f9] rounded-2xl order-2 md:order-2 
                            flex justify-center items-center h-auto md:h-[420px]">
                            <div className="max-w-[720px] p-6 lg:p-8">
                                <h2 className="text-xl sm:text-2xl md:text-[35px] font-bold text-[#ffc107] mb-4 md:mb-6">
                                    Comprehensive protection across domains
                                </h2>
                                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                    NYSTAI's Protect Plan offers robust, customizable solutions for diverse domains
                                    like industries, hospitals, VMS, and smart cities. With a focus on reliability,
                                    innovation, and efficiency, the plan ensures uninterrupted operations and
                                    enhanced security—empowering organizations to safeguard assets and optimize
                                    performance effortlessly.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* SECOND SECTION */}
                <section className="mb-6">
                    <div className="flex flex-col md:flex-row items-center gap-6">

                        {/* VIDEO (Plan 2) */}
                        <div className="w-full md:w-[650px] rounded-2xl overflow-hidden group order-1 md:order-2">
                            <video
                                src={plan1Video}   // import your plan-2 video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="
            w-full
            h-[260px] sm:h-[330px] md:h-[400px] lg:h-[420px]
            object-cover
            transition-transform duration-700 ease-out group-hover:scale-110
        "
                            />
                        </div>


                        {/* Text SECOND on mobile */}
                        <div className="flex-1 bg-[#f9f9f9] rounded-2xl order-2 md:order-1 
                            flex justify-center items-center h-auto md:h-[420px]">
                            <div className="max-w-[720px] p-6 lg:p-8">
                                <h2 className="text-xl sm:text-2xl md:text-[35px] font-bold text-[#ffc107] mb-4 md:mb-6">
                                    Advanced Features for Seamless Operations
                                </h2>
                                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                    From AI-powered monitoring to real-time alerts, the Protect Plan ensures
                                    smart diagnostics, predictive maintenance, and energy optimization. With
                                    intelligent access control and professional-grade emergency response, NYSTAI
                                    delivers uninterrupted security for smoother, smarter operations.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* THIRD SECTION */}
                <section className="mb-10">
                    <div className="flex flex-col md:flex-row items-center gap-6">

                        {/* VIDEO (Plan 3) */}
                        <div className="w-full md:w-[650px] rounded-2xl overflow-hidden group order-1 md:order-1">
                            <video
                                src={plan3Video}   // import your plan-3 video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="
            w-full
            h-[260px] sm:h-[330px] md:h-[400px] lg:h-[420px]
            object-cover
            transition-transform duration-700 ease-out group-hover:scale-110
        "
                            />
                        </div>


                        {/* Text SECOND on mobile */}
                        <div className="flex-1 bg-[#f9f9f9] rounded-2xl order-2 md:order-2 
                            flex justify-center items-center h-auto md:h-[420px]">
                            <div className="max-w-[720px] p-6 lg:p-8">
                                <h2 className="text-xl sm:text-2xl md:text-[35px] font-bold text-[#ffc107] mb-4 md:mb-6">
                                    Commitment to Excellence and Support
                                </h2>
                                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                    NYSTAI offers unmatched customer support with expert assistance available
                                    anytime. Combining innovation with customer-centric customization, the
                                    Protect Plan enhances reliability and long-term operational excellence, making
                                    it ideal for both small businesses and large enterprises.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>
            </section>
        </>
    );
}

function SectionThree() {

    const cameraRef = useRef(null);

    useEffect(() => {
        gsap.from(cameraRef.current, {
            opacity: 0,
            y: 100,
            duration: 1.5,
            ease: "power3.out"
        });
    }, []);

    return (
        <section className="relative">
            <div className="max-w-[1540px] mx-auto mb-10">

                {/* Header */}
                <div className="text-center py-16">
                    <h2 className="text-[35px] font-bold text-red-600 mb-2">Key Features</h2>
                    <p className="text-[15px] text-gray-600">
                        Maiden Unified All-in-One Video, Alarm & Access Control Platform
                    </p>
                </div>

                {/* MAIN WRAPPER */}
                <div className="relative flex justify-center items-center">

                    {/* CENTER CAMERA IMAGE WITH GSAP */}
                    <img
                        // ref={cameraRef}
                        src={camerapost}
                        alt="Security Cameras"
                        // className="w-[480px] md:w-[525px] object-contain z-10 relative"
                        className="w-[480px] md:w-[600px] object-contain z-10 relative"
                        style={{ bottom: "-15px" }}
                    />

                    {/* TOP LEFT CARD */}
                    <div className="absolute top-10 left-[100px] bg-[#F8C7231C] h-[150px] rounded-xl hover:scale-105 transition-all"
                        style={{ border: "1px solid #F8C723", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                        <div className="pb-3">
                            <BadgeCheck />
                        </div>
                        <p className="text-[#000] text-[17px] text-center max-w-[400px]">
                            10 Kilometer range for flexible installation with Access
                        </p>
                    </div>

                    {/* TOP RIGHT CARD */}
                    <div className="absolute top-10 right-[100px] bg-[#F8C7231C] h-[150px] rounded-xl hover:scale-105 transition-all"
                        style={{ border: "1px solid #F8C723", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                        <div className="pb-3">
                            <BadgeCheck />
                        </div>
                        <p className="text-[#000] text-[17px] text-center max-w-[400px]">
                            10 Kilometer range for flexible installation with Access
                        </p>
                    </div>

                    {/* BOTTOM LEFT CARD */}
                    <div className="absolute bottom-[70px] left-0 bg-[#F8C7231C] h-[150px] rounded-xl hover:scale-105 transition-all"
                        style={{ border: "1px solid #F8C723", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                        <div className="pb-3">
                            <BadgeCheck />
                        </div>
                        <p className="text-[#000] text-[17px] text-center max-w-[400px]">
                            10 Kilometer range for flexible installation with Access
                        </p>
                    </div>

                    {/* BOTTOM RIGHT CARD */}
                    <div className="absolute bottom-[70px] right-0 bg-[#F8C7231C] h-[150px] rounded-xl hover:scale-105 transition-all"
                        style={{ border: "1px solid #F8C723", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                        <div className="pb-3">
                            <BadgeCheck />
                        </div>
                        <p className="text-[#000] text-[17px] text-center max-w-[400px]">
                            10 Kilometer range for flexible installation with Access
                        </p>
                    </div>

                </div>

                {/* BOTTOM GRADIENT OVERLAY */}
                <div className="absolute bottom-0 left-0 w-full h-[250px] pointer-events-none
                    bg-gradient-to-t from-black/5 via-black/5 to-transparent" style={{ borderRadius: "50px" }}>
                </div>

            </div>
        </section>
    );
}
