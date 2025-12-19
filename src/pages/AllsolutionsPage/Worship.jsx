import { useState } from 'react'

import worshipbanner from "../../assets/Images/Allsolutions-Images/Worship/worshipbanner.jpeg"

import leftimg1 from "../../assets/Images/Allsolutions-Images/Industry/leftimg1.jpg"
import icon1 from "../../assets/Images/Allsolutions-Images/Industry/icon1.png"
import icon2 from "../../assets/Images/Allsolutions-Images/Industry/icon2.png"
import icon3 from "../../assets/Images/Allsolutions-Images/Industry/icon3.png"
import icon4 from "../../assets/Images/Allsolutions-Images/Industry/icon4.png"

import threecardimg1 from "../../assets/Images/Allsolutions-Images/Worship/cardimg1.jpeg"
import threecardimg2 from "../../assets/Images/Allsolutions-Images/Worship/cardimg2.jpeg"
import threecardimg3 from "../../assets/Images/Allsolutions-Images/Worship/cardimg3.jpeg"

import featureicon from "../../assets/Images/Allsolutions-Images/Worship/icon.png"

import video1 from "../../assets/Images/Allsolutions-Images/Education/video1.mp4"

const Worship = () => {
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

export default Worship


function Hero() {
    return (
        <>
            {/* CATEGORY BANNER */}
            <div className="w-full">
                <img
                    src={worshipbanner}
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

                    <div>
                        {/* Header */}
                        <div className="text-center py-16">
                            <h2 className="text-[30px] font-bold text-red-600 mb-2">NYSTAI'S WORSHIP SOLUTION</h2>
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
    const [activeCard, setActiveCard] = useState(null);

    const cards = [
        {
            id: 1,
            image: threecardimg1,
            alt: "Person jumping between cliffs",
            title: "Risk Taking",
            content: "Embrace challenges and step outside your comfort zone. Taking calculated risks is essential for growth and innovation in today's fast-paced business environment."
        },
        {
            id: 2,
            image: threecardimg2,
            alt: "Hand touching glowing light bulb",
            title: "Innovation",
            content: "Drive creative solutions and breakthrough ideas. Innovation is at the heart of everything we do, helping you stay ahead of the competition."
        },
        {
            id: 3,
            image: threecardimg3,
            alt: "Man stopping problems written on chalkboard",
            title: "Problem Solving",
            content: "Tackle complex challenges with strategic thinking. Our approach combines analytical skills with creative problem-solving to deliver effective solutions."
        }
    ];

    return (
        <>
            <section className="max-w-[1540px] mx-auto px-4">
                <div className="text-center py-16">
                    <h2 className="text-3xl font-bold text-red-600 mb-2">
                        WHAT WE OFFER
                    </h2>
                    <p className="text-sm text-gray-600 tracking-wider">
                        The subtext helps customers quickly understand the value or specific
                    </p>
                </div>
            </section>

            <div className="bg-neutral-800 rounded-xl p-8 md:p-12">
                <div className="max-w-[1540px] px-4 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {cards.slice(0, 2).map(card => (
                            <CardItem
                                key={card.id}
                                card={card}
                                activeCard={activeCard}
                                setActiveCard={setActiveCard}
                            />
                        ))}
                    </div>

                    <CardItem
                        card={cards[2]}
                        activeCard={activeCard}
                        setActiveCard={setActiveCard}
                    />
                </div>
            </div>
        </>
    );
}

function CardItem({ card, activeCard, setActiveCard }) {
    const isOpen = activeCard === card.id;

    return (
        <div className="relative rounded-2xl overflow-hidden border border-white">
            {/* IMAGE */}
            <img
                src={card.image}
                alt={card.alt}
                className={`w-full h-[350px] object-cover transition-all duration-500 ${isOpen ? "scale-110 opacity-30" : ""
                    }`}
            />

            {/* OVERLAY */}
            {isOpen && (
                <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex flex-col justify-center text-white p-8">
                    <h3 className="text-3xl font-bold mb-2">{card.title}</h3>

                    {/* Dotted Line */}
                    <div className="w-1/4 border-t-2 border-dotted border-white border-opacity-50 mb-4"></div>

                    <p className="text-sm opacity-90 leading-relaxed">{card.content}</p>
                </div>
            )}

            {/* PLUS / X BUTTON */}
            <button
                onClick={() => setActiveCard(isOpen ? null : card.id)}
                className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300"
            >
                <span className={`text-2xl text-gray-800 transition-transform duration-300 ${isOpen ? "rotate-45" : ""
                    }`}>
                    +
                </span>
            </button>
        </div>
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
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 pb-16">
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