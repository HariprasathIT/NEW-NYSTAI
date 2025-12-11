import { useState } from 'react'
import planbanner from "../../assets/Images/Services-Images/Servicebanner.jpeg"

import ser1 from "../../assets/Images/Services-Images/ser1.jpeg"
import ser2 from "../../assets/Images/Services-Images/ser2.jpeg"
import ser3 from "../../assets/Images/Services-Images/ser3.jpeg"

import ser4 from "../../assets/Images/Services-Images/ser4.jpeg"
import ser5 from "../../assets/Images/Services-Images/ser5.jpeg"

import ser6 from "../../assets/Images/Services-Images/ser6.jpeg"

import Faqimg1 from "../../assets/Images/Services-Images/FAQIMG1.jpeg"
import Faqimg2 from "../../assets/Images/Services-Images/faqimg2.jpeg"
import Faqimg3 from "../../assets/Images/Services-Images/faqimg3.jpeg"
import Faqimg4 from "../../assets/Images/Services-Images/faqimg4.jpeg"

import { ChevronDown } from 'lucide-react'

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
                        <p className="text-[15px] text-gray-600 tracking-wider">
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
                        <p className="text-[15px] text-gray-600 tracking-wider">
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
                <img src={ser6} className='w-full h-[540px]' alt="" style={{objectFit:"cover"}} />
            </div>
        </>
    )
}

function SectionFiveFAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "What is the Maiden Unified Platform?",
            answer: "The Maiden Unified Platform is an all-in-one solution that integrates video surveillance, alarm systems, and access control into a single, easy-to-use platform.",
            image: Faqimg4
        },
        {
            question: "How does the access control system work?",
            answer: "Our access control system allows you to manage and monitor entry points remotely, set permissions for different users, and track all access events in real-time.",
            image: Faqimg2
        },
        {
            question: "Can I integrate existing security cameras?",
            answer: "Yes, our platform supports integration with most major security camera brands and protocols, making it easy to incorporate your existing equipment.",
            image: Faqimg3
        },
        {
            question: "Is the system scalable for growing businesses?",
            answer: "Absolutely! The Maiden Unified Platform is designed to scale seamlessly from small offices to large enterprises with multiple locations.",
            image: Faqimg1
        }
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <section className="py-16 lg:py-24">
            <div className="max-w-[1540px] mx-auto px-4">
                <div className="bg-[#f9f9f9] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center rounded-[15px]">

                    {/* Left Image */}
                    <div className="">
                        <img
                            src={faqs[openIndex !== null ? openIndex : 0].image}
                            alt="FAQ Illustration"
                            className="w-full rounded-[15px] h-[660px] transition-all duration-300"
                            style={{objectFit:"cover"}}
                        />
                    </div>

                    {/* Right FAQ Content */}
                    <div className='max-w-[680px] h-[550px]'>
                        <div className="text-center lg:text-left mb-10">
                            <h2 className="text-[30px] font-bold text-[#dc3545]">
                                FREQUENTLY ASKED QUESTIONS
                            </h2>
                            <p className="text-[15px] text-gray-600 mt-2 tracking-wide">
                                Maiden Unified All-in-One Video, Alarm & Access Control Platform
                            </p>
                        </div>


                        {/* Accordion */}
                        <div className="space-y-2">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-[#D9D9D9] shadow-sm overflow-hidden"
                                    style={{borderRadius:"15px 15px 0px 0px"}}
                                >
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full px-6 py-5 flex items-center justify-between text-left "
                                    >
                                        <span className="font-bold text-gray-800 pr-4 text-[16px]">
                                            {faq.question}
                                        </span>
                                        <div className="bg-[#D9D9D9] rounded-full p-2 flex-shrink-0" style={{border:"2px solid #fff"}}>
                                            <ChevronDown
                                                className={`w-5 h-5 text-[#fff] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </div>
                                    </button>
                                    <div
                                        className={`transition-all duration-300 ease-in-out ${openIndex === index
                                            ? 'max-h-48 opacity-100'
                                            : 'max-h-0 opacity-0'
                                            } overflow-hidden`}
                                    >
                                        <div className="px-6 pb-4 text-gray-600 text-[15px]">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
