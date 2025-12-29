import { useState, useEffect } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import vmsbanner from "../../assets/Images/Allsolutions-Images/Vms/vmsbanner.jpeg"

import { Home, ShieldCheck, Cpu } from 'lucide-react';

import leftimg1 from "../../assets/Images/Allsolutions-Images/Vms/leftimg1.jpeg"

import icon1 from "../../assets/Images/Allsolutions-Images/Vms/icon1.png"
import icon2 from "../../assets/Images/Allsolutions-Images/Vms/icon2.png"
import icon3 from "../../assets/Images/Allsolutions-Images/Vms/icon3.png"
import icon4 from "../../assets/Images/Allsolutions-Images/Vms/icon4.png"

import threecardimg1 from "../../assets/Images/Allsolutions-Images/Worship/cardimg1.jpeg"
import threecardimg2 from "../../assets/Images/Allsolutions-Images/Worship/cardimg2.jpeg"
import threecardimg3 from "../../assets/Images/Allsolutions-Images/Worship/cardimg3.jpeg"

import featureicon1 from "../../assets/Images/Allsolutions-Images/Vms/features-icon1.png"
import featureicon2 from "../../assets/Images/Allsolutions-Images/Vms/features-icon2.png"
import featureicon3 from "../../assets/Images/Allsolutions-Images/Vms/features-icon3.png"
import featureicon4 from "../../assets/Images/Allsolutions-Images/Vms/features-icon4.png"
import featureicon5 from "../../assets/Images/Allsolutions-Images/Vms/features-icon5.png"

import vmsvideo1 from "../../assets/Images/Allsolutions-Images/Vms/vms-video-1.mp4"

const Vms = () => {

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

export default Vms


function Hero() {
    return (
        <>
            {/* CATEGORY BANNER */}
            <section className="relative w-full">

                {/* Banner Image */}
                <img
                    src={vmsbanner}
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
                <div className="
                    absolute inset-0
                    flex items-center
                    justify-start md:justify-end
                    px-6 sm:px-10 md:px-[80px]
                ">
                    <div className="max-w-xl text-left md:text-right">

                        {/* Title */}
                        <h1 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-[#474747] leading-snug">
                            Smart VMS Solutions
                        </h1>

                        {/* Divider */}
                        <div className="
                            w-32 sm:w-40 h-[3px]
                            border-b border-dotted
                            mt-3 sm:mt-4
                            border-[#474747]
                            ml-0 md:ml-auto
                        " />

                        {/* Description */}
                        <p className="mt-3 sm:mt-4 text-[#474747] text-xs sm:text-sm md:text-base leading-relaxed">
                            Advanced video management systems delivering real-time monitoring,
                            AI-powered analytics, and centralized security control.
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
                            Explore VMS Solutions
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
            title: "SMART PARKING",
            description: "Automated parking guidance and monitoring",
            color: "orange"
        },
        {
            icon: icon2,
            title: "ANPR",
            description: "Number plate detection and logging",
            color: "orange"
        },
        {
            icon: icon3,
            title: "ENTRY & EXIT",
            description: "Controlled vehicle access management",
            color: "orange"
        },
        {
            icon: icon4,
            title: "SENSOR INTEGRATION",
            description: "Vehicle presence and space sensing",
            color: "orange"
        }
    ];


    return (
        <>
            <section className="max-w-[1540px] mx-auto px-4">

                {/* Header */}
                <div className="text-center sm:py-16 py-8 md:py-12 lg:py-16">
                    <h2 className="text-[18px] md:text-[28px] lg:text-[30px] font-bold text-red-600 mb-2">
                        NYSTAI'S AI VMS
                    </h2>
                    <p className="text-[14px] md:text-[15px] text-gray-600 tracking-wider">
                        AI-powered vehicle management with smart parking and number plate recognition
                    </p>
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
                                AI Vehicle Management System
                            </h2>

                            <ul className="list-disc pl-6 text-gray-700 text-sm lg:text-[15px] leading-relaxed space-y-4 lg:space-y-5 tracking-wide">
                                <li>
                                    AI VMS manages vehicle movement using smart parking systems and automated number plate recognition.
                                </li>
                                <li>
                                    Integrated cameras and sensors monitor entry, exit, and parking availability in real time.
                                </li>
                                <li>
                                    Centralized dashboards provide access control, alerts, and analytics for efficient vehicle management.
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

            </section >
        </>
    )
}

function Sectionthree() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        arrows: false,
        customPaging: function (i) {
            return (
                <div className="w-3 h-[5px] mx-1 rounded-full bg-gray-400 hover:bg-gray-600 transition-all duration-300" />
            );
        },
        dotsClass: "slick-dots custom-dots !flex justify-center items-center gap-2 !-bottom-12"
    };

    const slides = [
        {
            title: "Challenges Without VMS:",
            description: "Modern CCTV cameras, alarms, and automation provide real-time security, control, and convenience from a single platform. With live video feeds and instant alerts, homeowners can quickly respond to threats.",
            image: "https://images.unsplash.com/photo-1593642532400-2682810df593?w=1600&h=900&fit=crop"
        },
        {
            title: "Integrated Security Solutions:",
            description: "Seamlessly manage all your security devices from one central hub. Monitor, control, and receive notifications in real-time for complete peace of mind.",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=900&fit=crop"
        },
        {
            title: "24/7 Monitoring & Control:",
            description: "Stay connected to your property at all times with advanced monitoring capabilities. Access live feeds, review footage, and control your security system from anywhere.",
            image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1600&h=900&fit=crop"
        }
    ];

    return (
        <section className="max-w-[1540px] mx-auto px-4 ">
            {/* Header */}
            <div className="text-center sm:py-16 py-8 md:py-12 lg:py-16">
                <h2 className="text-[18px] md:text-[28px] lg:text-[30px] font-bold text-red-600 mb-2">
                    WHAT WE OFFER
                </h2>
                <p className="text-[14px] md:text-[15px] text-gray-600 tracking-wider">
                    Systems designed to manage vehicle entry, exit, and parking operations
                </p>
            </div>

            {/* Slider */}
            <div className="relative pb-12 sm:pb-14 md:pb-16">
                <style>{`
        .custom-dots li {
            margin: 0;
            width: auto;
            height: auto;
        }
        .custom-dots li button {
            padding: 0;
        }
        .custom-dots li.slick-active div {
            width: 40px;
            height: 4px;
            background-color: #dc2626;
            transition: width 0.3s ease;
        }
        @media (min-width: 640px) {
            .custom-dots li.slick-active div {
                width: 50px;
                height: 4px;
            }
        }
        @media (min-width: 768px) {
            .custom-dots li.slick-active div {
                width: 60px;
                height: 5px;
            }
        }
    `}</style>
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <div key={index} className="outline-none">
                            <div className="relative rounded-lg sm:rounded-xl overflow-hidden h-[400px] sm:h-[450px] md:h-[550px] lg:h-[600px]">
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url(${slide.image})`,
                                    }}
                                >
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent sm:from-black/80 sm:via-black/40" />
                                </div>

                                {/* Content */}
                                <div className="relative h-full flex flex-col justify-end p-5 sm:p-6 md:p-8 lg:p-10">
                                    <div className="max-w-4xl">
                                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[35px] font-bold text-white mb-3 sm:mb-4 md:mb-5 leading-tight">
                                            {slide.title}
                                        </h3>
                                        <p className="text-sm sm:text-base md:text-[17px] text-white/90 leading-relaxed max-w-3xl line-clamp-3 sm:line-clamp-4 md:line-clamp-none">
                                            {slide.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

function SectionFour() {
    const features = [
        {
            icon: featureicon1,
            title: "Capture",
            description:
                "360° cameras, dashboard cameras, and interior cameras continuously capture vehicle and surroundings activity."
        },
        {
            icon: featureicon2,
            title: "Process",
            description:
                "Mobile NVR/MDVR systems store video footage, analyze driving behavior, and track vehicle location using GPS."
        },
        {
            icon: featureicon3,
            title: "Alert",
            description:
                "The system sends instant alerts for unsafe driving, unauthorized stops, route deviations, or accidents."
        },
        {
            icon: featureicon4,
            title: "Monitor",
            description:
                "Live video feeds and system status can be monitored centrally through a single dashboard."
        },
        {
            icon: featureicon5,
            title: "Review",
            description:
                "Recorded footage and analytics help with audits, incident investigation, evidence collection, and training."
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
                        Essential features for vehicle management systems
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center bg-[#f5f5f5] p-7 rounded-xl">
                            <div className="w-15 h-15 flex items-center justify-center mb-6">
                                <img src={feature.icon} alt="feature icon" className="w-full h-[72px] object-contain" />
                            </div>
                            <h3 className=" sm:text-xl text-[16px]  font-semibold mb-3">
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
            <section className="px-4 sm:my-10 my-4">

                <div className="relative w-full mx-auto rounded-xl overflow-hidden">
                    <video
                        src={vmsvideo1}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-[350px] sm:h-[350px] md:h-[450px] lg:h-[600px] object-cover"
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
                                Automated • Accurate • Efficient
                            </h2>

                            {/* Paragraph */}
                            <p className="text-gray-200 text-xs sm:text-sm md:text-[15px] lg:text-[16px] mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                                Managing vehicle entry, parking, and movement using camera-based systems,
                                sensors, and real-time monitoring for smoother operations.
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
                                        Vehicle Detection
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
                                        Parking Control
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