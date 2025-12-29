import { useState, useEffect } from 'react'

import parkingiotbanner from "../../assets/Images/Allsolutions-Images/Parking/parkingbanner.jpeg"

import leftimg1 from "../../assets/Images/Allsolutions-Images/Parking/leftimg1.jpeg"

import { ArrowRight } from 'lucide-react';

import threecardimg1 from "../../assets/Images/Allsolutions-Images/Parking/cardimg1.jpeg"
import threecardimg2 from "../../assets/Images/Allsolutions-Images/Parking/cardimg2.jpeg"
import threecardimg3 from "../../assets/Images/Allsolutions-Images/Parking/cardimg3.jpg"


import icon1 from "../../assets/Images/Allsolutions-Images/Parking/icon1.png"
import icon2 from "../../assets/Images/Allsolutions-Images/Parking/icon2.png"
import icon3 from "../../assets/Images/Allsolutions-Images/Parking/icon3.png"
import icon4 from "../../assets/Images/Allsolutions-Images/Parking/icon4.png"

import featureicon1 from "../../assets/Images/Allsolutions-Images/Parking/features-icon1.png"
import featureicon2 from "../../assets/Images/Allsolutions-Images/Parking/features-icon2.png"
import featureicon3 from "../../assets/Images/Allsolutions-Images/Parking/features-icon3.png"
import featureicon4 from "../../assets/Images/Allsolutions-Images/Parking/features-icon4.png"
import featureicon5 from "../../assets/Images/Allsolutions-Images/Parking/features-icon5.png"

import video1 from "../../assets/Images/Allsolutions-Images/Education/video1.mp4"

const Parking = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Hero />
            <Sectiontwo />
            <Sectionthree />
            <SectionFour />
            {/* <SectionFive /> */}
        </>
    )
}

export default Parking


function Hero() {
    return (
        <>
            {/* CATEGORY BANNER */}
            <section className="relative w-full">

                {/* Banner Image */}
                <img
                    src={parkingiotbanner}
                    alt="Category Banner"
                    className="
                        w-full
                        h-[70vh]
                        sm:h-[70vh]
                        md:h-[70vh]
                        lg:h-[75vh]
                        xl:h-[98vh]
                        object-cover
                        rounded-b-[20px]
                    "
                />

                {/* Overlay Content */}
                <div
                    className="
                        absolute inset-0
                        flex items-center
                        justify-start md:justify-end
                        px-6 sm:px-10 md:px-[80px]
                    "
                >
                    <div className="max-w-xl text-left md:text-right">

                        {/* Title */}
                        <h1 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-[#474747] leading-snug">
                            Smart Parking IoT Solutions
                        </h1>

                        {/* Divider */}
                        <div
                            className="
                                w-32 sm:w-40 h-[3px]
                                border-b border-dotted
                                mt-3 sm:mt-4
                                border-[#474747]
                                ml-0 md:ml-auto
                            "
                        />

                        {/* Description */}
                        <p className="mt-3 sm:mt-4 text-[#474747] text-xs sm:text-sm md:text-base leading-relaxed">
                            Intelligent parking management powered by IoT sensors,
                            real-time analytics, and automated access control systems.
                        </p>

                        {/* Button */}
                        <button
                            className="
                                mt-5 sm:mt-6
                                bg-red-600 text-white
                                px-5 sm:px-6 py-2.5 sm:py-3
                                rounded-full font-semibold
                                hover:bg-red-700 transition-colors
                                text-xs sm:text-sm md:text-[14px]
                            "
                        >
                            Explore Parking IoT Solutions
                        </button>

                    </div>
                </div>
            </section>
        </>
    );
}

function Sectiontwo() {
    const features = [
        {
            icon: icon1,
            title: "AREA MONITORING",
            description: "Continuous view of parking zones",
            color: "orange"
        },
        {
            icon: icon2,
            title: "SYSTEM ACCESS",
            description: "Video access across mobile and desktop",
            color: "orange"
        },
        {
            icon: icon3,
            title: "SURROUND VIEW",
            description: "All-angle vehicle visual coverage",
            color: "orange"
        },
        {
            icon: icon4,
            title: "OUTDOOR READY",
            description: "Reliable operation in open environments",
            color: "orange"
        }
    ];


    return (
        <>
            <section className="max-w-[1540px] mx-auto px-4">

                <div>
                    {/* Header */}
                    <div className="text-center sm:py-16 py-8 md:py-12 lg:py-16">
                        <h2 className="text-[18px] md:text-[28px] lg:text-[30px] font-bold text-red-600 mb-2">
                            NYSTAI'S PARKING SOLUTION
                        </h2>
                        <p className="text-[14px] md:text-[15px] text-gray-600 tracking-wider">
                            IoT-based parking management using cameras, MDVR, and vehicle video systems
                        </p>
                    </div>
                </div>

                {/* First Section */}
                <div className="flex flex-col lg:flex-row items-center gap-6">
                    {/* Left Image */}
                    <div className="w-full lg:w-[600px] rounded-2xl overflow-hidden group">
                        <img
                            src={leftimg1}
                            alt="Fire extinguisher"
                            className="w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="flex-1 bg-[#f9f9f9] rounded-2xl flex items-center h-auto lg:h-[420px] w-full">
                        <div className="max-w-[730px] p-5 md:px-6 lg:px-8 w-full">
                            <h2 className="text-xl sm:text-2xl lg:text-[30px] font-bold text-[#ffc107] mb-6">
                                Parking Monitoring & Control
                            </h2>

                            <ul className="list-disc pl-6 text-gray-700 text-sm lg:text-[15px] leading-relaxed space-y-4 lg:space-y-5 tracking-wide">
                                <li>
                                    MDVR systems enable live and recorded video access on both mobile and desktop platforms.
                                </li>
                                <li>
                                    Dash cameras and 360° vision systems provide complete coverage of parking zones and vehicle movement.
                                </li>
                                <li>
                                    Waterproof VMS ensures reliable operation in outdoor and harsh parking environments.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Icons */}
                <div className="flex items-center justify-center py-7 mt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="mb-6">
                                    <img
                                        src={feature.icon}
                                        alt={`${feature.title} icon`}
                                        className="w-14 h-14 object-contain"
                                    />
                                </div>
                                <h3 className="text-[#dc3545] font-bold sm:text-xl text-[16px] mb-3 tracking-wide">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </>
    )
}

function Sectionthree() {

    return (
        <section className="max-w-[1540px] mx-auto px-4">

            {/* Header */}
            <div className="text-center sm:py-16 py-8 md:py-12 lg:py-16">
                <h2 className="text-[18px] md:text-[28px] lg:text-[30px] font-bold text-red-600 mb-2">
                    Our Services
                </h2>
                <p className="text-[14px] md:text-[15px] text-gray-600 tracking-wider">
                    End-to-end AI-powered parking solutions for efficient vehicle and space management
                </p>
            </div>

            {/* First Section */}
            <div className="flex flex-col lg:flex-row items-center gap-6 mb-4">
                {/* Text - Order 2 on mobile, Order 1 on desktop */}
                <div className="flex-1 bg-[#f9f9f9] rounded-2xl flex items-center h-auto lg:h-[420px] w-full order-2 lg:order-1">
                    <div className="max-w-[730px] p-5 md:px-6 lg:px-8 w-full">
                        <h2 className="text-xl sm:text-2xl lg:text-[30px] font-bold text-[#ffc107] mb-6">
                            Challenges Without Smart Parking
                        </h2>

                        <ul className="list-disc pl-6 text-gray-700 text-sm lg:text-[15px] leading-relaxed space-y-4 lg:space-y-5 tracking-wide">
                            <li>
                                Manual parking systems lead to traffic congestion and inefficient vehicle movement.
                            </li>
                            <li>
                                Lack of real-time visibility results in poor parking space utilization.
                            </li>
                            <li>
                                Drivers and operators face delays, confusion, and increased operational stress.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Image - Order 1 on mobile, Order 2 on desktop */}
                <div className="w-full lg:w-[600px] rounded-2xl overflow-hidden group order-1 lg:order-2">
                    <img
                        src={threecardimg1}
                        alt="Deployment Services"
                        className="w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
            </div>

            {/* Second Section */}
            <div className="flex flex-col lg:flex-row items-center gap-6 mb-4">

                {/* Image FIRST */}
                <div className="w-full lg:w-[600px] rounded-2xl overflow-hidden group">
                    <img
                        src={threecardimg2}
                        alt="Deployment Services"
                        className="
                            w-full
                            h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px]
                            object-cover
                            transition-transform duration-500
                            group-hover:scale-110
                        "
                    />
                </div>

                {/* Text SECOND */}
                <div className="flex-1 bg-[#f9f9f9] rounded-2xl flex items-center h-auto lg:h-[420px] w-full">
                    <div className="max-w-[730px] p-5 md:px-6 lg:px-8 w-full">
                        <h2 className="text-xl sm:text-2xl lg:text-[30px] font-bold text-[#ffc107] mb-6">
                            AI-Powered Parking Solutions
                        </h2>

                        <ul className="list-disc pl-6 text-gray-700 text-sm lg:text-[15px] leading-relaxed space-y-4 lg:space-y-5 tracking-wide">
                            <li>
                                AI systems use ANPR cameras and ultrasonic sensors to detect vehicles and parking availability.
                            </li>
                            <li>
                                Integrated camera and lighting systems guide vehicles efficiently within parking areas.
                            </li>
                            <li>
                                Automated monitoring helps reduce congestion and improve overall parking flow.
                            </li>
                        </ul>
                    </div>
                </div>

            </div>


            {/* Third Section */}
            <div className="flex flex-col lg:flex-row items-center gap-6">
                {/* Text - Order 2 on mobile, Order 1 on desktop */}
                <div className="flex-1 bg-[#f9f9f9] rounded-2xl flex items-center h-auto lg:h-[420px] w-full order-2 lg:order-1">
                    <div className="max-w-[730px] p-5 md:px-6 lg:px-8 w-full">
                        <h2 className="text-xl sm:text-2xl lg:text-[30px] font-bold text-[#ffc107] mb-6">
                            How NYSTAI Delivers Smarter Parking
                        </h2>

                        <ul className="list-disc pl-6 text-gray-700 text-sm lg:text-[15px] leading-relaxed space-y-4 lg:space-y-5 tracking-wide">
                            <li>
                                NYSTAI combines ANPR cameras, ultrasonic sensors, and MDVR systems for accurate vehicle detection.
                            </li>
                            <li>
                                Our solutions automate entry, exit, and parking control with minimal human intervention.
                            </li>
                            <li>
                                Real-time monitoring ensures smooth operations, improved efficiency, and safer parking environments.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Image - Order 1 on mobile, Order 2 on desktop */}
                <div className="w-full lg:w-[600px] rounded-2xl overflow-hidden group order-1 lg:order-2">
                    <img
                        src={threecardimg3}
                        alt="Deployment Services"
                        className="w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
            </div>

        </section>
    );
}

function SectionFour() {
    const features = [
        {
            icon: featureicon1,
            title: "Smart Surveillance",
            description: "Real-time monitoring of parking areas"
        },
        {
            icon: featureicon2,
            title: "Space Detection",
            description: "Accurate vacant and occupied slot detection"
        },
        {
            icon: featureicon3,
            title: "Vehicle Guidance",
            description: "Guides drivers to available spaces"
        },
        {
            icon: featureicon4,
            title: "Access Control",
            description: "Automated vehicle entry and exit"
        },
        {
            icon: featureicon5,
            title: "Traffic Optimization",
            description: "Reduced congestion and smooth flow"
        }
    ];

    return (
        <>
            <section className="max-w-[1540px] mx-auto px-4">
                {/* Header */}
                <div className="text-center sm:py-16 py-8 md:py-12 lg:py-16">
                    <h2 className="text-[18px] md:text-[28px] lg:text-[30px] font-bold text-red-600 mb-2">
                        FEATURES
                    </h2>
                    <p className="text-[14px] md:text-[15px] text-gray-600 tracking-wider">
                        Key features that enable automated parking management and smooth vehicle flow
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-4">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center bg-[#f5f5f5] p-7 rounded-xl">
                            <div className="w-15 h-15 flex items-center justify-center mb-6">
                                <img src={feature.icon} alt="feature icon" className="w-full h-[72px] object-contain" />
                            </div>
                            <h3 className="sm:text-xl text-[16px]  font-semibold mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

function SectionFive() {
    return (
        <>
            <section className="px-4 mb-7">
                {/* Header */}
                <div className="text-center py-16">
                    <h2 className="text-[30px] font-bold text-red-600 mb-2">
                        FEATURES OF AI-VMS
                    </h2>
                    <p className="text-[15px] text-gray-600 tracking-wider">
                        The subtext helps customers quickly understand the value or specific
                    </p>
                </div>
            </section>
        </>
    )
}