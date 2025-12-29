import { useState, useEffect } from 'react'

import retailbanner from "../../assets/Images/Allsolutions-Images/Retail/retailbanner.jpeg"

import leftimg1 from "../../assets/Images/Allsolutions-Images/Retail/leftimg1.jpeg"

import imgleftcard from "../../assets/Images/Allsolutions-Images/Retail/imgleftcard.jpeg"

import icon1 from "../../assets/Images/Allsolutions-Images/Retail/icon1.png"
import icon2 from "../../assets/Images/Allsolutions-Images/Retail/icon2.png"
import icon3 from "../../assets/Images/Allsolutions-Images/Retail/icon3.png"
import icon4 from "../../assets/Images/Allsolutions-Images/Retail/icon4.png"

import Faqimg1 from "../../assets/Images/Services-Images/FAQIMG1.jpeg"
import Faqimg2 from "../../assets/Images/Services-Images/faqimg2.jpeg"
import Faqimg3 from "../../assets/Images/Services-Images/faqimg3.jpeg"
import Faqimg4 from "../../assets/Images/Services-Images/faqimg4.jpeg"

import { ChevronDown, Shield, Camera, Bell, Video, Home, Clock } from 'lucide-react'

const Retail = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
            <section className="relative w-full">
                {/* Banner Image */}
                <img
                    src={retailbanner}
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
                <div className="absolute inset-0 flex px-6 sm:px-10 md:px-[80px] top-[100px] lg:top-[150px] xl:top-[200px]">
                    <div className="max-w-xl text-left">

                        {/* Title */}
                        <h1 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-[#474747] leading-snug">
                            Smart Retail Solutions
                        </h1>

                        {/* Divider */}
                        <div className="w-32 sm:w-40 h-[3px] border-b border-dotted mt-3 sm:mt-4 border-[#474747]" />

                        {/* Description */}
                        <p className="mt-3 sm:mt-4 text-[#474747] text-xs sm:text-sm md:text-base leading-relaxed">
                            Intelligent retail technologies that enhance customer experience,
                            improve security, and deliver actionable business insights.
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
                            Explore Retail Solutions
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
            title: "STORE VIGILANCE",
            description: "Live monitoring to reduce theft",
            color: "orange"
        },
        {
            icon: icon2,
            title: "CENTRALIZED CONTROL",
            description: "Unified control of store systems",
            color: "orange"
        },
        {
            icon: icon3,
            title: "SMART INSIGHTS",
            description: "Customer movement and activity data",
            color: "orange"
        },
        {
            icon: icon4,
            title: "STORE OPTIMIZATION",
            description: "Safer and smoother store operations",
            color: "orange"
        }
    ];

    return (
        <>
            <section className="max-w-[1540px] mx-auto px-4">

                <div>
                    {/* Header */}
                    <div className="text-center sm:py-16 py-8 md:py-12 lg:py-16">
                        <h2 className="text-[18px] md:text-[28px] lg:text-[30px] font-bold text-red-600 mb-2">
                            NYSTAI’S RETAIL SOLUTION
                        </h2>
                        <p className="text-[14px] md:text-[15px] text-gray-600 tracking-wider">
                            Advanced monitoring and analytics for safer and smarter retail spaces
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
                                Retail Safety & Operations
                            </h2>

                            <ul className="list-disc pl-6 text-gray-700 text-sm lg:text-[15px] leading-relaxed space-y-4 lg:space-y-5 tracking-wide">
                                <li>
                                    NYSTAI deploys CCTV surveillance and alarm systems to reduce theft and enhance store security.
                                </li>
                                <li>
                                    In-store analytics provide visibility into customer movement and activity patterns.
                                </li>
                                <li>
                                    Centralized systems help retailers monitor operations, respond quickly, and maintain efficiency.
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
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        { question: "Real-Time Alerts", answer: "The Maiden Unified Platform is an all-in-one solution that integrates video surveillance, alarm systems.", image: Faqimg4 },
        { question: "Easy Live View", answer: "Our access control system allows you to manage and monitor entry points remotely, set permissions for different users, and track all access events in real-time.", image: Faqimg2 },
        { question: "Smart Playback", answer: "Yes, our platform supports integration with most major security camera brands and protocols, making it easy to incorporate your existing equipment.", image: Faqimg3 },
        { question: "Customizable Motion Zone", answer: "Absolutely! The Maiden Unified Platform is designed to scale seamlessly from small offices to large enterprises with multiple locations.", image: Faqimg1 },
        { question: "Motion Zone", answer: "Absolutely! The Maiden Unified Platform is designed to scale seamlessly from small offices to large enterprises with multiple locations.", image: Faqimg1 }
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (

        <section className="py-8 md:py-20">
            <div className="max-w-[1540px] mx-auto px-4">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center rounded-[15px]">

                    {/* LEFT CONTENT */}
                    <div className="max-w-[650px] mx-auto p-0 sm:p-8 lg:p-0">

                        {/* Heading */}
                        <div className="text-center lg:text-left mb-8">
                            <h2 className="text-[18px] sm:text-3xl font-bold text-[#dc3545]">
                                What We Offer ?
                            </h2>
                            <p className="text-gray-600 mt-2 text-[14px] sm:text-base tracking-wide">
                                Maiden Unified All-in-One Video, Alarm & Access Control Platform
                            </p>
                        </div>

                        {/* FAQ ACCORDION */}
                        <div className="space-y-3">
                            {faqs.map((faq, index) => (
                                <div key={index} className="
                                    bg-[#f5f5f5] 
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

                                        <div className="rounded-full p-2 border border-gray-400 flex items-center justify-center">
                                            <ChevronDown
                                                className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
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
                                mt-4 lg:mt-0
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center sm:pb-16 pb-8">

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
                        <h1 className="text-[18px] sm:text-3xl font-bold text-[#dc3545] mb-4">
                            NYSTAI’S RETAIL BUSINESS
                        </h1>
                        <p className="text-gray-600 text-[14px] sm:text-[16px] leading-relaxed mb-8">
                            We are pioneering leaders in advanced surveillance solutions designed to elevate security across diverse environments. Our commitment to excellence drives us to deliver cutting-edge technologies that ensure safety, efficiency, and peace of mind for our clients. With a comprehensive portfolio that includes state-of-the-art CCTV systems, intelligent video analytics, and integrated management software, we empower businesses and institutions to protect their assets and enhance operational effectiveness.
                        </p>

                        {/* Services Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 mb-10">

                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full border-2 border-gray-400"></div>
                                    <span className="text-gray-700 text-[14px] sm:text-[16px]">Doorbell Video Cameras</span>
                                </div>
                                <div className="h-[1px] w-full bg-gray-200 mt-4"></div>
                            </div>

                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full border-2 border-gray-400"></div>
                                    <span className="text-gray-700 text-[14px] sm:text-[16px]">Burglary Sensor Detection</span>
                                </div>
                                <div className="h-[1px] w-full bg-gray-200 mt-4"></div>
                            </div>

                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full border-2 border-gray-400"></div>
                                    <span className="text-gray-700 text-[14px] sm:text-[16px]">Smart Home Security - II</span>
                                </div>
                                <div className="h-[1px] w-full bg-gray-200 mt-4"></div>
                            </div>

                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full border-2 border-gray-400"></div>
                                    <span className="text-gray-700 text-[14px] sm:text-[16px]">In Home Consultation</span>
                                </div>
                                <div className="h-[1px] w-full bg-gray-200 mt-4"></div>
                            </div>

                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full border-2 border-gray-400"></div>
                                    <span className="text-gray-700 text-[14px] sm:text-[16px]">24/7 Alarm Monitoring</span>
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