import { useState } from 'react'

import warehousebanner from "../../assets/Images/Allsolutions-Images/Warehouse/warehousebanner.jpeg"

import leftimg1 from "../../assets/Images/Allsolutions-Images/Warehouse/leftimg1.jpeg"

import overlayimg from "../../assets/Images/Allsolutions-Images/Warehouse/overlaybigimg.jpeg"

import tiltimg from "../../assets/Images/Allsolutions-Images/Warehouse/tiltimg.png"

import icon1 from "../../assets/Images/Allsolutions-Images/Vms/icon1.png"
import icon2 from "../../assets/Images/Allsolutions-Images/Vms/icon2.png"
import icon3 from "../../assets/Images/Allsolutions-Images/Vms/icon3.png"
import icon4 from "../../assets/Images/Allsolutions-Images/Vms/icon4.png"

import gridimg1 from "../../assets/Images/Allsolutions-Images/Banking/gridimg1.jpeg"
import gridimg2 from "../../assets/Images/Allsolutions-Images/Banking/gridimg2.jpeg"
import gridimg3 from "../../assets/Images/Allsolutions-Images/Banking/gridimg3.jpeg"
import gridimg4 from "../../assets/Images/Allsolutions-Images/Banking/gridimg4.jpeg"

import featureicon from "../../assets/Images/Allsolutions-Images/Banking/icon.png"

const Warehouse = () => {
    return (
        <>
            <Hero />
            <Sectiontwo />
            <Sectionthree />
            <SectionFour />
            <SectionFive />
        </>
    )
}

export default Warehouse


function Hero() {
    return (
        <>
            {/* CATEGORY BANNER */}
            <section className="relative w-full">
                {/* Banner Image */}
                <img
                    src={warehousebanner}
                    alt="Warehouse Banner"
                    className="
                        w-full
                        h-[50vh]
                        sm:h-[50vh]
                        md:h-[60vh]
                        lg:h-[75vh]
                        xl:h-[98vh]
                        object-cover
                        rounded-b-[20px]
                    "
                />

                {/* LEFT Overlay Content */}
                <div className="absolute inset-0 flex px-6 sm:px-10 md:px-[80px] top-[100px] lg:top-[150px] xl:top-[200px]">
                    <div className="max-w-xl text-left">

                        {/* Title */}
                        <h1 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-[#474747] leading-snug">
                            Smart Warehouse Solutions
                        </h1>

                        {/* Divider */}
                        <div className="w-32 sm:w-40 h-[3px] border-b border-dotted mt-3 sm:mt-4 border-[#474747]" />

                        {/* Description */}
                        <p className="mt-3 sm:mt-4 text-[#474747] text-xs sm:text-sm md:text-base leading-relaxed">
                            Intelligent warehouse management systems designed to improve safety,
                            optimize operations, and provide real-time visibility across storage
                            and logistics workflows.
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
                            Explore Warehouse Solutions
                        </button>

                    </div>
                </div>
            </section>
        </>
    )
}

function Sectiontwo() {
    const features = [
        {
            icon: icon1,
            title: "VIGILANCE",
            description: "Real-time notifications for security",
            color: "orange"
        },
        {
            icon: icon2,
            title: "CENTRALIZATION",
            description: "Automated control from one device",
            color: "orange"
        },
        {
            icon: icon3,
            title: "ANTICIPATION",
            description: "Proactive monitoring prevents problems",
            color: "orange"
        },
        {
            icon: icon4,
            title: "OPTIMIZATION",
            description: "Customizable for Any Environment",
            color: "orange"
        }
    ];
    return (
        <>
            <section className="max-w-[1540px] mx-auto px-4">

                <div>
                    {/* Header */}
                    <div className="text-center py-16">
                        <h2 className="text-[30px] font-bold text-[#dc3545] mb-2">NYSTAI'S WAREHOUSE SOLUTIONS</h2>
                        <p className="text-[15px] text-gray-600 tracking-wider">
                            The subtext helps customers quickly understand the value or specific
                        </p>
                    </div>
                </div>

                {/* First Section */}
                <div className="flex flex-col md:flex-row items-center gap-4 mb-4">

                    {/* Left Image (Fixed Width 650px) */}
                    <div className="w-full md:w-[600px] rounded-2xl overflow-hidden group">
                        <img
                            src={leftimg1}
                            alt="Fire extinguisher"
                            className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>

                    {/* Right Content (Takes remaining space) */}
                    <div className="flex-1 bg-[#f9f9f9] rounded-2xl h-[400px] flex justify-center items-center">
                        <div className="max-w-[730px] p-5 md:px-0">
                            <h2 className="text-2xl md:text-[30px] font-bold text-[#ffc107] mb-6">
                                Specialized Safeguarding
                            </h2>
                            <ul className="list-disc pl-5 text-[#4a4a4a] md:text-[15px] leading-relaxed space-y-5" style={{ letterSpacing: ".5px" }}>
                                <li>
                                    NYSTAI integrates CCTV, alarms, and advanced automation into a wired setup designed for large-scale industrial environments, ensuring stable and uninterrupted operation.
                                </li>
                                <li>
                                    Our solutions include solar-powered systems that reduce energy costs, improve efficiency, and support long-term sustainability for industrial facilities.
                                </li>
                                <li>
                                    With live monitoring and proactive control systems, industries can prevent issues, enhance safety, and optimize operations—all managed from a single centralized platform.
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Icons */}
                <div className="flex items-center justify-center py-7 mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
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
                                <h3 className="text-[#dc3545] font-bold text-xl mb-3 tracking-wide">
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
        <section className="py-16 bg-[#2c2c2c] rounded-xl mt-10">

            {/* Header */}
            <div className="text-center mb-5">
                <h2 className="text-[30px] font-bold text-[#ffc107] mb-2">
                    WHAT WE OFFER
                </h2>
                <p className="text-[15px] text-gray-400 tracking-wider">
                    The subtext helps customers quickly understand the value or specific
                </p>
            </div>

            {/* Card Wrapper */}
            <div className="relative p-20 overflow-hidden max-w-[1540px] mx-auto">

                {/* LEFT SIDE SLANTED BACKGROUND */}
                <div className="slanted-panel absolute top-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#ded6c0] z-0"></div>

                {/* Content Grid */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-0">

                    {/* Image */}
                    <div className="flex justify-center lg:justify-start">
                        <img
                            src={tiltimg}
                            alt="Warehouse Safety"
                            className="h-[570px] rounded-2xl shadow-lg"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="text-[#1e1e1e] max-w-[520px]">
                        <h3 className="text-[28px] font-bold mb-4 leading-snug">
                            How NYSTAI Products <br />
                            Resolve These Issues <br />
                            for Warehouse
                        </h3>

                        <p className="text-[15px] leading-7 text-gray-700">
                            NYSTAI’s warehouse safety solutions feature alert systems,
                            emergency lighting, & advanced devices that protect workers
                            & equipment in real time. By improving visibility &
                            communication, NYSTAI reduces accidents & ensures safe,
                            efficient warehouse operations.
                        </p>
                    </div>

                </div>
            </div>

        </section>
    );
}

function SectionFour() {
    const features = [
        {
            icon: featureicon,
            title: "Advanced Surveillance",
            description: "Ensure safety with real-time monitoring, intelligent CCTV, and access control systems."
        },
        {
            icon: featureicon,
            title: "Advanced Surveillance",
            description: "Ensure safety with real-time monitoring, intelligent CCTV, and access control systems."
        },
        {
            icon: featureicon,
            title: "Advanced Surveillance",
            description: "Ensure safety with real-time monitoring, intelligent CCTV, and access control systems."
        },
        {
            icon: featureicon,
            title: "Advanced Surveillance",
            description: "Ensure safety with real-time monitoring, intelligent CCTV, and access control systems."
        },
        {
            icon: featureicon,
            title: "Advanced Surveillance",
            description: "Ensure safety with real-time monitoring, intelligent CCTV, and access control systems."
        }
    ];
    return (
        <>
            <section className="max-w-[1540px] mx-auto px-4">
                {/* Header */}
                <div className="text-center py-16">
                    <h2 className="text-[30px] font-bold text-[#dc3545] mb-2">
                        FEATURES
                    </h2>
                    <p className="text-[15px] text-gray-600 tracking-wider">
                        The subtext helps customers quickly understand the value or specific
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 pb-16">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center bg-[#f5f5f5] p-7 rounded-xl">
                            <div className="w-15 h-15 flex items-center justify-center mb-6">
                                <img src={feature.icon} alt="feature icon" className="w-full h-full object-contain" />
                            </div>
                            <h3 className="text-[20px] font-semibold mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-[15px] text-gray-600">
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
            <section className="max-w-[1540px] mx-auto px-4 mb-7">
                <div className="relative h-[600px] lg:h-[600px] rounded-xl overflow-hidden">
                    {/* Background Image */}
                    <img
                        src={overlayimg}
                        alt="Warehouse worker with tablet in safety gear"
                        className="w-full h-full object-cover"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* Content Card - Bottom Left */}
                    <div className="absolute bottom-8 left-8 bg-white rounded-xl p-8 lg:p-10 max-w-xl">
                        <h2 className="text-2xl lg:text-[30px] font-bold text-[#dc3545] mb-6">
                            How NYSTAI Products Resolve These Issues
                        </h2>

                        <p className="text-gray-600 text-sm lg:text-[14px] mb-8 leading-relaxed">
                            NYSTAI's warehouse safety solutions feature alert systems, emergency lighting, & advanced devices that protect workers
                        </p>

                        <div className="grid grid-cols-2 gap-4 lg:gap-6">
                            <div className="bg-[#f9f9f9] rounded-2xl p-4 lg:p-6">
                                <div className="text-2xl lg:text-[22px] font-bold text-[#dc3545] mb-2">
                                    120%
                                </div>
                                <p className="text-gray-700 text-xs lg:text-[14px]">
                                    Certified folding performance is assured by this hinge
                                </p>
                            </div>

                            <div className="bg-[#f9f9f9] rounded-2xl p-4 lg:p-6">
                                <div className="text-xl lg:text-[22px] font-bold text-[#dc3545] mb-2">
                                    16mbph
                                </div>
                                <p className="text-gray-700 text-xs lg:text-[14px]">
                                    Certified folding performance is assured by this hinge
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}