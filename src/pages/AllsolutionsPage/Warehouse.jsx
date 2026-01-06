import { useState, useEffect, useRef } from 'react'

import warehousebanner from "../../assets/Images/Allsolutions-Images/Warehouse/warehousebanner.jpeg"

import leftimg1 from "../../assets/Images/Allsolutions-Images/Warehouse/leftimg1.jpg"

import overlayimg from "../../assets/Images/Allsolutions-Images/Warehouse/overlaybigimg.jpeg"

import tiltimg from "../../assets/Images/Allsolutions-Images/Warehouse/tiltimg.png"

import icon1 from "../../assets/Images/Allsolutions-Images/Warehouse/icon1.png"
import icon2 from "../../assets/Images/Allsolutions-Images/Warehouse/icon2.png"
import icon3 from "../../assets/Images/Allsolutions-Images/Warehouse/icon3.png"
import icon4 from "../../assets/Images/Allsolutions-Images/Warehouse/icon4.png"

import gridimg1 from "../../assets/Images/Allsolutions-Images/Banking/gridimg1.jpeg"
import gridimg2 from "../../assets/Images/Allsolutions-Images/Banking/gridimg2.jpeg"
import gridimg3 from "../../assets/Images/Allsolutions-Images/Banking/gridimg3.jpeg"
import gridimg4 from "../../assets/Images/Allsolutions-Images/Banking/gridimg4.jpeg"

import featureicon1 from "../../assets/Images/Allsolutions-Images/Warehouse/features-icon1.png"
import featureicon2 from "../../assets/Images/Allsolutions-Images/Warehouse/features-icon2.png"
import featureicon3 from "../../assets/Images/Allsolutions-Images/Warehouse/features-icon3.png"
import featureicon4 from "../../assets/Images/Allsolutions-Images/Warehouse/features-icon4.png"
import featureicon5 from "../../assets/Images/Allsolutions-Images/Warehouse/features-icon5.png"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Home, ShieldCheck, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);
const Warehouse = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                        h-[70vh]
                        sm:h-[70vh]
                        md:h-[70vh]
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
            title: "ANTI-COLLISION",
            description: "Prevents vehicle and worker accidents",
            color: "orange"
        },
        {
            icon: icon2,
            title: "FORKLIFT CAMERA",
            description: "Improved visibility during operations",
            color: "orange"
        },
        {
            icon: icon3,
            title: "FIRE DETECTION",
            description: "Early fire and smoke detection",
            color: "orange"
        },
        {
            icon: icon4,
            title: "SMART HELMET",
            description: "Real-time worker safety monitoring",
            color: "orange"
        }
    ];

    return (
        <>
            <section className="max-w-[1540px] mx-auto px-4">

                <div>
                    {/* Header */}
                    <div className="text-center sm:py-16 py-8 md:py-12 lg:py-16">
                        <h2 className="text-[18px] md:text-[28px] lg:text-[30px] font-bold text-[#dc3545] mb-2">
                            NYSTAI'S WAREHOUSE SOLUTIONS
                        </h2>
                        <p className="text-[14px] md:text-[15px] text-gray-600 tracking-wider">
                            Smart safety and monitoring solutions designed for modern warehouses
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
                                Warehouse Safety & Intelligence
                            </h2>

                            <ul className="list-disc pl-6 text-gray-700 text-sm lg:text-[15px] leading-relaxed space-y-4 lg:space-y-5 tracking-wide">
                                <li>
                                    Anti-collision systems and forklift cameras help prevent accidents in high-traffic warehouse zones.
                                </li>
                                <li>
                                    Fire detection cameras provide early alerts to protect inventory, infrastructure, and personnel.
                                </li>
                                <li>
                                    Smart helmets and centralized monitoring improve worker safety and operational awareness.
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
    const sectionRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        gsap.set(imageRef.current, {
            transformPerspective: 1000,
            transformOrigin: "center",
        });

        gsap.fromTo(
            imageRef.current,
            {
                rotateY: 0,
            },
            {
                rotateY: 360,
                duration: 1.4,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    once: true,
                },
            }
        );
    }, []);

    return (
        <section ref={sectionRef} className="bg-[#2c2c2c] rounded-xl mt-10">
            {/* Header */}
            <div className="text-center  sm:py-16 py-8 md:py-12 lg:py-16">
                <h2 className="text-[18px] md:text-[28px] lg:text-[30px] font-bold text-[#ffc107] mb-2">
                    WHAT WE OFFER
                </h2>
                <p className="text-[14px] md:text-[15px] text-gray-400 tracking-wider px-4">
                    Systems that help reduce risks and improve safety across warehouse spaces
                </p>
            </div>

            {/* Card Wrapper */}
            <div className="relative p-6 lg:p-20 overflow-hidden max-w-[1540px] mx-auto">
                {/* Desktop slanted panel - hidden on mobile */}
                <div className="slanted-panel absolute top-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#ded6c0] z-0 hidden lg:block"></div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-14">
                    {/* IMAGE SPINS 360 */}
                    <div className="flex justify-center lg:justify-start">
                        <img
                            ref={imageRef}
                            src={tiltimg}
                            alt="Warehouse Safety"
                            className="h-[300px] sm:h-[400px] lg:h-[570px] rounded-2xl shadow-lg will-change-transform"
                        />
                    </div>

                    {/* Text - Yellow background on mobile */}
                    <div className="text-[#1e1e1e] max-w-[520px] bg-[#ded6c0] lg:bg-transparent p-6 lg:p-0 rounded-2xl">
                        <h3 className="text-[18px] lg:text-[28px] font-bold mb-4 leading-snug">
                            How NYSTAI Products <br />
                            Resolve These Issues <br />
                            for Warehouse
                        </h3>
                        <p className="text-[14px] leading-7 text-gray-700">
                            NYSTAI's warehouse safety solutions feature alert systems,
                            emergency lighting, & advanced devices that protect workers
                            & equipment in real time.
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
            icon: featureicon1,
            title: "Smart Surveillance",
            description: "CCTV monitoring for complete warehouse visibility."
        },
        {
            icon: featureicon2,
            title: "Access Control",
            description: "Restricted entry for authorized personnel only."
        },
        {
            icon: featureicon3,
            title: "Anti-Collision Safety",
            description: "Vehicle and worker collision prevention systems."
        },
        {
            icon: featureicon4,
            title: "Hazard Detection",
            description: "Early alerts for fire, smoke, and gas leaks."
        },
        {
            icon: featureicon5,
            title: "Operational Monitoring",
            description: "Real-time tracking of warehouse activities."
        }
    ];

    return (
        <>
            <section className="max-w-[1540px] mx-auto px-4">
                {/* Header */}
                <div className="text-center sm:py-16 py-8 md:py-12 lg:py-16">
                    <h2 className="text-[18px] md:text-[28px] lg:text-[30px] font-bold text-[#dc3545] mb-2">
                        FEATURES
                    </h2>
                    <p className="text-[14px] md:text-[15px] text-gray-600 tracking-wider">
                        Key features designed to improve safety and efficiency in warehouse operations
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
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
        <section className="px-4 sm:mt-14 mt-4 sm:mb-10 mb-4">
            <div className="
                relative
                h-[500px] sm:h-[480px] md:h-[550px] lg:h-[600px]
                rounded-xl
                overflow-hidden
            ">

                {/* Background Image */}
                <img
                    src={overlayimg}
                    alt="Warehouse worker with tablet in safety gear"
                    className="w-full h-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* GLASS CONTENT CARD */}
                <div
                    className="
                        absolute
                        bottom-4 left-4 right-4
                        sm:bottom-6 sm:left-6 sm:right-auto
                        lg:bottom-8 lg:left-8
                        w-auto sm:max-w-lg lg:max-w-xl
                        rounded-xl
                        p-5 sm:p-6 lg:p-10
                        bg-white/10
                        backdrop-blur-xl
                        border border-white/20
                        shadow-2xl
                    "
                >
                    {/* Heading */}
                    <h2 className="
                        text-xl sm:text-2xl lg:text-[25px]
                        font-bold text-[#ffc107]
                        mb-4 sm:mb-6
                    ">
                        How NYSTAI Products Resolve These Issues
                    </h2>

                    {/* Description */}
                    <p className="
                        text-gray-200
                        text-xs sm:text-sm lg:text-[14px]
                        mb-6 sm:mb-8
                        leading-relaxed
                    ">
                        NYSTAI's warehouse safety solutions feature alert systems,
                        emergency lighting, & advanced devices that protect workers.
                    </p>

                    {/* Stats */}
                    <div className="
                        grid grid-cols-2
                        sm:grid-cols-2
                        gap-4 sm:gap-6
                    ">
                        {/* Stat Card */}
                        <div className="
                            rounded-xl
                            p-4 sm:p-5 lg:p-6
                            bg-white/5
                            backdrop-blur-md
                            border border-white/20
                        ">
                            <div className="
                                flex items-center justify-center
                                w-[36px] h-[36px]
                                sm:w-[40px] sm:h-[40px]
                                rounded-full
                                border border-white/30
                                mb-3 sm:mb-4
                            ">
                                <ShieldCheck size={18} className="text-white" />
                            </div>

                            <p className="
                                text-gray-200
                                text-xs sm:text-[13px]
                                leading-relaxed
                            ">
                                Certified folding performance is assured by this hinge
                            </p>
                        </div>

                        {/* Stat Card */}
                        <div className="
                            rounded-xl
                            p-4 sm:p-5 lg:p-6
                            bg-white/5
                            backdrop-blur-md
                            border border-white/20
                        ">
                            <div className="
                                flex items-center justify-center
                                w-[36px] h-[36px]
                                sm:w-[40px] sm:h-[40px]
                                rounded-full
                                border border-white/30
                                mb-3 sm:mb-4
                            ">
                                <ShieldCheck size={18} className="text-white" />
                            </div>

                            <p className="
                                text-gray-200
                                text-xs sm:text-[13px]
                                leading-relaxed
                            ">
                                Certified folding performance is assured by this hinge
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}