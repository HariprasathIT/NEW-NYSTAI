import React from 'react'
import planbanner from "../../assets/Images/Services-Images/Servicebanner.jpeg"

import ser1 from "../../assets/Images/Services-Images/ser1.jpeg"
import ser2 from "../../assets/Images/Services-Images/ser2.jpeg"
import ser3 from "../../assets/Images/Services-Images/ser3.jpeg"

import ser4 from "../../assets/Images/Services-Images/ser4.jpeg"
import ser5 from "../../assets/Images/Services-Images/ser5.jpeg"

import ser6 from "../../assets/Images/Services-Images/ser6.jpeg"

import Faqimg1 from "../../assets/Images/Services-Images/FAQIMG1.jpeg"

const Service = () => {
    return (
        <>
            <Hero />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFiveFAQ />
        </>
    )
}

export default Service;




function Hero() {
    return (
        <>
            {/* CATEGORY BANNER */}
            <div className="w-full">
                <img
                    src={planbanner}
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

function SectionTwo() {
    return (
        <>
            <section className="max-w-[1540px] mx-auto px-4">
                <div>
                    {/* Header */}
                    <div className="text-center py-16">
                        <h2 className="text-[35px] font-bold text-red-600 mb-2">How we Work</h2>
                        <p className="text-[15px] text-gray-600">
                            The subtext helps customers quickly understand the value or specific
                        </p>
                    </div>

                    {/* 3 Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* LEFT BIG CARD */}
                        <div className="relative rounded-xl overflow-hidden h-[600px] group cursor-pointer">
                            {/* Image */}
                            <img
                                src={ser1}
                                alt="service"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                                <div className="transform transition-transform duration-1000 ease-out group-hover:-translate-y-4">
                                    <h3 className="text-3xl font-bold mb-3">
                                        Strategic Planning
                                    </h3>

                                    <p className="text-white/90 text-[17px] leading-relaxed transition-all duration-1000 ease-out max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100">
                                        We develop comprehensive strategies tailored to your business needs, ensuring sustainable growth and competitive advantage in the market.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT TWO SMALL CARDS STACKED */}
                        <div className="flex flex-col gap-6 h-full">
                            {/* Top Small Card */}
                            <div className="relative rounded-xl overflow-hidden h-[288px] group cursor-pointer">
                                <img
                                    src={ser2}
                                    alt="service"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                                    <div className="transform transition-transform duration-700 ease-out group-hover:-translate-y-3">
                                        <h4 className="text-2xl font-bold mb-2">
                                            Team Collaboration
                                        </h4>

                                        <p className="text-white/90 text-[17px] leading-relaxed transition-all duration-700 ease-out max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100">
                                            Foster teamwork and communication across departments, building stronger connections that drive productivity and innovation throughout your organization.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Small Card */}
                            <div className="relative rounded-xl overflow-hidden h-[288px] group cursor-pointer">
                                <img
                                    src={ser3}
                                    alt="service"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                                    <div className="transform transition-transform duration-700 ease-out group-hover:-translate-y-3">
                                        <h4 className="text-2xl font-bold mb-2">
                                            Data Analytics
                                        </h4>

                                        <p className="text-white/90 text-[17px] leading-relaxed transition-all duration-700 ease-out max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100">
                                            Transform raw data into actionable insights that empower your decision-making process and reveal hidden opportunities for business growth.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

function SectionThree() {
    return (
        <>
            <section className="max-w-[1540px] mx-auto px-4">
                <div>
                    {/* Header */}
                    <div className="text-center py-16">
                        <h2 className="text-[35px] font-bold text-red-600 mb-2">Our Services</h2>
                        <p className="text-[15px] text-gray-600" style={{ letterSpacing: "1px" }}>
                            The subtext helps customers quickly understand the value or specific
                        </p>
                    </div>


                    {/* First Section */}
                    <div className="flex flex-col md:flex-row items-center gap-4 mb-4">

                        {/* Left Image (Fixed Width 650px) */}
                        <div className="w-full md:w-[600px] rounded-2xl overflow-hidden group">
                            <img
                                src={ser4}
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
                                        We provide Specialized Safeguarding services with tailored security solutions for your organization.
                                    </li>
                                    <li>
                                        Our experts conduct detailed risk assessments to address unique challenges and vulnerabilities.
                                    </li>
                                    <li>
                                        We ensure strong protection for your assets, personnel, and sensitive information through customized strategies.
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    {/* First Section */}
                    <div className="flex flex-col md:flex-row items-center gap-4 mb-4">

                        {/* Left Content (Takes remaining space) */}
                        <div className="flex-1 bg-[#f9f9f9] rounded-2xl h-[400px] flex justify-center items-center">
                            <div className="max-w-[730px] p-5 md:px-0">
                                <h2 className="text-2xl md:text-[30px] font-bold text-[#ffc107] mb-6 uppercase">
                                    Deployment Services
                                </h2>
                                <ul className="list-disc pl-5 text-[#4a4a4a] md:text-[15px] leading-relaxed space-y-5" style={{ letterSpacing: ".5px" }}>
                                    <li>
                                        We focus on the seamless deployment of systems, technologies, and solutions tailored to your organization’s needs.
                                    </li>
                                    <li>
                                        Our team manages everything from initial setup to full operational integration for a smooth transition.
                                    </li>
                                    <li>
                                        We minimize downtime and enhance efficiency by ensuring optimal performance during deployment.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Image (Fixed Width 650px) */}
                        <div className="w-full md:w-[600px] rounded-2xl overflow-hidden group">
                            <img
                                src={ser5}
                                alt="Fire extinguisher"
                                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                            />
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
            <div className="mt-10">
                <img src={ser6} className='w-full h-[540px]' alt="" />
            </div>
        </>
    )
}

function SectionFiveFAQ() {

    return (
        <section className=" py-16 lg:py-24">
            <div className="bg-[#f9f9f9] max-w-[1540px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Image */}
                    <div className="">
                        <img
                            src={Faqimg1}
                            alt="FAQ Illustration"
                            className="w-full rounded-lg h-[550px]"
                            style={{objectFit:"cover"}}
                        />
                    </div>

                    {/* Right FAQ Content */}
                    <div>
                        <div className="text-center lg:text-left mb-10">
                            <h2 className="text-[35px] font-bold text-red-600">
                                FREQUENTLY ASKED QUESTIONS
                            </h2>
                            <p className="text-[15px] text-gray-600 mt-2">
                                Maiden Unified All-in-One Video, Alarm & Access Control Platform
                            </p>
                        </div>


                    </div>

                </div>
            </div>
        </section>
    );
}
