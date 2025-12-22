import { useState, useEffect } from 'react'

import smarthomebanner from "../../assets/Images/Allsolutions-Images/Smarthome/smarthomebanner.jpeg"

import leftimg1 from "../../assets/Images/Allsolutions-Images/Smarthome/leftimg1.jpeg"
import icon1 from "../../assets/Images/Allsolutions-Images/Smarthome/icon1.png"
import icon2 from "../../assets/Images/Allsolutions-Images/Smarthome/icon2.png"
import icon3 from "../../assets/Images/Allsolutions-Images/Smarthome/icon3.png"
import icon4 from "../../assets/Images/Allsolutions-Images/Smarthome/icon4.png"

import featureicon from "../../assets/Images/Allsolutions-Images/Worship/icon.png"

import smar from "../../assets/Images/Allsolutions-Images/Smarthome/smar.jpeg"

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
                            Enhanced Protection, Anytime
                        </h1>

                        {/* Divider */}
                        <div className="ml-auto w-32 sm:w-60 h-[3px] border-b border-dotted mt-3 sm:mt-4 border-gray-800" />

                        {/* Description */}
                        <p
                            className="mt-3 sm:mt-4 text-gray-800 text-xs sm:text-sm md:text-[17px] leading-relaxed"
                            style={{ lineHeight: "25px" }}
                        >
                            Add monitoring and emergency support to
                            <br /> your Nystai Protect Plan.
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
                                Solutions Provided by CCTV, Alarms, and Automation
                            </h3>
                            <p className={`text-[17px] transition duration-300 ${activeCard === 1 ? 'opacity-100' : 'opacity-0'}`}>
                                Modern CCTV cameras, alarms, & automation provide real-time security,
                                control & convenience from a single platform. With live video feeds and instant alerts, homeowners can quickly respond to threats.
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
                                24/7 Monitoring Services
                            </h3>
                            <p className={`text-[17px] transition duration-300 ${activeCard === 2 ? 'opacity-100' : 'opacity-0'}`}>
                                Professional monitoring ensures your property is protected around the clock with instant response to any security events.
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
                                Advanced Access Control
                            </h3>
                            <p className={`text-[17px] transition duration-500 ${activeCard === 3 ? 'opacity-100' : 'opacity-0'}`}>
                                Secure entry systems with biometric authentication, smart locks, and keyless access management for complete control over who enters your property.
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

    return (
        <>
            <section className="px-4">
                <img src={smar} alt="smar" className="w-full h-auto rounded-2xl lg:mb-16 mb-5" />
            </section>
        </>
    )
}