import React from 'react'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import planbanner from "../../assets/Images/Protectplan-Images/protectplanbanne.jpeg"

import plan1 from "../../assets/Images/Protectplan-Images/plan1.jpeg"
import plan2 from "../../assets/Images/Protectplan-Images/plan2.jpeg"
import plan3 from "../../assets/Images/Protectplan-Images/plan3.jpeg"

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
            <div className="w-full">
                <img
                    src={planbanner}
                    alt="Category Banner"
                    className="
                      w-full 
                      h-[40vh]       
                      sm:h-[50vh]    
                      md:h-[60vh]    
                      lg:h-[75vh]    
                      xl:h-[85vh]    
                      object-cover 
                      rounded-b-[20px]
                    "
                />
            </div>

        </>
    )
}

function SectionTwo() {
    return (
        <>
            <div className="">
                {/* Header */}
                <header className="text-center py-12 px-4">
                    <h1 className="text-4xl md:text-[35px] font-bold text-red-600 mb-3">
                        Security Excellence
                    </h1>
                    <p className="text-gray-600 text-sm md:text-[15px] max-w-2xl mx-auto">
                        NYSTAI Protect Plan: Revolutionizing Security
                        and Efficiency Across Industries
                    </p>
                </header>

                {/* First Section */}
                <section className="max-w-[1540px] mx-auto px-4 mb-4">
                    <div className="flex flex-col md:flex-row items-center gap-4">

                        {/* Left Image (Fixed Width 650px) */}
                        <div className="w-full md:w-[650px] rounded-2xl overflow-hidden">
                            <img
                                src={plan1}
                                alt="Fire extinguisher"
                                className="w-full h-[400px] object-cover"
                            />
                        </div>

                        {/* Right Content (Takes remaining space) */}
                        <div className="flex-1 bg-[#f9f9f9] rounded-2xl h-[400px] flex justify-center items-center">
                            <div className="max-w-[720px] px-5 md:px-0">
                                <h2 className="text-2xl md:text-[35px] font-bold text-[#ffc107] mb-6">
                                    Comprehensive protection across domains
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    NYSTAI's Protect Plan offers robust, customizable solutions for diverse domains
                                    like industries, hospitals, VMS, and smart cities. With a focus on reliability,
                                    innovation, and efficiency, the plan ensures uninterrupted operations and
                                    enhanced security. Tailored to meet unique needs, it empowers organizations
                                    to safeguard assets and optimize performance effortlessly.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Second Section */}
                <section className="max-w-[1540px] mx-auto px-4 mb-4">
                    <div className="flex flex-col md:flex-row items-center gap-4">

                        {/* Right Content (Takes remaining space) */}
                        <div className="flex-1 bg-[#f9f9f9] rounded-2xl h-[400px] flex justify-center items-center">
                            <div className="max-w-[720px] px-5 md:px-0">
                                <h2 className="text-2xl md:text-[35px] font-bold text-[#ffc107] mb-6">
                                    Advanced Features for Seamless Operations
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    From AI-powered monitoring to 24/7 system alerts, the Protect Plan delivers proactive diagnostics and smart energy optimization. With comprehensive video history, customizable access controls, and professional-grade emergency response, NYSTAI ensures users have complete control and peace of mind, making daily operations smoother, smarter, and more secure than ever.
                                </p>
                            </div>
                        </div>

                        {/* Left Image (Fixed Width 650px) */}
                        <div className="w-full md:w-[650px] rounded-2xl overflow-hidden">
                            <img
                                src={plan2}
                                alt="Fire extinguisher"
                                className="w-full h-[400px] object-cover"
                            />
                        </div>

                    </div>
                </section>

                {/* Third Section */}
                <section className="max-w-[1540px] mx-auto px-4 mb-4">
                    <div className="flex flex-col md:flex-row items-center gap-4">

                        {/* Left Image (Fixed Width 650px) */}
                        <div className="w-full md:w-[650px] rounded-2xl overflow-hidden">
                            <img
                                src={plan3}
                                alt="Fire extinguisher"
                                className="w-full h-[400px] object-cover"
                            />
                        </div>

                        {/* Right Content (Takes remaining space) */}
                        <div className="flex-1 bg-[#f9f9f9] rounded-2xl h-[400px] flex justify-center items-center">
                            <div className="max-w-[720px] px-5 md:px-0">
                                <h2 className="text-2xl md:text-[35px] font-bold text-[#ffc107] mb-6">
                                    Commitment to Excellence and Support
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    NYSTAI is dedicated to providing unparalleled customer service with expert support available anytime. By combining advanced technology with user-centric customization, the Protect Plan strengthens reliability and operational excellence. Whether for small businesses or large enterprises, NYSTAI’s solutions guarantee long-term value, ensuring your systems run seamlessly while protecting what matters most.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </>
    )
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
            <div className="max-w-[1540px] mx-auto">

                {/* Header */}
                <div className="text-center py-16 ">
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
