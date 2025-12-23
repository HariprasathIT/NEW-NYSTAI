import { useState, useEffect } from 'react'

import { Home, ShieldCheck, Cpu } from 'lucide-react';

import educationbanner from "../../assets/Images/Allsolutions-Images/Education/educationbanner.jpeg"

import ifpd2 from "../../assets/Images/Allsolutions-Images/Education/IFPD_2.webp"

import ser1 from "../../assets/Images/Allsolutions-Images/Education/ser1.jpeg"
import ser2 from "../../assets/Images/Allsolutions-Images/Education/ser2.jpeg"
import ser3 from "../../assets/Images/Allsolutions-Images/Education/ser3.jpeg"

import solu from "../../assets/Images/Allsolutions-Images/Education/solu.webp"

import video1 from "../../assets/Images/Allsolutions-Images/Education/video1.mp4"
import video3 from "../../assets/Images/Allsolutions-Images/Education/video3.mp4"


import leftimg1 from "../../assets/Images/Allsolutions-Images/Education/leftimg1.jpeg"
import icon1 from "../../assets/Images/Allsolutions-Images/Industry/icon1.png"
import icon2 from "../../assets/Images/Allsolutions-Images/Industry/icon2.png"
import icon3 from "../../assets/Images/Allsolutions-Images/Industry/icon3.png"
import icon4 from "../../assets/Images/Allsolutions-Images/Industry/icon4.png"


const Education = () => {

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

export default Education


function Hero() {
    return (
        <>
            {/* CATEGORY BANNER */}
            <section className="relative w-full">
                {/* Banner Image */}
                <img
                    src={educationbanner}
                    alt="Category Banner"
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
                <div className="absolute top-0 left-0 w-full h-full flex items-center px-6 sm:px-10 md:px-[80px]">
                    <div className="max-w-xl text-left">

                        {/* Title */}
                        <h1 className="text-2xl sm:text-3xl md:text-[37px] font-bold text-[#474747] leading-snug">
                            Smart Education Solutions
                        </h1>

                        {/* Divider */}
                        <div className="w-32 sm:w-40 h-[3px] border-b border-dotted mt-3 sm:mt-4 border-[#474747]" />

                        {/* Description */}
                        <p className="mt-3 sm:mt-4 text-[#474747] text-xs sm:text-sm md:text-base leading-relaxed">
                            IoT-powered education infrastructure that enhances learning,
                            improves safety, and enables smarter campus management.
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
                            Explore Nystai Solutions
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
            title: "INTERACTIVITY",
            description: "Touch-based smart classroom displays",
            color: "orange"
        },
        {
            icon: icon2,
            title: "COLLABORATION",
            description: "Live content sharing and teamwork",
            color: "orange"
        },
        {
            icon: icon3,
            title: "VISIBILITY",
            description: "Clear displays for every learner",
            color: "orange"
        },
        {
            icon: icon4,
            title: "DIGITAL CONTROL",
            description: "Centralized classroom device control",
            color: "orange"
        }
    ];

    return (
        <>
            <section className="max-w-[1540px] mx-auto px-4">
                <div>
                    <div>
                        {/* Header */}
                        <div className="text-center py-16">
                            <h2 className="text-[30px] font-bold text-red-600 mb-2">NYSTAI'S INTERACTIVE FLAT-PANEL DISPLAY (IFPD)</h2>
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
        <>
            <section className="max-w-[1540px] mx-auto  px-4">

                {/* Header */}
                <div className="text-center py-16">
                    <h2 className="text-[30px] font-bold text-red-600 mb-2">
                        WHAT WE OFFER
                    </h2>
                    <p className="text-[15px] text-gray-600 tracking-wider">
                        The subtext helps customers quickly understand the value or specific
                    </p>
                </div>

                <div
                    className="relative max-w-[1340px] mx-auto rounded-xl overflow-hidden"
                    style={{ position: "sticky", top: "100px" }}
                >
                    {/* Background Video */}
                    <video
                        src={video1}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-10">

                        {/* Glassmorphism Container */}
                        <div className="
                            max-w-[450px] p-8 rounded-xl
                            bg-white/10
                            backdrop-blur-lg
                            border border-white/20
                            shadow-xl
                        ">

                            {/* Heading */}
                            <h2 className="text-white text-2xl md:text-[27px] font-bold mb-5">
                                Smart • Secure • Scalable
                            </h2>

                            {/* Paragraph */}
                            <p className="text-gray-200 max-w-2xl text-sm md:text-[16px] mb-6 leading-relaxed">
                                Empowering intelligent infrastructure with advanced security,
                                seamless automation, and scalable IoT solutions.
                            </p>

                            {/* Glassmorphism Icons */}
                            <div className="flex gap-6">

                                {/* Item 1 */}
                                <div className="flex items-center gap-4">
                                    <div className="
                                        flex items-center justify-center
                                        w-[45px] h-[45px] rounded-full
                                        bg-white/15 backdrop-blur-md
                                        border border-white/30
                                        shadow-lg
                                    ">
                                        <ShieldCheck size={20} className="text-white" />
                                    </div>
                                    <span className="text-white text-sm font-medium">
                                        Data Security
                                    </span>
                                </div>

                                {/* Item 2 */}
                                <div className="flex items-center gap-4">
                                    <div className="
                                        flex items-center justify-center
                                        w-[45px] h-[45px] rounded-full
                                        bg-white/15 backdrop-blur-md
                                        border border-white/30
                                        shadow-lg
                                    ">
                                        <ShieldCheck size={20} className="text-white" />
                                    </div>
                                    <span className="text-white text-sm font-medium">
                                        Smart Control
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative max-w-[1440px] mx-auto rounded-xl overflow-hidden mt-7" style={{ position: "sticky", top: "150px" }}>
                    <video
                        src={video3}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-10">

                        {/* Glassmorphism Container */}
                        <div className="
                            max-w-[500px] p-8 rounded-xl
                            bg-white/10
                            backdrop-blur-lg
                            border border-white/20
                            shadow-xl
                        ">

                            {/* Heading */}
                            <h2 className="text-white text-2xl md:text-[27px] font-bold mb-5">
                                Smart • Secure • Scalable
                            </h2>

                            {/* Paragraph */}
                            <p className="text-gray-200 max-w-2xl text-sm md:text-[16px] mb-6 leading-relaxed">
                                Empowering intelligent infrastructure with advanced security,
                                seamless automation, and scalable IoT solutions.
                            </p>

                            {/* Glassmorphism Icons */}
                            <div className="flex gap-6">

                                {/* Item 1 */}
                                <div className="flex items-center gap-4">
                                    <div className="
                                        flex items-center justify-center
                                        w-[45px] h-[45px] rounded-full
                                        bg-white/15 backdrop-blur-md
                                        border border-white/30
                                        shadow-lg
                                    ">
                                        <ShieldCheck size={20} className="text-white" />
                                    </div>
                                    <span className="text-white text-sm font-medium">
                                        Data Security
                                    </span>
                                </div>

                                {/* Item 2 */}
                                <div className="flex items-center gap-4">
                                    <div className="
                                        flex items-center justify-center
                                        w-[45px] h-[45px] rounded-full
                                        bg-white/15 backdrop-blur-md
                                        border border-white/30
                                        shadow-lg
                                    ">
                                        <ShieldCheck size={20} className="text-white" />
                                    </div>
                                    <span className="text-white text-sm font-medium">
                                        Smart Control
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative max-w-[1540px] mx-auto rounded-xl overflow-hidden mt-7">
                    <video
                        src={video1}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-10">

                        {/* Glassmorphism Container */}
                        <div className="
                            max-w-[550px] p-8 rounded-xl
                            bg-white/10
                            backdrop-blur-lg
                            border border-white/20
                            shadow-xl
                        ">

                            {/* Heading */}
                            <h2 className="text-white text-2xl md:text-[27px] font-bold mb-5">
                                Smart • Secure • Scalable
                            </h2>

                            {/* Paragraph */}
                            <p className="text-gray-200 max-w-2xl text-sm md:text-[16px] mb-6 leading-relaxed">
                                Empowering intelligent infrastructure with advanced security,
                                seamless automation, and scalable IoT solutions.
                            </p>

                            {/* Glassmorphism Icons */}
                            <div className="flex gap-6">

                                {/* Item 1 */}
                                <div className="flex items-center gap-4">
                                    <div className="
                                        flex items-center justify-center
                                        w-[45px] h-[45px] rounded-full
                                        bg-white/15 backdrop-blur-md
                                        border border-white/30
                                        shadow-lg
                                    ">
                                        <ShieldCheck size={20} className="text-white" />
                                    </div>
                                    <span className="text-white text-sm font-medium">
                                        Data Security
                                    </span>
                                </div>

                                {/* Item 2 */}
                                <div className="flex items-center gap-4">
                                    <div className="
                                        flex items-center justify-center
                                        w-[45px] h-[45px] rounded-full
                                        bg-white/15 backdrop-blur-md
                                        border border-white/30
                                        shadow-lg
                                    ">
                                        <ShieldCheck size={20} className="text-white" />
                                    </div>
                                    <span className="text-white text-sm font-medium">
                                        Smart Control
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

function SectionFour() {
    return (
        <>
            <section className="max-w-[1540px] mx-auto px-4">
                {/* Header */}
                <div className="text-center py-16">
                    <h2 className="text-[30px] font-bold text-red-600 mb-2">
                        FEATURES
                    </h2>
                    <p className="text-[15px] text-gray-600 tracking-wider">
                        The subtext helps customers quickly understand the value or specific
                    </p>
                </div>

                {/* LEFT 6 AND RIGHT 6 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Left Side - Image */}
                    <div className="flex items-center justify-center">
                        <img
                            src={ifpd2}
                            alt="Person watching cinema content"
                            className="w-full h-[625px] rounded-lg"
                            style={{ objectFit: "cover" }}
                        />
                    </div>

                    {/* Right Side - Features List */}
                    <div className="flex flex-col justify-center space-y-8">
                        {/* Feature 1 */}
                        <div>
                            <h3 className="text-[17px] font-semibold text-[#ffc107] mb-3">
                                01. Adaptable Platform
                            </h3>
                            <div className="border-l-4 border-gray-300 pl-4 h-[50px]">
                                <p className="text-gray-700 text-[15px]">
                                    NYSTAI's IFPD allows users to install their own devices and displays, offering a customizable solution for various needs.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div>
                            <h3 className="text-[17px] font-semibold text-[#ffc107] mb-3">
                                02. Seamless Integration
                            </h3>
                            <div className="border-l-4 border-gray-300 pl-4 h-[50px]">
                                <p className="text-gray-700 text-[15px]">
                                    Provides a flexible foundation for both education and industry, supporting dynamic learning and efficient meetings.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div>
                            <h3 className="text-[17px] font-semibold text-[#ffc107] mb-3">
                                03. Ultra-Clear Display
                            </h3>
                            <div className="border-l-4 border-gray-300 pl-4 h-[50px]">
                                <p className="text-gray-700 text-[15px]">
                                    Enhances engagement and collaboration with a visually stunning display
                                </p>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div>
                            <h3 className="text-[17px] font-semibold text-[#ffc107] mb-3">
                                04. Real-Time Content Sharing
                            </h3>
                            <div className="border-l-4 border-gray-300 pl-4 h-[50px]">
                                <p className="text-gray-700 text-[15px]">
                                    Enables interactive communication with multi-touch capabilities and device integration.
                                </p>
                            </div>
                        </div>

                        {/* Feature 5 */}
                        <div>
                            <h3 className="text-[17px] font-semibold text-[#ffc107] mb-3">
                                05. Versatile Use
                            </h3>
                            <div className="border-l-4 border-gray-300 pl-4 h-[50px]">
                                <p className="text-gray-700 text-[15px]">
                                    Suitable for classrooms, boardrooms, and beyond, transforming spaces into dynamic, collaborative environments.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

function SectionFive() {
    return (
        <>
            <section className="max-w-[1540px] mx-auto px-4 mb-10">
                {/* Header */}
                <div className="text-center py-16">
                    <h2 className="text-[30px] font-bold text-red-600 mb-2">
                        WHERE WE USE
                    </h2>
                    <p className="text-[15px] text-gray-600 tracking-wider">
                        NYSTAI's IFPD enhances learning in schools, fosters collaboration in colleges and facilitates efficient meetings in industries.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* LEFT — TWO SMALL CARDS */}
                    <div className="flex flex-col gap-6 order-2 lg:order-1">

                        {/* TOP CARD */}
                        <div className="relative rounded-xl overflow-hidden 
            h-[220px] sm:h-[260px] md:h-[300px] lg:h-[288px] 
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
                                    <h4 className="text-xl sm:text-2xl font-bold mb-2">
                                        College Classroom
                                    </h4>

                                    <p className="text-white/90 text-sm sm:text-[17px] leading-relaxed 
                  transition-all duration-700 ease-out 
                  max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100">
                                        Foster teamwork and communication across departments, building stronger
                                        connections that drive productivity and innovation.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* BOTTOM CARD */}
                        <div className="relative rounded-xl overflow-hidden 
            h-[220px] sm:h-[260px] md:h-[300px] lg:h-[288px] 
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
                                    <h4 className="text-xl sm:text-2xl font-bold mb-2">
                                        Industry board room
                                    </h4>

                                    <p className="text-white/90 text-sm sm:text-[17px] leading-relaxed 
                  transition-all duration-700 ease-out 
                  max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100">
                                        Transform raw data into actionable insights that empower your
                                        decision-making and reveal hidden opportunities.
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
                                <h3 className="text-2xl sm:text-3xl font-bold mb-3">School Classroom</h3>

                                <p className="text-white/90 text-sm sm:text-[17px] leading-relaxed 
                transition-all duration-1000 ease-out 
                max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100">
                                    We develop comprehensive strategies tailored to your business needs,
                                    ensuring sustainable growth and competitive advantage.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>


            </section>
        </>
    )
}