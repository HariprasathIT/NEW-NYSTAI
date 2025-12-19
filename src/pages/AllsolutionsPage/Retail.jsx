import { useState } from 'react'

import vmsbanner from "../../assets/Images/Allsolutions-Images/Retail/retailbanner.jpeg"

import leftimg1 from "../../assets/Images/Allsolutions-Images/Retail/leftimg1.jpeg"

import imgleftcard from "../../assets/Images/Allsolutions-Images/Retail/imgleftcard.jpeg"

import icon1 from "../../assets/Images/Allsolutions-Images/Vms/icon1.png"
import icon2 from "../../assets/Images/Allsolutions-Images/Vms/icon2.png"
import icon3 from "../../assets/Images/Allsolutions-Images/Vms/icon3.png"
import icon4 from "../../assets/Images/Allsolutions-Images/Vms/icon4.png"

import Faqimg1 from "../../assets/Images/Services-Images/FAQIMG1.jpeg"
import Faqimg2 from "../../assets/Images/Services-Images/faqimg2.jpeg"
import Faqimg3 from "../../assets/Images/Services-Images/faqimg3.jpeg"
import Faqimg4 from "../../assets/Images/Services-Images/faqimg4.jpeg"

import { ChevronDown, Shield, Camera, Bell, Video, Home, Clock } from 'lucide-react'

const Retail = () => {
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

export default Retail


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
                        <h2 className="text-[30px] font-bold text-red-600 mb-2">NYSTAI’S BANKING SOLUTION</h2>
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
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        { question: "Real-Time Alerts", answer: "The Maiden Unified Platform is an all-in-one solution that integrates video surveillance, alarm systems.", image: Faqimg4 },
        { question: "Easy Live View", answer: "Our access control system allows you to manage and monitor entry points remotely, set permissions for different users, and track all access events in real-time.", image: Faqimg2 },
        { question: "Smart Playback", answer: "Yes, our platform supports integration with most major security camera brands and protocols, making it easy to incorporate your existing equipment.", image: Faqimg3 },
        { question: "Customizable Motion Zone", answer: "Absolutely! The Maiden Unified Platform is designed to scale seamlessly from small offices to large enterprises with multiple locations.", image: Faqimg1 }
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (

        <section className="py-12 md:py-20">
            <div className="max-w-[1540px] mx-auto px-4">

                <div className="bg-[#f9f9f9] grid grid-cols-1 lg:grid-cols-2 gap-0 items-center rounded-[15px]">

                    {/* LEFT CONTENT */}
                    <div className="max-w-[650px] mx-auto p-6 sm:p-8 lg:p-0">

                        {/* Heading */}
                        <div className="text-center lg:text-left mb-8">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#dc3545]">
                                What We Offer ?
                            </h2>
                            <p className="text-gray-600 mt-2 text-sm sm:text-base tracking-wide">
                                Maiden Unified All-in-One Video, Alarm & Access Control Platform
                            </p>
                        </div>

                        {/* FAQ ACCORDION */}
                        <div className="space-y-3">
                            {faqs.map((faq, index) => (
                                <div key={index} className="
                                    bg-[#D9D9D9] 
                                    overflow-hidden
                                "
                                    style={{ borderRadius: "10px 10px 0px 0px" }}
                                >
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full px-4 sm:px-6 py-4 flex items-center justify-between text-left"
                                    >
                                        <span className="font-semibold text-gray-800 text-sm sm:text-base pr-4">
                                            {faq.question}
                                        </span>

                                        <div className="rounded-full p-2 border border-white">
                                            <ChevronDown
                                                className={`w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </div>
                                    </button>

                                    <div
                                        className={`transition-all duration-300 ${openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                            } overflow-hidden`}
                                    >
                                        <p className="px-4 sm:px-6 pb-4 text-gray-700 text-sm sm:text-base">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="w-full">
                        <img
                            src={faqs[openIndex || 0].image}
                            alt="FAQ Illustration"
                            className="
                                w-full 
                                h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px]
                                object-cover rounded-[15px]
                                transition-all duration-300
                            "
                        />
                    </div>


                </div>
            </div>
        </section>

    );
}

function SectionFour() {

    return (
        <>
            <section className="max-w-[1540px] mx-auto px-4">

                {/* Main Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center pb-16">

                    {/* Left Side - Image Grid */}
                    <div className="">
                        <img
                            src={imgleftcard}
                            alt="CCTV Camera 1"
                            className="w-full h-[680px] object-cover rounded-lg"
                        />
                    </div>

                    {/* Right Side - Content */}
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold text-[#dc3545] mb-6">
                            NYSTAI’S RETAIL BUSINESS
                        </h1>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            We are pioneering leaders in advanced surveillance solutions designed to elevate security across diverse environments. Our commitment to excellence drives us to deliver cutting-edge technologies that ensure safety, efficiency, and peace of mind for our clients. With a comprehensive portfolio that includes state-of-the-art CCTV systems, intelligent video analytics, and integrated management software, we empower businesses and institutions to protect their assets and enhance operational effectiveness.
                        </p>

                        {/* Services Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 mb-10">

                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full border-2 border-gray-400"></div>
                                    <span className="text-gray-700">Doorbell Video Cameras</span>
                                </div>
                                <div className="h-[1px] w-full bg-gray-200 mt-4"></div>
                            </div>

                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full border-2 border-gray-400"></div>
                                    <span className="text-gray-700">Burglary Sensor Detection</span>
                                </div>
                                <div className="h-[1px] w-full bg-gray-200 mt-4"></div>
                            </div>

                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full border-2 border-gray-400"></div>
                                    <span className="text-gray-700">Smart Home Security - II</span>
                                </div>
                                <div className="h-[1px] w-full bg-gray-200 mt-4"></div>
                            </div>

                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full border-2 border-gray-400"></div>
                                    <span className="text-gray-700">In Home Consultation</span>
                                </div>
                                <div className="h-[1px] w-full bg-gray-200 mt-4"></div>
                            </div>

                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full border-2 border-gray-400"></div>
                                    <span className="text-gray-700">24/7 Alarm Monitoring</span>
                                </div>
                                <div className="h-[1px] w-full bg-gray-200 mt-4"></div>
                            </div>

                        </div>


                        {/* CTA Button */}
                        <button className="bg-[#dc3545] hover:bg-[#dc3545] text-[14px] rounded-3xl text-white font-semibold px-8 py-3 transition-colors">
                            VIEW PRODUCTS
                        </button>   
                    </div>
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