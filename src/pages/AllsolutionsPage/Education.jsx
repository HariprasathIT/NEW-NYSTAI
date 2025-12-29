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
import icon1 from "../../assets/Images/Allsolutions-Images/Education/icon1.png"
import icon2 from "../../assets/Images/Allsolutions-Images/Education/icon2.png"
import icon3 from "../../assets/Images/Allsolutions-Images/Education/icon3.png"
import icon4 from "../../assets/Images/Allsolutions-Images/Education/icon4.png"


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
                        <div className="text-center sm:py-16 py-8 md:py-12 lg:py-16">
                            <h2 className="text-[18px] md:text-[28px] lg:text-[30px] font-bold text-red-600 mb-2">
                                NYSTAI'S INTERACTIVE FLAT-PANEL DISPLAY (IFPD)
                            </h2>
                            <p className="text-[14px] md:text-[15px] text-gray-600 tracking-wider">
                                Smart classroom solutions designed for interactive and engaging learning
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
                                    Smart Classroom Technology
                                </h2>

                                <ul className="list-disc pl-6 text-gray-700 text-sm lg:text-[15px] leading-relaxed space-y-4 lg:space-y-5 tracking-wide">
                                    <li>
                                        Interactive Flat Panel Displays enable touch-based teaching, digital writing, and multimedia learning in classrooms.
                                    </li>
                                    <li>
                                        Teachers and students can collaborate easily using live screen sharing, annotations, and interactive content.
                                    </li>
                                    <li>
                                        Centralized digital control improves classroom efficiency and enhances the overall learning experience.
                                    </li>
                                </ul>

                            </div>
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
        <>
            <section className="max-w-[1540px] mx-auto px-4 sm:px-4 lg:px-4">

                {/* Header */}
                <div className="text-center sm:py-16 py-8 md:py-12 lg:py-16">
                    <h2 className="text-[18px] md:text-[28px] lg:text-[30px] font-bold text-red-600 mb-2">
                        WHAT WE OFFER
                    </h2>
                    <p className="text-[14px] md:text-[15px] text-gray-600 tracking-wider px-4">
                        Smart tools that enhance teaching and learning
                    </p>
                </div>

                {/* Video Card 1 */}
                <div
                    className="relative max-w-[1340px] mx-auto rounded-lg sm:rounded-xl overflow-hidden mb-4 sm:mb-6 md:mb-7"
                    style={{ position: "sticky", top: "100px" }}
                >
                    <video
                        src={video1}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-[350px] sm:h-[350px] md:h-[450px] lg:h-auto object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 sm:p-6 md:p-8 lg:p-10">

                        {/* Glassmorphism Container */}
                        <div className="
                            w-full sm:max-w-[380px] md:max-w-[500px] 
                            p-4 sm:p-6 md:p-8 
                            rounded-lg sm:rounded-xl
                            bg-white/10
                            backdrop-blur-lg
                            border border-white/20
                            shadow-xl
                        ">

                            {/* Heading */}
                            <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-[27px] font-bold mb-3 sm:mb-4 md:mb-5">
                                Challenges in Education Spaces
                            </h2>

                            {/* Paragraph */}
                            <p className="text-gray-200 text-xs sm:text-sm md:text-[15px] lg:text-[16px] mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                                Traditional classrooms struggle with outdated boards, poor audio systems, and lack of digital teaching tools.
                            </p>

                            {/* Glassmorphism Icons */}
                            <div className="flex sm:flex-row gap-3 sm:gap-4 md:gap-6">

                                {/* Item 1 */}
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="
                                        flex items-center justify-center
                                        w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] 
                                        rounded-full
                                        bg-white/15 backdrop-blur-md
                                        border border-white/30
                                        shadow-lg
                                        flex-shrink-0
                                    ">
                                        <ShieldCheck size={18} className="text-white sm:w-5 sm:h-5" />
                                    </div>
                                    <span className="text-white text-xs sm:text-sm font-medium">
                                        Data Security
                                    </span>
                                </div>

                                {/* Item 2 */}
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="
                                        flex items-center justify-center
                                        w-[40px] h-[40px] sm:w-[45px] sm:h-[45px]
                                        rounded-full
                                        bg-white/15 backdrop-blur-md
                                        border border-white/30
                                        shadow-lg
                                        flex-shrink-0
                                    ">
                                        <ShieldCheck size={18} className="text-white sm:w-5 sm:h-5" />
                                    </div>
                                    <span className="text-white text-xs sm:text-sm font-medium">
                                        Smart Control
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Video Card 2 */}
                <div
                    className="relative max-w-[1440px] mx-auto rounded-lg sm:rounded-xl overflow-hidden mb-4 sm:mb-6 md:mb-7"
                    style={{ position: "sticky", top: "170px" }}
                >
                    <video
                        src={video3}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-[350px] sm:h-[350px] md:h-[450px] lg:h-auto object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 sm:p-6 md:p-8 lg:p-10">

                        {/* Glassmorphism Container */}
                        <div className="
                            w-full sm:max-w-[420px] md:max-w-[500px]
                            p-4 sm:p-6 md:p-8
                            rounded-lg sm:rounded-xl
                            bg-white/10
                            backdrop-blur-lg
                            border border-white/20
                            shadow-xl
                        ">

                            {/* Heading */}
                            <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-[27px] font-bold mb-3 sm:mb-4 md:mb-5">
                                Smart Education Requirements
                            </h2>

                            {/* Paragraph */}
                            <p className="text-gray-200 text-xs sm:text-sm md:text-[15px] lg:text-[16px] mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                                Modern education needs IFPDs, digital boards, strong audio communication, and easy classroom management tools.
                            </p>

                            {/* Glassmorphism Icons */}
                            <div className="flex sm:flex-row gap-3 sm:gap-4 md:gap-6">

                                {/* Item 1 */}
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="
                                        flex items-center justify-center
                                        w-[40px] h-[40px] sm:w-[45px] sm:h-[45px]
                                        rounded-full
                                        bg-white/15 backdrop-blur-md
                                        border border-white/30
                                        shadow-lg
                                        flex-shrink-0
                                    ">
                                        <ShieldCheck size={18} className="text-white sm:w-5 sm:h-5" />
                                    </div>
                                    <span className="text-white text-xs sm:text-sm font-medium">
                                        Data Security
                                    </span>
                                </div>

                                {/* Item 2 */}
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="
                                        flex items-center justify-center
                                        w-[40px] h-[40px] sm:w-[45px] sm:h-[45px]
                                        rounded-full
                                        bg-white/15 backdrop-blur-md
                                        border border-white/30
                                        shadow-lg
                                        flex-shrink-0
                                    ">
                                        <ShieldCheck size={18} className="text-white sm:w-5 sm:h-5" />
                                    </div>
                                    <span className="text-white text-xs sm:text-sm font-medium">
                                        Smart Control
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Video Card 3 */}
                <div className="relative max-w-[1540px] mx-auto rounded-lg sm:rounded-xl overflow-hidden">
                    <video
                        src={video1}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-[350px] sm:h-[350px] md:h-[450px] lg:h-auto object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 sm:p-6 md:p-8 lg:p-10">

                        {/* Glassmorphism Container */}
                        <div className="
                            w-full sm:max-w-[460px] md:max-w-[550px]
                            p-4 sm:p-6 md:p-8
                            rounded-lg sm:rounded-xl
                            bg-white/10
                            backdrop-blur-lg
                            border border-white/20
                            shadow-xl
                        ">

                            {/* Heading */}
                            <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-[27px] font-bold mb-3 sm:mb-4 md:mb-5">
                                How Nystai Helps
                            </h2>

                            {/* Paragraph */}
                            <p className="text-gray-200 text-xs sm:text-sm md:text-[15px] lg:text-[16px] mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                               Nystai transforms classrooms using interactive displays, wireless microphones, broadcasting systems, and digital teaching tools that enhance the learning experience for both teachers and students.
                            </p>

                            {/* Glassmorphism Icons */}
                            <div className="flex sm:flex-row gap-3 sm:gap-4 md:gap-6">

                                {/* Item 1 */}
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="
                                        flex items-center justify-center
                                        w-[40px] h-[40px] sm:w-[45px] sm:h-[45px]
                                        rounded-full
                                        bg-white/15 backdrop-blur-md
                                        border border-white/30
                                        shadow-lg
                                        flex-shrink-0
                                    ">
                                        <ShieldCheck size={18} className="text-white sm:w-5 sm:h-5" />
                                    </div>
                                    <span className="text-white text-xs sm:text-sm font-medium">
                                        Data Security
                                    </span>
                                </div>

                                {/* Item 2 */}
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="
                                        flex items-center justify-center
                                        w-[40px] h-[40px] sm:w-[45px] sm:h-[45px]
                                        rounded-full
                                        bg-white/15 backdrop-blur-md
                                        border border-white/30
                                        shadow-lg
                                        flex-shrink-0
                                    ">
                                        <ShieldCheck size={18} className="text-white sm:w-5 sm:h-5" />
                                    </div>
                                    <span className="text-white text-xs sm:text-sm font-medium">
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
            <section className="max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center sm:py-16 py-8 md:py-12 lg:py-16">
                    <h2 className="text-[18px] md:text-[28px] lg:text-[30px] font-bold text-red-600 mb-1 sm:mb-2">
                        FEATURES
                    </h2>
                    <p className="text-[14px] md:text-[15px] text-gray-600 tracking-wide sm:tracking-wider px-4">
                        Features that enhance teaching, collaboration, and classroom engagement
                    </p>
                </div>

                {/* LEFT 6 AND RIGHT 6 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 pb-8 sm:pb-12 md:pb-16">
                    {/* Left Side - Image */}
                    <div className="flex items-center justify-center order-2 lg:order-1">
                        <img
                            src={ifpd2}
                            alt="Person watching cinema content"
                            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[625px] rounded-lg object-cover"
                        />
                    </div>

                    {/* Right Side - Features List */}
                    <div className="flex flex-col justify-center space-y-5 sm:space-y-6 md:space-y-8 order-1 lg:order-2">
                        {/* Feature 1 */}
                        <div>
                            <h3 className="text-sm sm:text-base md:text-[17px] font-semibold text-[#ffc107] mb-2 sm:mb-3">
                                01. Adaptable Platform
                            </h3>
                            <div className="border-l-2 sm:border-l-4 border-gray-300 pl-3 sm:pl-4 min-h-[40px] sm:min-h-[50px]">
                                <p className="text-gray-700 text-xs sm:text-sm md:text-[15px] leading-relaxed">
                                    NYSTAI's IFPD allows users to install their own devices and displays, offering a customizable solution for various needs.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div>
                            <h3 className="text-sm sm:text-base md:text-[17px] font-semibold text-[#ffc107] mb-2 sm:mb-3">
                                02. Seamless Integration
                            </h3>
                            <div className="border-l-2 sm:border-l-4 border-gray-300 pl-3 sm:pl-4 min-h-[40px] sm:min-h-[50px]">
                                <p className="text-gray-700 text-xs sm:text-sm md:text-[15px] leading-relaxed">
                                    Provides a flexible foundation for both education and industry, supporting dynamic learning and efficient meetings.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div>
                            <h3 className="text-sm sm:text-base md:text-[17px] font-semibold text-[#ffc107] mb-2 sm:mb-3">
                                03. Ultra-Clear Display
                            </h3>
                            <div className="border-l-2 sm:border-l-4 border-gray-300 pl-3 sm:pl-4 min-h-[40px] sm:min-h-[50px]">
                                <p className="text-gray-700 text-xs sm:text-sm md:text-[15px] leading-relaxed">
                                    Enhances engagement and collaboration with a visually stunning display
                                </p>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div>
                            <h3 className="text-sm sm:text-base md:text-[17px] font-semibold text-[#ffc107] mb-2 sm:mb-3">
                                04. Real-Time Content Sharing
                            </h3>
                            <div className="border-l-2 sm:border-l-4 border-gray-300 pl-3 sm:pl-4 min-h-[40px] sm:min-h-[50px]">
                                <p className="text-gray-700 text-xs sm:text-sm md:text-[15px] leading-relaxed">
                                    Enables interactive communication with multi-touch capabilities and device integration.
                                </p>
                            </div>
                        </div>

                        {/* Feature 5 */}
                        <div>
                            <h3 className="text-sm sm:text-base md:text-[17px] font-semibold text-[#ffc107] mb-2 sm:mb-3">
                                05. Versatile Use
                            </h3>
                            <div className="border-l-2 sm:border-l-4 border-gray-300 pl-3 sm:pl-4 min-h-[40px] sm:min-h-[50px]">
                                <p className="text-gray-700 text-xs sm:text-sm md:text-[15px] leading-relaxed">
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
                <div className="text-center sm:py-16 py-8 md:py-12 lg:py-16">
                    <h2 className="text-[18px] md:text-[28px] lg:text-[30px] font-bold text-red-600 mb-2">
                        WHERE WE USE
                    </h2>
                    <p className="text-[14px] md:text-[15px] text-gray-600 tracking-wider">
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
                                    <h4 className="text-[18px] sm:text-2xl font-bold mb-2">
                                        College Classroom
                                    </h4>

                                    <p className="text-white/90 text-[14px] sm:text-[17px] leading-relaxed 
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
                                    <h4 className="text-[18px] sm:text-2xl font-bold mb-2">
                                        Industry board room
                                    </h4>

                                    <p className="text-white/90 text-[14px] sm:text-[17px] leading-relaxed 
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
                                <h3 className="text-[18px] sm:text-3xl font-bold mb-3">School Classroom</h3>

                                <p className="text-white/90 text-[14px] sm:text-[17px] leading-relaxed 
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