import { useState, useEffect } from 'react'
import planbanner from "../../assets/Images/Services-Images/Servicebanner.jpeg"

import ser1 from "../../assets/Images/Services-Images/ser1.jpeg"
import ser2 from "../../assets/Images/Services-Images/ser2.jpeg"
import ser3 from "../../assets/Images/Services-Images/ser3.jpeg"

import ser4Video from "../../assets/Images/Services-Images/service-video-1.mp4"
import ser5 from "../../assets/Images/Services-Images/ser5.jpeg"

import ser6 from "../../assets/Images/Services-Images/ser6.jpeg"

import Faqimg1 from "../../assets/Images/Services-Images/FAQIMG1.jpeg"
import Faqimg2 from "../../assets/Images/Services-Images/faqimg2.jpeg"
import Faqimg3 from "../../assets/Images/Services-Images/faqimg3.jpeg"
import Faqimg4 from "../../assets/Images/Services-Images/faqimg4.jpeg"

import { ChevronDown } from 'lucide-react'

const Service = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
            <section className="relative w-full">
                {/* Banner Image */}
                <img
                    src={planbanner}
                    alt="Category Banner"
                    className="
            w-full
            h-[70vh] sm:h-[50vh] md:h-[60vh] lg:h-[75vh] xl:h-[98vh]
            object-cover
            rounded-b-[20px]
        "
                />


                {/* LEFT Overlay Content */}
                <div className="absolute top-0 left-0 w-full h-full flex items-center px-4 sm:px-10 md:px-[80px]">
                    <div className="max-w-xl text-left">

                        {/* Title */}
                        <h1 className="text-2xl sm:text-3xl md:text-[37px] font-bold text-[#474747] leading-snug">
                            Smart Parking Solutions
                        </h1>

                        {/* Divider */}
                        <div className="w-32 sm:w-40 h-[3px] border-b border-dotted mt-3 sm:mt-4 border-[#474747]" />

                        {/* Description */}
                        <p className="mt-3 sm:mt-4 text-[#474747] text-xs sm:text-sm md:text-base leading-relaxed">
                            Intelligent parking systems designed to optimize space, enhance security,
                            and improve user experience with IoT-driven insights.
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
                            Explore Nystai Products
                        </button>

                    </div>
                </div>
            </section>

        </>
    )
}

function SectionTwo() {
    return (
        <section className="max-w-[1540px] mx-auto px-4">
            {/* Header */}
            <div className="text-center py-16">
                <h2 className="text-3xl md:text-[35px] font-bold text-red-600 mb-2">
                    How We Work
                </h2>
                <p className="text-sm md:text-[15px] text-gray-600 tracking-wider">
                    The subtext helps customers quickly understand the value or specific
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* LEFT — BIG CARD */}
                <div className="relative rounded-xl overflow-hidden 
                    h-[260px] sm:h-[350px] md:h-[450px] lg:h-[600px] 
                    group cursor-pointer order-1 lg:order-1">

                    {/* Image */}
                    <img
                        src={ser1}
                        alt="service"
                        className="absolute inset-0 w-full h-full object-cover 
                            transition-transform duration-1000 ease-out group-hover:scale-110"
                    />

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 text-white">
                        <div className="transform transition-all duration-1000 group-hover:-translate-y-4">
                            <h3 className="text-2xl sm:text-[25px] font-bold mb-3">Strategic Planning</h3>

                            <p className="text-white/90 text-sm sm:text-[17px] leading-relaxed 
                                transition-all duration-1000 ease-out 
                                max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100">
                                We develop comprehensive strategies tailored to your business needs,
                                ensuring sustainable growth and competitive advantage.
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT — TWO SMALL CARDS */}
                <div className="flex flex-col gap-6 order-2 lg:order-2">

                    {/* TOP CARD */}
                    <div className="relative rounded-xl overflow-hidden 
                        h-[220px] sm:h-[260px] md:h-[300px] lg:h-[288px] 
                        group cursor-pointer">

                        <img
                            src={ser2}
                            alt="service"
                            className="absolute inset-0 w-full h-full object-cover 
                                transition-transform duration-1000 ease-out group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                        <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 text-white">
                            <div className="transform transition-all duration-700 group-hover:-translate-y-3">
                                <h4 className="text-xl sm:text-[25px] font-bold mb-2">
                                    Team Collaboration
                                </h4>

                                <p className="text-white/90 text-sm sm:text-[17px] leading-relaxed 
                                    transition-all duration-700 ease-out 
                                    max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100">
                                    Foster teamwork and communication across departments, building stronger
                                    connections that drive productivity and innovation.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM CARD */}
                    <div className="relative rounded-xl overflow-hidden 
                        h-[220px] sm:h-[260px] md:h-[300px] lg:h-[288px] 
                        group cursor-pointer">

                        <img
                            src={ser3}
                            alt="service"
                            className="absolute inset-0 w-full h-full object-cover 
                                transition-transform duration-700 ease-out group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                        <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 text-white">
                            <div className="transform transition-all duration-700 group-hover:-translate-y-3">
                                <h4 className="text-xl sm:text-[25px] font-bold mb-2">
                                    Data Analytics
                                </h4>

                                <p className="text-white/90 text-sm sm:text-[17px] leading-relaxed 
                                    transition-all duration-700 ease-out 
                                    max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100">
                                    Transform raw data into actionable insights that empower your
                                    decision-making and reveal hidden opportunities.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

function SectionThree() {
    return (
        <section className="max-w-[1540px] mx-auto px-4">
            {/* Header */}
            <div className="text-center py-16">
                <h2 className="text-3xl md:text-[35px] font-bold text-red-600 mb-2">
                    Our Services
                </h2>
                <p className="text-sm md:text-[15px] text-gray-600 tracking-wider">
                    The subtext helps customers quickly understand the value or specific
                </p>
            </div>

            {/* FIRST SECTION */}
            <div className="flex flex-col lg:flex-row items-center gap-6 mb-10">
                {/* VIDEO */}
                <div className="w-full lg:w-[600px] rounded-2xl overflow-hidden group">
                    <video
                        src={ser4Video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                {/* Text */}
                <div className="flex-1 bg-[#f9f9f9] rounded-2xl flex items-center h-auto lg:h-[420px] w-full">
                    <div className="max-w-[730px] p-5 md:px-6 lg:px-8 w-full">
                        <h2 className="text-xl sm:text-2xl lg:text-[30px] font-bold text-[#ffc107] mb-6">
                            Specialized Safeguarding
                        </h2>

                        <ul className="list-disc pl-6 text-gray-700 text-sm lg:text-[15px] leading-relaxed space-y-4 lg:space-y-5 tracking-wide">
                            <li>We provide specialized safeguarding services with tailored security solutions for your organization.</li>
                            <li>Our experts conduct detailed risk assessments to address unique challenges and vulnerabilities.</li>
                            <li>We ensure strong protection for your assets, personnel, and sensitive information through customized strategies.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* SECOND SECTION */}
            <div className="flex flex-col lg:flex-row items-center gap-6">
                {/* Text - Order 2 on mobile, Order 1 on desktop */}
                <div className="flex-1 bg-[#f9f9f9] rounded-2xl flex items-center h-auto lg:h-[420px] w-full order-2 lg:order-1">
                    <div className="max-w-[730px] p-5 md:px-6 lg:px-8 w-full">
                        <h2 className="text-xl sm:text-2xl lg:text-[30px] font-bold text-[#ffc107] mb-6">
                            Deployment Services
                        </h2>

                        <ul className="list-disc pl-6 text-gray-700 text-sm lg:text-[15px] leading-relaxed space-y-4 lg:space-y-5 tracking-wide">
                            <li>We focus on the seamless deployment of systems, technologies, and solutions tailored to your needs.</li>
                            <li>Our team manages everything from initial setup to full operational integration.</li>
                            <li>We minimize downtime and ensure optimal performance during deployment.</li>
                        </ul>
                    </div>
                </div>

                {/* Image - Order 1 on mobile, Order 2 on desktop */}
                <div className="w-full lg:w-[600px] rounded-2xl overflow-hidden group order-1 lg:order-2">
                    <img
                        src={ser5}
                        alt="Deployment Services"
                        className="w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
            </div>
        </section>
    );
}

function SectionFour() {
    return (
        <>
            <div className="md:mt-10 mt-5 px-4">
                <img src={ser6} className='w-full md:h-[540px] h-[250px] rounded-xl' alt="" style={{ objectFit: "cover" }} />
            </div>
        </>
    )
}

function SectionFiveFAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        { question: "What is the Maiden Unified Platform?", answer: "The Maiden Unified Platform is an all-in-one solution that integrates video surveillance, alarm systems, and access control into a single, easy-to-use platform.", image: Faqimg4 },
        { question: "How does the access control system work?", answer: "Our access control system allows you to manage and monitor entry points remotely, set permissions for different users, and track all access events in real-time.", image: Faqimg2 },
        { question: "Can I integrate existing security cameras?", answer: "Yes, our platform supports integration with most major security camera brands and protocols, making it easy to incorporate your existing equipment.", image: Faqimg3 },
        { question: "Is the system scalable for growing businesses?", answer: "Absolutely! The Maiden Unified Platform is designed to scale seamlessly from small offices to large enterprises with multiple locations.", image: Faqimg1 }
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-5 md:py-20">
            <div className="max-w-[1540px] mx-auto px-4">

                <div className="bg-[#f9f9f9] grid grid-cols-1 lg:grid-cols-2 gap-4 items-center rounded-[15px]">

                    {/* LEFT IMAGE */}
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

                    {/* RIGHT CONTENT */}
                    <div className="max-w-[690px] mx-auto p-5 sm:p-8 lg:p-0">

                        {/* Heading */}
                        <div className="text-center lg:text-left mb-8">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#dc3545]">
                                FREQUENTLY ASKED QUESTIONS
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
                </div>
            </div>
        </section>
    );
}
