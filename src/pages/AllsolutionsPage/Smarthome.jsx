import React from 'react'

import smarthomebanner from "../../assets/Images/Allsolutions-Images/Smarthome/smarthomebanner.jpeg"

import leftimg1 from "../../assets/Images/Allsolutions-Images/Smarthome/leftimg1.jpeg"
import icon1 from "../../assets/Images/Allsolutions-Images/Smarthome/icon1.png"
import icon2 from "../../assets/Images/Allsolutions-Images/Smarthome/icon2.png"
import icon3 from "../../assets/Images/Allsolutions-Images/Smarthome/icon3.png"
import icon4 from "../../assets/Images/Allsolutions-Images/Smarthome/icon4.png"

const Smarthome = () => {
    return (
        <>
            <Hero />
            <Sectiontwo />
        </>
    )
}

export default Smarthome


function Hero() {
    return (
        <>
            {/* CATEGORY BANNER */}
            <div className="w-full">
                <img
                    src={smarthomebanner}
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
                                <h2 className="text-2xl md:text-[30px] font-bold text-[#ffc107] mb-6 uppercase">
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