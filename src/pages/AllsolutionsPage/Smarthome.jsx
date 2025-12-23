import { useState, useEffect, useRef } from 'react'

import smarthomebanner from "../../assets/Images/Allsolutions-Images/Smarthome/smarthomebanner.jpeg"

import leftimg1 from "../../assets/Images/Allsolutions-Images/Smarthome/leftimg1.jpeg"
import icon1 from "../../assets/Images/Allsolutions-Images/Smarthome/icon1.png"
import icon2 from "../../assets/Images/Allsolutions-Images/Smarthome/icon2.png"
import icon3 from "../../assets/Images/Allsolutions-Images/Smarthome/icon3.png"
import icon4 from "../../assets/Images/Allsolutions-Images/Smarthome/icon4.png"

import featureicon from "../../assets/Images/Allsolutions-Images/Worship/icon.png"

import smar from "../../assets/Images/Allsolutions-Images/Smarthome/smar.jpeg"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Smarthome = () => {

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

export default Smarthome


function Hero() {
    return (
        <>
            {/* CATEGORY BANNER */}
            <section className="relative w-full">

                {/* Banner Image */}
                <img
                    src={smarthomebanner}
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

                {/* Overlay Content */}
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-end px-6 sm:px-10 md:px-[80px]">
                    <div className="text-right max-w-lg">

                        {/* Title */}
                        <h1 className="text-2xl sm:text-3xl md:text-[35px] font-bold text-[#000] leading-snug md:leading-tight">
                            Nystai Smart Home Solutions for Secure & Connected Living
                        </h1>

                        {/* Divider */}
                        <div className="ml-auto w-32 sm:w-60 h-[3px] border-b border-dotted mt-3 sm:mt-4 border-gray-800" />

                        {/* Description */}
                        <p
                            className="mt-3 sm:mt-4 text-gray-800 text-xs sm:text-sm md:text-[17px] leading-relaxed"
                            style={{ lineHeight: "25px" }}
                        >
                            Protect your family with Nystai smart sensors, AI cameras, hybrid NVRs, and automated alerts designed to secure every corner of your home.
                        </p>

                        {/* Button */}
                        <button
                            className="
                mt-5 sm:mt-6
                bg-[#dc3545] text-white
                px-5 sm:px-6 py-2.5 sm:py-3
                rounded-full font-semibold
                hover:bg-red-700 hover:text-white
                transition-colors
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

function Sectiontwo() {
    const features = [
        {
            icon: icon1,
            title: "24/7 intrusion detection",
            description: "Real-time notifications for security",
            color: "orange"
        },
        {
            icon: icon2,
            title: "App-based control",
            description: "Automated control from one device",
            color: "orange"
        },
        {
            icon: icon3,
            title: "Fire & gas hazard monitoring",
            description: "Proactive monitoring prevents problems",
            color: "orange"
        },
        {
            icon: icon4,
            title: "Hybrid NVR Connectivity",
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
                        <h2 className="text-[30px] font-bold text-red-600 mb-2">NYSTAI'S HOME AUTOMATION</h2>
                        <p className="text-[15px] text-gray-600 tracking-wider">
                            The subtext helps customers quickly understand the value or specific
                        </p>
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
                <div className="flex items-center justify-center py-7">
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
    const [activeCard, setActiveCard] = useState(1);
    return (
        <>
            <section className="max-w-[1540px] mx-auto px-4">
                {/* Header */}
                <div className="text-center py-16">
                    <h2 className="text-[30px] font-bold text-red-600 mb-2">
                        WHAT WE OFFER
                    </h2>
                    <p className="text-[15px] text-gray-600 tracking-wider">
                        The subtext helps customers quickly understand the value or specific
                    </p>
                </div>

                {/* Cards */}
                <div className="flex gap-4 h-[500px]">
                    {/* Card 1 */}
                    <div
                        onMouseEnter={() => setActiveCard(1)}
                        className={`
                            group relative 
                            ${activeCard === 1 ? 'flex-[5]' : 'flex-1'}
                            transition-all duration-500 ease-in-out
                            rounded-2xl overflow-hidden bg-black cursor-pointer
                        `}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80"
                            alt="CCTV Security"
                            className="absolute inset-0 w-full h-full object-cover opacity-80"
                        />
                        <div className="relative z-10 p-8 h-full flex flex-col justify-end text-white">
                            <h3 className={`text-[30px] font-bold mb-2 transition duration-300 ${activeCard === 1 ? 'opacity-100' : 'opacity-0'}`}>
                                Home Safety Challenges
                            </h3>
                            <p className={`text-[17px] transition duration-300 ${activeCard === 1 ? 'opacity-100' : 'opacity-0'}`}>
                                Traditional homes lack monitoring and early detection systems, making them vulnerable to accidents and unwanted entry.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div
                        onMouseEnter={() => setActiveCard(2)}
                        className={`
                            group relative 
                            ${activeCard === 2 ? 'flex-[5]' : 'flex-1'}
                            transition-all duration-500 ease-in-out
                            rounded-2xl overflow-hidden bg-gray-900 cursor-pointer
                        `}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1551808525-51a94da548ce?w=800&q=80"
                            alt="Security Monitoring"
                            className="absolute inset-0 w-full h-full object-cover opacity-80"
                        />
                        <div className="relative z-10 p-8 h-full flex flex-col justify-end text-white">
                            <h3 className={`text-[30px] font-bold mb-2 transition duration-300 ${activeCard === 2 ? 'opacity-100' : 'opacity-0'}`}>
                                Smart Home Needs
                            </h3>
                            <p className={`text-[17px] transition duration-300 ${activeCard === 2 ? 'opacity-100' : 'opacity-0'}`}>
                                Modern homes require advanced sensors, automated alerts, and remote control for full protection and ease of living.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div
                        onMouseEnter={() => setActiveCard(3)}
                        className={`
                            group relative 
                            ${activeCard === 3 ? 'flex-[5]' : 'flex-1'}
                            transition-all duration-1000 ease-in-out
                            rounded-2xl overflow-hidden bg-gray-900 cursor-pointer
                        `}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80"
                            alt="Access Control"
                            className="absolute inset-0 w-full h-full object-cover opacity-80"
                        />
                        <div className="relative z-10 p-8 h-full flex flex-col justify-end text-white">
                            <h3 className={`text-[30px] font-bold mb-2 transition duration-500 ${activeCard === 3 ? 'opacity-100' : 'opacity-0'}`}>
                                How Nystai Helps
                            </h3>
                            <p className={`text-[17px] transition duration-500 ${activeCard === 3 ? 'opacity-100' : 'opacity-0'}`}>
                                Nystai connects all your smart sensors, cameras, and alarms into a single ecosystem that protects, monitors, and automates your home in real time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

function SectionFour() {
    const features = [
        {
            icon: featureicon,
            title: "Detect",
            description: "Sensors identify intrusion, smoke, gas leaks, temperature changes, or water leaks."
        },
        {
            icon: featureicon,
            title: "Analyze",
            description: "Nystai controller processes alerts and activates the proper response."
        },
        {
            icon: featureicon,
            title: "Alert",
            description: "Notifications sent to your smartphone, alarms, or emergency contacts."
        },
        {
            icon: featureicon,
            title: "Prevent",
            description: "Automation triggers sirens, locks, or camera recording automatically."
        },
        {
            icon: featureicon,
            title: "Monitor & Optimize",
            description: "Live system monitoring and analytics improve response efficiency."
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
                        How the Nystai Smart Home System Works
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 pb-16">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center bg-[#f5f5f5] p-7 rounded-xl">
                            <div className="w-15 h-15 flex items-center justify-center mb-6">
                                <img src={feature.icon} alt="feature icon" className="w-full h-[72px] object-contain" />
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
    const sectionRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            imageRef.current,
            {
                scale: 0.85,
                opacity: 0,
            },
            {
                scale: 1,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    once: true,
                },
            }
        );
    }, []);

    return (
        <section ref={sectionRef} className="px-4">
            <img
                ref={imageRef}
                src={smar}
                alt="smar"
                className="w-full h-auto rounded-2xl lg:mb-16 mb-5 will-change-transform"
            />
        </section>
    );
}