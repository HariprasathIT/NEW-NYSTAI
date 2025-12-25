import { useState, useEffect } from 'react'

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
import { ShieldCheck } from 'lucide-react'

const Worship = () => {

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
                      h-[70vh]       
                      sm:h-[70vh]    
                      md:h-[70vh]    
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
            title: "SURVEILLANCE",
            description: "Live monitoring for sacred spaces",
            color: "orange"
        },
        {
            icon: icon2,
            title: "CROWD CONTROL",
            description: "Manage gatherings and movement safely",
            color: "orange"
        },
        {
            icon: icon3,
            title: "ANNOUNCEMENTS",
            description: "Clear audio and visual communication",
            color: "orange"
        },
        {
            icon: icon4,
            title: "ACCESS SAFETY",
            description: "Controlled entry for worship areas",
            color: "orange"
        }
    ];

    return (
        <>
            <section className="max-w-[1540px] mx-auto px-4">

                <div>

                    <div>
                        {/* Header */}
                        <div className="text-center sm:py-16 py-8 md:py-12 lg:py-16">
                            <h2 className="text-[18px] md:text-[28px] lg:text-[30px] font-bold text-red-600 mb-2">NYSTAI'S WORSHIP SOLUTION</h2>
                            <p className="text-[14px] md:text-[15px] text-gray-600 tracking-wider">
                                The subtext helps customers quickly understand the value or specific
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
                                    Specialized Safeguarding
                                </h2>
                                <ul className="list-disc pl-6 text-gray-700 text-sm lg:text-[15px] leading-relaxed space-y-4 lg:space-y-5 tracking-wide">
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
            <section className="max-w-[1540px] mx-auto ">
                <div className="text-center sm:py-16 py-8 md:py-12 lg:py-16">
                    <h2 className="text-[18px] md:text-[28px] lg:text-[30px] font-bold text-red-600 mb-2 sm:mb-3">
                        WHAT WE OFFER
                    </h2>
                    <p className="text-[14px] md:text-[15px] text-gray-600 tracking-wide px-4">
                        The subtext helps customers quickly understand the value or specific
                    </p>
                </div>
            </section>

            <div className="bg-neutral-800 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 lg:p-12">
                <div className="max-w-[1540px] mx-auto px-0 sm:px-0 lg:px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
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
        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white shadow-lg">
            {/* IMAGE */}
            <img
                src={card.image}
                alt={card.alt}
                className={`w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover transition-all duration-500 ${isOpen ? "scale-110 opacity-30" : ""
                    }`}
            />

            {/* OVERLAY */}
            {isOpen && (
                <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex flex-col justify-center text-white p-4 sm:p-6 md:p-8">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">
                        {card.title}
                    </h3>

                    {/* Dotted Line */}
                    <div className="w-16 sm:w-20 md:w-24 lg:w-32 border-t-2 border-dotted border-white border-opacity-50 mb-3 sm:mb-4"></div>

                    <p className="text-xs sm:text-sm md:text-base opacity-90 leading-relaxed max-w-2xl">
                        {card.content}
                    </p>
                </div>
            )}

            {/* PLUS / X BUTTON */}
            <button
                onClick={() => setActiveCard(isOpen ? null : card.id)}
                className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 shadow-md"
                aria-label={isOpen ? "Close card" : "Open card"}
            >
                <span className={`text-xl sm:text-2xl md:text-3xl text-gray-800 transition-transform duration-300 ${isOpen ? "rotate-45" : ""
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
            description: "Real-time CCTV monitoring with intelligent threat detection."
        },
        {
            icon: featureicon,
            title: "Smart Access Control",
            description: "Secure entry management using cards, biometrics, or mobile access."
        },
        {
            icon: featureicon,
            title: "Instant Alerts",
            description: "Immediate notifications for security and safety events."
        },
        {
            icon: featureicon,
            title: "Centralized Monitoring",
            description: "Unified control and visibility across all connected systems."
        },
        {
            icon: featureicon,
            title: "Scalable Architecture",
            description: "Flexible solutions that grow with your infrastructure needs."
        }
    ];

    return (
        <>
            <section className="max-w-[1540px] mx-auto px-4">
                {/* Header */}
                <div className="text-center  sm:py-16 py-8 md:py-12 lg:py-16">
                    <h2 className="text-[18px] md:text-[28px] lg:text-[30px] font-bold text-red-600 mb-2">
                        FEATURES
                    </h2>
                    <p className="text-[14px] md:text-[15px] text-gray-600 tracking-wider">
                        The subtext helps customers quickly understand the value or specific
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center bg-[#f5f5f5] p-7 rounded-xl">
                            <div className="w-15 h-15 flex items-center justify-center mb-6">
                                <img src={feature.icon} alt="feature icon" className="w-full h-[72px] object-contain" />
                            </div>
                            <h3 className="sm:text-xl text-[16px]  font-semibold mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-gray-600">
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
            <section className="px-4 my-4">
                {/* Header */}
                <div className="relative w-full mx-auto rounded-xl overflow-hidden">
                    <video
                        src={video1}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-[400px] sm:h-[350px] md:h-[450px] lg:h-auto object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 sm:p-6 md:p-8 lg:p-10">

                        {/* Glassmorphism Container */}
                        <div className="
                            w-full sm:max-w-[460px] md:max-w-[550px]
                            p-4 sm:p-6 md:p-8
                            rounded-lg sm:rounded-xl
                            bg-white/10
                            backdrop-blur-lg
                            border border-white/20
                            shadow-xl
                        ">

                            {/* Heading */}
                            <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-[27px] font-bold mb-3 sm:mb-4 md:mb-5">
                                Smart • Secure • Scalable
                            </h2>

                            {/* Paragraph */}
                            <p className="text-gray-200 text-xs sm:text-sm md:text-[15px] lg:text-[16px] mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                                Empowering intelligent infrastructure with advanced security,
                                seamless automation, and scalable IoT solutions.
                            </p>

                            {/* Glassmorphism Icons */}
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6">

                                {/* Item 1 */}
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="
                                        flex items-center justify-center
                                        w-[40px] h-[40px] sm:w-[45px] sm:h-[45px]
                                        rounded-full
                                        bg-white/15 backdrop-blur-md
                                        border border-white/30
                                        shadow-lg
                                        flex-shrink-0
                                    ">
                                        <ShieldCheck size={18} className="text-white sm:w-5 sm:h-5" />
                                    </div>
                                    <span className="text-white text-xs sm:text-sm font-medium">
                                        Data Security
                                    </span>
                                </div>

                                {/* Item 2 */}
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="
                                        flex items-center justify-center
                                        w-[40px] h-[40px] sm:w-[45px] sm:h-[45px]
                                        rounded-full
                                        bg-white/15 backdrop-blur-md
                                        border border-white/30
                                        shadow-lg
                                        flex-shrink-0
                                    ">
                                        <ShieldCheck size={18} className="text-white sm:w-5 sm:h-5" />
                                    </div>
                                    <span className="text-white text-xs sm:text-sm font-medium">
                                        Smart Control
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}