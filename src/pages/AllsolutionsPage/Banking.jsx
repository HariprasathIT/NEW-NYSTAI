import { useState, useEffect } from 'react'

import bankingbanner from "../../assets/Images/Allsolutions-Images/Banking/bankingbanner.png"

import leftimg1 from "../../assets/Images/Allsolutions-Images/Banking/leftimg1.jpeg"

import icon1 from "../../assets/Images/Allsolutions-Images/Banking/icon1.png"
import icon2 from "../../assets/Images/Allsolutions-Images/Banking/icon2.png"
import icon3 from "../../assets/Images/Allsolutions-Images/Banking/icon3.png"
import icon4 from "../../assets/Images/Allsolutions-Images/Banking/icon4.png"

import gridimg1 from "../../assets/Images/Allsolutions-Images/Banking/gridimg1.jpeg"
import gridimg2 from "../../assets/Images/Allsolutions-Images/Banking/gridimg2.jpeg"
import gridimg3 from "../../assets/Images/Allsolutions-Images/Banking/gridimg3.jpeg"
import gridimg4 from "../../assets/Images/Allsolutions-Images/Banking/gridimg4.jpeg"

import featureicon1 from "../../assets/Images/Allsolutions-Images/Banking/features-icon1.png"
import featureicon2 from "../../assets/Images/Allsolutions-Images/Banking/features-icon2.png"
import featureicon3 from "../../assets/Images/Allsolutions-Images/Banking/features-icon3.png"
import featureicon4 from "../../assets/Images/Allsolutions-Images/Banking/features-icon4.png"
import featureicon5 from "../../assets/Images/Allsolutions-Images/Banking/features-icon5.png"

const Banking = () => {

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

export default Banking


function Hero() {
    return (
        <>
            {/* CATEGORY BANNER */}
            <section className="relative w-full">

                {/* Banner Image */}
                <img
                    src={bankingbanner}
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
                            Smart Banking Solutions
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
                            Intelligent banking infrastructure delivering enhanced security,
                            real-time surveillance, and seamless customer experience.
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
                            Explore Banking Solutions
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
            title: "SECURE VIGILANCE",
            description: "24/7 CCTV monitoring for bank premises",
            color: "orange"
        },
        {
            icon: icon2,
            title: "SMART LOCKERS",
            description: "Digitally secured locker systems",
            color: "orange"
        },
        {
            icon: icon3,
            title: "ACCESS AUTHORIZATION",
            description: "Controlled entry for restricted areas",
            color: "orange"
        },
        {
            icon: icon4,
            title: "THREAT PREVENTION",
            description: "Burglar alarms and risk reduction",
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
                            NYSTAI’S BANKING SOLUTION
                        </h2>
                        <p className="text-[14px] md:text-[15px] text-gray-600 tracking-wider">
                            Advanced security and automation solutions designed for modern banking environments
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
                                Intelligent Banking Security
                            </h2>

                            <ul className="list-disc pl-6 text-gray-700 text-sm lg:text-[15px] leading-relaxed space-y-4 lg:space-y-5 tracking-wide">
                                <li>
                                    NYSTAI deploys CCTV surveillance and burglar alarm systems to protect banking halls, vaults, and ATMs.
                                </li>
                                <li>
                                    Smart lockers and access control systems ensure secure handling of valuables and restricted areas.
                                </li>
                                <li>
                                    Centralized monitoring enables instant alerts, rapid response, and enhanced operational security.
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
                    WHAT WE OFFER
                </h2>
                <p className="text-[14px] md:text-[15px] text-gray-600 tracking-wider">
                    Secure solutions designed to protect assets and manage banking operations
                </p>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Left – Tall Image */}
                <div className="md:row-span-2 rounded-xl overflow-hidden">
                    <img
                        src={gridimg1}
                        alt="Security Camera"
                        className="w-full h-[300px] md:h-[600px] object-cover"
                    />
                </div>

                {/* Middle Top */}
                <div className="rounded-xl overflow-hidden">
                    <img
                        src={gridimg2}
                        alt="Growth"
                        className="w-full h-[300px] md:h-[365px] object-cover"
                    />
                </div>

                {/* Right – Tall Image */}
                <div className="md:row-span-2 rounded-xl overflow-hidden">
                    <img
                        src={gridimg3}
                        alt="Savings"
                        className="w-full h-[300px] md:h-[600px] object-cover"
                    />
                </div>

                {/* Middle Bottom */}
                <div className="rounded-xl overflow-hidden">
                    <img
                        src={gridimg4}
                        alt="Smart Home"
                        className="w-full h-[300px] md:h-[200px] object-cover"
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
            title: "Advanced Surveillance",
            description: "24/7 CCTV monitoring for banks, vaults, and ATM zones."
        },
        {
            icon: featureicon2,
            title: "Smart Locker Systems",
            description: "Digitally controlled lockers with secure authentication."
        },
        {
            icon: featureicon3,
            title: "Access Control",
            description: "Multi-level entry control for restricted banking areas."
        },
        {
            icon: featureicon4,
            title: "Instant Alerts",
            description: "Real-time alerts for unauthorized access or threats."
        },
        {
            icon: featureicon5,
            title: "Risk Management",
            description: "Proactive monitoring to reduce fraud and security risks."
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
                        Key features designed to enhance security and control in banking environments
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