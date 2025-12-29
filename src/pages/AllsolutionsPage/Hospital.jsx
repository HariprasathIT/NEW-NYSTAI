import { useState, useEffect } from 'react'

import hospitalbanner from "../../assets/Images/Allsolutions-Images/Hospital/hospitalbanner.jpeg"

import leftimg1 from "../../assets/Images/Allsolutions-Images/Hospital/leftimg1.jpeg"

import ser1 from "../../assets/Images/Allsolutions-Images/Hospital/cardimgone.jpeg"
import ser2 from "../../assets/Images/Allsolutions-Images/Hospital/cardimgtwo.jpeg"
import ser3 from "../../assets/Images/Allsolutions-Images/Hospital/cardimgthree.jpeg"

import icon1 from "../../assets/Images/Allsolutions-Images/Hospital/icon1.png"
import icon2 from "../../assets/Images/Allsolutions-Images/Hospital/icon2.png"
import icon3 from "../../assets/Images/Allsolutions-Images/Hospital/icon3.png"
import icon4 from "../../assets/Images/Allsolutions-Images/Hospital/icon4.png"

import { ArrowRight } from 'lucide-react';

import threecardimg1 from "../../assets/Images/Allsolutions-Images/Worship/cardimg1.jpeg"
import threecardimg2 from "../../assets/Images/Allsolutions-Images/Worship/cardimg2.jpeg"
import threecardimg3 from "../../assets/Images/Allsolutions-Images/Worship/cardimg3.jpeg"

import featureicon from "../../assets/Images/Allsolutions-Images/Vms/featureicon.png"

import video1 from "../../assets/Images/Allsolutions-Images/Education/video1.mp4"

const Hospital = () => {

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

export default Hospital


function Hero() {
    return (
        <>
            {/* CATEGORY BANNER */}
            <section className="relative w-full">

                {/* Banner Image */}
                <img
                    src={hospitalbanner}
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
                            Smart Hospital Solutions
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
                            Intelligent healthcare infrastructure that enhances patient safety,
                            streamlines operations, and enables real-time monitoring.
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
                            Explore Hospital Solutions
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
            title: "PATIENT SAFETY",
            description: "Continuous monitoring of critical areas",
            color: "orange"
        },
        {
            icon: icon2,
            title: "SYSTEM INTEGRATION",
            description: "Connected sensors and hospital systems",
            color: "orange"
        },
        {
            icon: icon3,
            title: "EARLY ALERTS",
            description: "Immediate alerts for abnormal conditions",
            color: "orange"
        },
        {
            icon: icon4,
            title: "SMART MANAGEMENT",
            description: "Adaptable solutions for hospital workflows",
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
                            NYSTAI'S HOSPITAL SOLUTION
                        </h2>
                        <p className="text-[14px] md:text-[15px] text-gray-600 tracking-wider">
                            Smart sensor-based solutions for safer and more efficient healthcare environments
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
                                Intelligent Healthcare Safety
                            </h2>

                            <ul className="list-disc pl-6 text-gray-700 text-sm lg:text-[15px] leading-relaxed space-y-4 lg:space-y-5 tracking-wide">
                                <li>
                                    NYSTAI deploys smart sensors and surveillance systems to monitor critical hospital areas in real time.
                                </li>
                                <li>
                                    Environmental sensors help detect fire, gas leaks, temperature changes, and other safety risks early.
                                </li>
                                <li>
                                    Centralized monitoring enables quick alerts, efficient response, and improved patient and staff safety.
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
        <section className="max-w-[1540px] mx-auto px-4 ">
            {/* Header */}
            <div className="text-center sm:py-16 py-8 md:py-12 lg:py-16">
                <h2 className="text-[18px] md:text-[28px] lg:text-[30px] font-bold text-red-600 mb-2">
                    WHAT WE OFFER
                </h2>
                <p className="text-[14px] md:text-[15px] text-gray-600 tracking-wider">
                    The subtext helps customers quickly understand the value or specific
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* LEFT — TWO SMALL CARDS */}
                <div className="flex flex-col gap-6 order-2 lg:order-1">

                    {/* TOP CARD */}
                    <div className="relative rounded-xl overflow-hidden 
            h-[260px] sm:h-[260px] md:h-[300px] lg:h-[288px] 
            group cursor-pointer">

                        <img
                            src={ser1}
                            alt="service"
                            className="absolute inset-0 w-full h-full object-cover 
                transition-transform duration-1000 ease-out group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                        <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 text-white">
                            <div className="transform transition-all duration-700 group-hover:-translate-y-3">
                                <h4 className="text-[18px] sm:text-2xl font-bold mb-2">
                                    Solving the Problem
                                </h4>

                                <p className="text-white/90 text-[14px] sm:text-[17px] leading-relaxed 
                  transition-all duration-700 ease-out 
                  max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100">
                                    Leveraging tech for superior, cutting-edge manufacturing.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM CARD */}
                    <div className="relative rounded-xl overflow-hidden 
            h-[260px] sm:h-[260px] md:h-[300px] lg:h-[288px] 
            group cursor-pointer">

                        <img
                            src={ser2}
                            alt="service"
                            className="absolute inset-0 w-full h-full object-cover 
                transition-transform duration-700 ease-out group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                        <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 text-white">
                            <div className="transform transition-all duration-700 group-hover:-translate-y-3">
                                <h4 className="text-[18px] sm:text-2xl font-bold mb-2">
                                    How NYSTAI Products Resolve These Issue?
                                </h4>

                                <p className="text-white/90 text-[14px] sm:text-[17px] leading-relaxed 
                  transition-all duration-700 ease-out 
                  max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100">
                                    Our dedicated support team ensures seamless integration and ongoing assistance.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT — BIG CARD */}
                <div className="relative rounded-xl overflow-hidden 
          h-[260px] sm:h-[350px] md:h-[450px] lg:h-[600px] 
          group cursor-pointer order-1 lg:order-2">

                    {/* Image */}
                    <img
                        src={ser3}
                        alt="service"
                        className="absolute inset-0 w-full h-full object-cover 
              transition-transform duration-1000 ease-out group-hover:scale-110"
                    />

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 text-white">
                        <div className="transform transition-all duration-1000 group-hover:-translate-y-4">
                            <h3 className="text-[18px] sm:text-3xl font-bold mb-3">Hospitals Lack Innovation</h3>

                            <p className="text-white/90 text-[14px] sm:text-[17px] leading-relaxed 
                transition-all duration-1000 ease-out 
                max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100">
                                Many hospitals still rely on outdated security systems that are inefficient and hard to manage.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
}

function SectionFour() {
    const features = [
        {
            title: "Electronic Health Records (EHR) Management",
            description: "Real-time monitoring of patient vitals with AI-powered insights to support proactive healthcare decisions."
        },
        {
            title: "Seamless Communication",
            description: "Streamlined communication platforms enhance coordination between doctors, nurses, and healthcare staff, ensuring better patient care."
        },
        {
            title: "Telemedicine Integration",
            description: "Supports remote consultations and care delivery, reducing patient wait times and expanding access to healthcare services."
        },
        {
            title: "Advanced Patient Monitoring",
            description: "Digital transformation of patient histories and medical data for seamless access, secure storage, and efficient updates across departments."
        }
    ];
    return (
        <>
            <section className="max-w-[1540px] mx-auto px-4 mb-10">
                {/* Header */}
                <div className="text-center sm:py-16 py-8 md:py-12 lg:py-16">
                    <h2 className="text-[18px] md:text-[28px] lg:text-[30px] font-bold text-red-600 mb-2">
                        FEATURES
                    </h2>
                    <p className="text-[14px] md:text-[15px] text-gray-600 tracking-wider">
                        The subtext helps customers quickly understand the value or specific
                    </p>
                </div>

                {/* Hero Image */}
                <div className="mb-10 rounded-xl overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&h=500&fit=crop"
                        alt="Healthcare Professional with Digital Interface"
                        className="w-full h-[350px] sm:h-[400px] object-cover"
                    />
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-[18px] text-[#212529] font-semibold sm:mb-5 mb-3 min-h-[60px]">
                                {feature.title}
                            </h3>
                            <p className="text-[14px] text-gray-600 leading-relaxed mb-6 flex-grow">
                                {feature.description}
                            </p>
                            <button className="w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors flex items-center justify-center">
                                <ArrowRight className="w-5 h-5 text-white" />
                            </button>
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