import { useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import vmsbanner from "../../assets/Images/Allsolutions-Images/Vms/vmsbanner.jpeg"

import leftimg1 from "../../assets/Images/Allsolutions-Images/Vms/leftimg1.jpeg"

import icon1 from "../../assets/Images/Allsolutions-Images/Vms/icon1.png"
import icon2 from "../../assets/Images/Allsolutions-Images/Vms/icon2.png"
import icon3 from "../../assets/Images/Allsolutions-Images/Vms/icon3.png"
import icon4 from "../../assets/Images/Allsolutions-Images/Vms/icon4.png"

import threecardimg1 from "../../assets/Images/Allsolutions-Images/Worship/cardimg1.jpeg"
import threecardimg2 from "../../assets/Images/Allsolutions-Images/Worship/cardimg2.jpeg"
import threecardimg3 from "../../assets/Images/Allsolutions-Images/Worship/cardimg3.jpeg"

import featureicon from "../../assets/Images/Allsolutions-Images/Vms/featureicon.png"

import video1 from "../../assets/Images/Allsolutions-Images/Education/video1.mp4"

const Vms = () => {
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
            <div className="w-full">
                <img
                    src={vmsbanner}
                    alt="Category Banner"
                    className="
                      w-full 
                      h-[50vh]       
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
                        <h2 className="text-[30px] font-bold text-red-600 mb-2">NYSTAI'S AI VMS</h2>
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
            <div className="text-center py-16">
                <h2 className="text-[30px] font-bold text-red-600 mb-2">
                    WHAT WE OFFER
                </h2>
                <p className="text-[15px] text-gray-600 tracking-wider">
                    The subtext helps customers quickly understand the value or specific
                </p>
            </div>

            {/* Slider */}
            <div className="relative pb-16">
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
                        width: 60px;
                        height: 5px;
                        background-color: #dc2626;
                    }
                `}</style>
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <div key={index} className="outline-none">
                            <div className="relative rounded-xl overflow-hidden h-[500px] md:h-[600px]">
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url(${slide.image})`,
                                    }}
                                >
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="relative h-full flex flex-col justify-end p-8 md:p-10 lg:p-10">
                                    <div className="max-w-4xl">
                                        <h3 className="text-3xl md:text-4xl lg:text-[35px] font-bold text-white mb-4 md:mb-5">
                                            {slide.title}
                                        </h3>
                                        <p className="text-base md:text-[17px] text-white/90 leading-relaxed max-w-3xl">
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
                    <h2 className="text-[30px] font-bold text-red-600 mb-2">
                        FEATURES
                    </h2>
                    <p className="text-[15px] text-gray-600 tracking-wider">
                        The subtext helps customers quickly understand the value or specific
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
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

                <div className="relative w-full mx-auto rounded-xl overflow-hidden">
                    <video
                        src={video1}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto"
                    />

                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <h3 className="text-white text-2xl font-semibold">
                            Smart • Secure • Scalable
                        </h3>
                    </div>
                </div>


            </section>
        </>
    )
}