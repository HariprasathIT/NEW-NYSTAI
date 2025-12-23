import { useState, useEffect } from 'react'

import { Home } from 'lucide-react';

import industrialbanner from "../../assets/Images/Allsolutions-Images/Industry/industrialbanner.jpeg"

import featuresGif from "../../assets/Images/Allsolutions-Images/Industry/featuresGif.gif"

import leftimg1 from "../../assets/Images/Allsolutions-Images/Industry/leftimg1.jpg"
import icon1 from "../../assets/Images/Allsolutions-Images/Industry/icon1.png"
import icon2 from "../../assets/Images/Allsolutions-Images/Industry/icon2.png"
import icon3 from "../../assets/Images/Allsolutions-Images/Industry/icon3.png"
import icon4 from "../../assets/Images/Allsolutions-Images/Industry/icon4.png"

const Industrial = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Hero />
            <Sectiontwo />
            <Sectionthree />
            <SectionFour />
        </>
    )
}

export default Industrial


function Hero() {
    return (
        <>
            {/* CATEGORY BANNER */}
            <section className="relative w-full">
                {/* Banner Image */}
                <img
                    src={industrialbanner}
                    alt="Industrial Banner"
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
                            Smart Industrial Solutions
                        </h1>

                        {/* Divider */}
                        <div className="w-32 sm:w-40 h-[3px] border-b border-dotted mt-3 sm:mt-4 border-[#474747]" />

                        {/* Description */}
                        <p className="mt-3 sm:mt-4 text-[#474747] text-xs sm:text-sm md:text-base leading-relaxed">
                            Advanced industrial IoT and surveillance systems designed to enhance
                            operational safety, monitor processes in real time, and improve
                            productivity across industrial environments.
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
                            Explore Industrial Solutions
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

                    <div>
                        {/* Header */}
                        <div className="text-center py-16">
                            <h2 className="text-[30px] font-bold text-red-600 mb-2"> INDUSTRY SOLUTIONS</h2>
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

    const [activeTab, setActiveTab] = useState(0);

    const tabs = ['Challenges', 'Solution', 'Our solution'];

    const challenges = [
        {
            icon: <Home className="w-5 h-5 text-gray-700" />,
            text: "Industries without advanced CCTV, alarms, and automation face security and operational inefficiencies."
        },
        {
            icon: <Home className="w-5 h-5 text-gray-700" />,
            text: "Outdated systems lead to monitoring gaps, delayed responses, and vulnerabilities in safeguarding equipment."
        },
        {
            icon: <Home className="w-5 h-5 text-gray-700" />,
            text: "Without real-time alerts and centralized control, businesses react to problems instead of preventing them, resulting in downtime, safety hazards, and reduced productivity."
        }
    ];

    const solutions = [
        {
            icon: <Home className="w-5 h-5 text-gray-700" />,
            text: "Advanced surveillance systems with AI-powered analytics provide 24/7 monitoring and instant threat detection across all facility zones."
        },
        {
            icon: <Home className="w-5 h-5 text-gray-700" />,
            text: "Integrated alarm systems trigger immediate alerts for unauthorized access, fire, or environmental hazards, enabling rapid response."
        },
        {
            icon: <Home className="w-5 h-5 text-gray-700" />,
            text: "Industrial automation streamlines operations, reduces human error, and optimizes energy consumption while maintaining complete oversight through centralized dashboards."
        }
    ];

    const ourSolutions = [
        {
            icon: <Home className="w-5 h-5 text-gray-700" />,
            text: "Custom-designed CCTV networks with HD recording, night vision, and remote access capabilities tailored to your facility's unique layout."
        },
        {
            icon: <Home className="w-5 h-5 text-gray-700" />,
            text: "Smart alarm integration with mobile notifications, automated emergency protocols, and seamless connectivity with local authorities."
        },
        {
            icon: <Home className="w-5 h-5 text-gray-700" />,
            text: "End-to-end automation solutions including access control, environmental monitoring, and predictive maintenance systems with 24/7 technical support."
        }
    ];

    return (
        <>

            <section className="max-w-[1520px] mx-auto bg-[#f9f9f9] rounded-lg mt-10">

                <div className='p-10 pt-5'>

                    {/* Header */}
                    <div className="text-center py-10">
                        <h2 className="text-[30px] font-bold text-red-600 mb-2">
                            WHAT WE OFFER
                        </h2>
                        <p className="text-[15px] text-gray-600 tracking-wider">
                            The subtext helps customers quickly understand the value or specific
                        </p>
                    </div>

                    {/* Custom Tabs */}
                    <div className="mb-12 flex justify-center">
                        <div className="border-b border-gray-200 max-w-[500px]">
                            {tabs.map((tab, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className={`px-8 py-3 text-xl font-medium transition-all duration-300 relative ${activeTab === index
                                        ? 'text-[#ffc107]'
                                        : 'text-gray-400 hover:text-gray-500'
                                        }`}
                                >
                                    {tab}
                                    {activeTab === index && (
                                        <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#ffc107]"></span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content */}
                    {activeTab === 0 && (
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Image Section */}
                            <div className="relative">
                                <div className="rounded-xl overflow-hidden  bg-gray-800">
                                    <img
                                        src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&h=600&fit=crop"
                                        alt="Security surveillance"
                                        className="w-full h-[450px] object-cover"
                                    />
                                    {/* Detection Box Overlay */}
                                    <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2">
                                        <div className="border-4 border-blue-500 w-32 h-48 relative">
                                            <div className="absolute -top-10 -right-10 bg-blue-500 rounded-full p-2">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Text Section */}
                            <div>
                                <h3 className="text-[25px] font-bold text-gray-900 mb-8">
                                    Challenges Without CCTV, Alarms, and Automation in Industries
                                </h3>

                                <div className="space-y-8">
                                    {challenges.map((challenge, index) => (
                                        <div key={index} className="flex gap-6 items-start">
                                            <div className="flex-shrink-0 mt-1">
                                                {challenge.icon}
                                            </div>
                                            <p className="text-gray-600 text-[16px] leading-relaxed">
                                                {challenge.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 1 && (
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Image Section */}
                            <div className="relative">
                                <div className="rounded-xl overflow-hidden  bg-gray-800">
                                    <img
                                        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
                                        alt="Technology solutions"
                                        className="w-full h-[450px] object-cover"
                                    />
                                    {/* Tech Grid Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent">
                                        <div className="absolute top-1/4 left-1/4">
                                            <div className="bg-blue-500/80 backdrop-blur-sm rounded-lg p-3">
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-1/3 right-1/4">
                                            <div className="bg-green-500/80 backdrop-blur-sm rounded-lg p-3">
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Text Section */}
                            <div>
                                <h3 className="text-[25px] font-bold text-gray-900 mb-8">
                                    Modern Solutions for Industrial Security and Automation
                                </h3>

                                <div className="space-y-8">
                                    {solutions.map((solution, index) => (
                                        <div key={index} className="flex gap-6 items-start">
                                            <div className="flex-shrink-0 mt-1">
                                                {solution.icon}
                                            </div>
                                            <p className="text-gray-600 text-[16px] leading-relaxed">
                                                {solution.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 2 && (
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Image Section */}
                            <div className="relative">
                                <div className="rounded-xl overflow-hidden  bg-gray-800">
                                    <img
                                        src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop"
                                        alt="Our custom solutions"
                                        className="w-full h-[450px] object-cover"
                                    />
                                    {/* Service Badges Overlay */}
                                    <div className="absolute top-8 right-8">
                                        <div className="bg-amber-500 text-white rounded-full px-4 py-2 text-sm font-semibold shadow-lg">
                                            24/7 Support
                                        </div>
                                    </div>
                                    <div className="absolute bottom-8 left-8">
                                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-xl">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-green-500 rounded-full p-2">
                                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-500">System Status</p>
                                                    <p className="text-sm font-semibold text-gray-900">All Active</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Text Section */}
                            <div>
                                <h3 className="text-[25px] font-bold text-gray-900 mb-8">
                                    Our Comprehensive Security and Automation Solutions
                                </h3>

                                <div className="space-y-8">
                                    {ourSolutions.map((solution, index) => (
                                        <div key={index} className="flex gap-6 items-start">
                                            <div className="flex-shrink-0 mt-1">
                                                {solution.icon}
                                            </div>
                                            <p className="text-gray-600 text-[16px] leading-relaxed">
                                                {solution.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

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
                        Features
                    </h2>
                    <p className="text-[15px] text-gray-600 tracking-wider">
                        The subtext helps customers quickly understand the value or specific
                    </p>
                </div>

                {/* GIF Section */}
                <div className="flex justify-center pb-16">
                    <img
                        src={featuresGif}   // import your gif from assets
                        alt="Features Animation"
                        className="
                            w-full 
                            max-w-[1540px]
                            h-auto
                            rounded-2xl
                        "
                    />
                </div>
            </section>
        </>
    )
}
