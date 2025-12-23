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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                        h-[70vh] sm:h-[70vh] md:h-[70vh] lg:h-[75vh] xl:h-[98vh]
                        object-cover
                        rounded-b-[20px]
                    "
                />

                {/* Overlay Content */}
                <div className="absolute top-0 left-0 w-full h-full flex items-center 
                    justify-start md:justify-end 
                    px-4 sm:px-10 md:px-[80px]">

                    <div className="text-left md:text-right">

                        {/* Title */}
                        <h1 className="text-2xl sm:text-3xl md:text-[35px] font-bold text-white leading-snug md:leading-tight">
                            Enhanced Protection, Anytime
                        </h1>

                        {/* Divider */}
                        <div className="
                            w-32 sm:w-60 h-[3px] border-b border-dotted mt-3 sm:mt-4 border-white
                            ml-0 md:ml-auto
                        " />

                        {/* Description */}
                        <p
                            className="mt-3 sm:mt-4 text-white text-xs sm:text-sm md:text-[17px] leading-relaxed"
                            style={{ lineHeight: "25px" }}
                        >
                            Add monitoring and emergency support to
                            <br /> your Nystai Protect Plan.
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
    );
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
                    <div className="flex flex-col lg:flex-row items-center gap-6">
                        {/* VIDEO */}
                        <div className="w-full lg:w-[650px] rounded-2xl overflow-hidden group">
                            <video
                                src={plan2Video}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-[260px] sm:h-[330px] md:h-[380px] lg:h-[420px] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            />
                        </div>

                        {/* Text */}
                        <div className="flex-1 bg-[#f9f9f9] rounded-2xl flex justify-center items-center h-auto lg:h-[420px] w-full">
                            <div className="max-w-[720px] p-6 lg:p-8 w-full">
                                <h2 className="text-xl sm:text-2xl lg:text-[30px] font-bold text-[#ffc107] mb-6">
                                    Comprehensive protection across domains
                                </h2>

                                <ul className="list-disc pl-6 text-gray-700 text-sm lg:text-[15px] leading-relaxed space-y-4 lg:space-y-5 tracking-wide">
                                    <li>Robust and customizable protection solutions tailored for multiple domains.</li>
                                    <li>Designed to support industries, hospitals, VMS, smart cities, and enterprise environments.</li>
                                    <li>Focus on reliability, innovation, and operational efficiency.</li>
                                    <li>Ensures uninterrupted operations with enhanced security coverage.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECOND SECTION */}
                <section className="mb-6">
                    <div className="flex flex-col lg:flex-row items-center gap-6">
                        {/* Text - Order 2 on mobile, Order 1 on desktop */}
                        <div className="flex-1 bg-[#f9f9f9] rounded-2xl flex justify-center items-center h-auto lg:h-[420px] w-full order-2 lg:order-1">
                            <div className="max-w-[720px] p-6 lg:p-8 w-full">
                                <h2 className="text-xl sm:text-2xl lg:text-[30px] font-bold text-[#ffc107] mb-6">
                                    Advanced Features for Seamless Operations
                                </h2>

                                <ul className="list-disc pl-6 text-gray-700 text-sm lg:text-[15px] leading-relaxed space-y-4 lg:space-y-5 tracking-wide">
                                    <li>AI-powered monitoring for intelligent and proactive system oversight.</li>
                                    <li>Real-time alerts enabling faster response and issue resolution.</li>
                                    <li>Smart diagnostics and predictive maintenance to prevent downtime.</li>
                                    <li>Intelligent access control combined with professional-grade emergency response.</li>
                                </ul>
                            </div>
                        </div>

                        {/* VIDEO - Order 1 on mobile, Order 2 on desktop */}
                        <div className="w-full lg:w-[650px] rounded-2xl overflow-hidden group order-1 lg:order-2">
                            <video
                                src={plan1Video}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-[260px] sm:h-[330px] md:h-[380px] lg:h-[420px] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            />
                        </div>
                    </div>
                </section>

                {/* THIRD SECTION */}
                <section className="mb-10">
                    <div className="flex flex-col lg:flex-row items-center gap-6">
                        {/* VIDEO */}
                        <div className="w-full lg:w-[650px] rounded-2xl overflow-hidden group">
                            <video
                                src={plan3Video}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-[260px] sm:h-[330px] md:h-[380px] lg:h-[420px] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            />
                        </div>

                        {/* Text */}
                        <div className="flex-1 bg-[#f9f9f9] rounded-2xl flex justify-center items-center h-auto lg:h-[420px] w-full">
                            <div className="max-w-[720px] p-6 lg:p-8 w-full">
                                <h2 className="text-xl sm:text-2xl lg:text-[30px] font-bold text-[#ffc107] mb-6">
                                    Commitment to Excellence and Support
                                </h2>

                                <ul className="list-disc pl-6 text-gray-700 text-sm lg:text-[15px] leading-relaxed space-y-4 lg:space-y-5 tracking-wide">
                                    <li>Unmatched customer support with expert assistance available anytime.</li>
                                    <li>Customer-centric solutions designed for flexibility and customization.</li>
                                    <li>Innovation-driven approach to enhance system reliability.</li>
                                    <li>Focused on long-term operational excellence and performance.</li>
                                </ul>
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

    const features = [
        { text: "10 Kilometer range for flexible installation with Access" },
        { text: "10 Kilometer range for flexible installation with Access" },
        { text: "10 Kilometer range for flexible installation with Access" },
        { text: "10 Kilometer range for flexible installation with Access" }
    ];

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

                {/* DESKTOP LAYOUT - Above 1200px - ORIGINAL UNCHANGED */}
                <div className="hidden xl:block">
                    {/* MAIN WRAPPER */}
                    <div className="relative flex justify-center items-center">

                        {/* CENTER CAMERA IMAGE WITH GSAP */}
                        <img
                            src={camerapost}
                            alt="Security Cameras"
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
                                {features[0].text}
                            </p>
                        </div>

                        {/* TOP RIGHT CARD */}
                        <div className="absolute top-10 right-[100px] bg-[#F8C7231C] h-[150px] rounded-xl hover:scale-105 transition-all"
                            style={{ border: "1px solid #F8C723", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                            <div className="pb-3">
                                <BadgeCheck />
                            </div>
                            <p className="text-[#000] text-[17px] text-center max-w-[400px]">
                                {features[1].text}
                            </p>
                        </div>

                        {/* BOTTOM LEFT CARD */}
                        <div className="absolute bottom-[70px] left-0 bg-[#F8C7231C] h-[150px] rounded-xl hover:scale-105 transition-all"
                            style={{ border: "1px solid #F8C723", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                            <div className="pb-3">
                                <BadgeCheck />
                            </div>
                            <p className="text-[#000] text-[17px] text-center max-w-[400px]">
                                {features[2].text}
                            </p>
                        </div>

                        {/* BOTTOM RIGHT CARD */}
                        <div className="absolute bottom-[70px] right-0 bg-[#F8C7231C] h-[150px] rounded-xl hover:scale-105 transition-all"
                            style={{ border: "1px solid #F8C723", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                            <div className="pb-3">
                                <BadgeCheck />
                            </div>
                            <p className="text-[#000] text-[17px] text-center max-w-[400px]">
                                {features[3].text}
                            </p>
                        </div>

                    </div>
                </div>

                {/* TABLET & MOBILE LAYOUT - Below 1200px */}
                <div className="block xl:hidden px-4">
                    {/* Camera Image First */}
                    <div className="flex justify-center mb-8">
                        <img
                            src={camerapost}
                            alt="Security Cameras"
                            className="w-[320px] sm:w-[400px] md:w-[500px] object-contain"
                        />
                    </div>

                    {/* Feature Cards Below */}
                    {/* TABLET: 2 cards per row, MOBILE: 1 card per row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-[#F8C7231C] h-[150px] rounded-xl hover:scale-105 transition-all"
                                style={{ border: "1px solid #F8C723", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}
                            >
                                <div className="pb-3">
                                    <BadgeCheck />
                                </div>
                                <p className="text-[#000] text-[17px] text-center max-w-[400px] px-4">
                                    {feature.text}
                                </p>
                            </div>
                        ))}
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
