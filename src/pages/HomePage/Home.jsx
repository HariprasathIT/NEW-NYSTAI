import { useEffect, useRef, useState } from 'react';

import BannerImg1 from "../../assets/Images/HomePage-Images/HeroBanner/banner1.png"
import BannerImg2 from "../../assets/Images/HomePage-Images/HeroBanner/banner2.webp"
import BannerImg3 from "../../assets/Images/HomePage-Images/HeroBanner/banner3.jpg"

import Cat1 from "../../assets/Images/HomePage-Images/product-categories/cat-5.jpg";
import Cat2 from "../../assets/Images/HomePage-Images/product-categories/cat-3.png";
import Cat3 from "../../assets/Images/HomePage-Images/product-categories/cat-2.png";
import Cat4 from "../../assets/Images/HomePage-Images/product-categories/cat-4.png";

import sell1 from "../../assets/Images/HomePage-Images/Top-selling/TopSelling1.png"
import sell2 from "../../assets/Images/HomePage-Images/Top-selling/TopSelling2.png"
import sell3 from "../../assets/Images/HomePage-Images/Top-selling/TopSelling3.png"
import sell4 from "../../assets/Images/HomePage-Images/Top-selling/TopSelling4.png"

import WhynysImg1 from "../../assets/Images/HomePage-Images/WhyNystai/whynys1.png";
import WhynysImg2 from "../../assets/Images/HomePage-Images/WhyNystai/whynys2.png";
import WhynysImg3 from "../../assets/Images/HomePage-Images/WhyNystai/whynys3.png";

import sampleVideo1 from "../../assets/Images/HomePage-Images/HeroBanner/video-card-1.mp4";
import sampleVideo2 from "../../assets/Images/HomePage-Images/HeroBanner/video-card-2.mp4";
import sampleVideo3 from "../../assets/Images/HomePage-Images/HeroBanner/video-card-3.mp4";

import Waterlevel from "../../assets/Images/HomePage-Images/tankmanager.jpg"

import partner1 from "../../assets/Images/HomePage-Images/PartnerLogo/partner-1.webp"
import partner2 from "../../assets/Images/HomePage-Images/PartnerLogo/partner-2.webp"
import partner3 from "../../assets/Images/HomePage-Images/PartnerLogo/partner-3.webp"
import partner4 from "../../assets/Images/HomePage-Images/PartnerLogo/partner-4.webp"
import partner5 from "../../assets/Images/HomePage-Images/PartnerLogo/partner-5.avif"
import partner6 from "../../assets/Images/HomePage-Images/PartnerLogo/partner-6.webp"
import partner7 from "../../assets/Images/HomePage-Images/PartnerLogo/partner-7.webp"
import partner8 from "../../assets/Images/HomePage-Images/PartnerLogo/partner-8.webp"
import partner9 from "../../assets/Images/HomePage-Images/PartnerLogo/partner-9.webp"
import partner10 from "../../assets/Images/HomePage-Images/PartnerLogo/partner-10.webp"
import partner11 from "../../assets/Images/HomePage-Images/PartnerLogo/partner-11.webp"
import partner12 from "../../assets/Images/HomePage-Images/PartnerLogo/partner-12.webp"
import partner13 from "../../assets/Images/HomePage-Images/PartnerLogo/partner-13.webp"
import partner14 from "../../assets/Images/HomePage-Images/PartnerLogo/partner-14.webp"
import partner15 from "../../assets/Images/HomePage-Images/PartnerLogo/partner-15.webp"
import partner16 from "../../assets/Images/HomePage-Images/PartnerLogo/partner-16.webp"
import partner17 from "../../assets/Images/HomePage-Images/PartnerLogo/partner-17.webp"
import partner18 from "../../assets/Images/HomePage-Images/PartnerLogo/partner-18.webp"
import partner19 from "../../assets/Images/HomePage-Images/PartnerLogo/partner-19.webp"
import partner20 from "../../assets/Images/HomePage-Images/PartnerLogo/partner-20.webp"

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { ArrowRight, Plus, Shield, Wifi, Smartphone } from "lucide-react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


gsap.registerPlugin(ScrollTrigger);

const Home = () => {

    return (
        <div className="w-full">
            <HeroSection />
            <ProductCategories />
            <ServicesSection />
            <SolutionsSection />
            <Waterlevelontroller />
            <WhyNystai />
            <PartnersLogo />
            <Testimonial />
        </div>
    );
};

export default Home;


function HeroSection() {

    const banners = [
        {
            img: BannerImg2,
            title: "Introducing Nystai AIoT Products for Smarter, Safer Living Atmosphere",
            desc: "Nystai delivers smart home devices, AI cameras, automation sensors, and intelligent IoT solutions designed to protect, simplify, & enhance modern living.",
        },
        {
            img: BannerImg3,
            title: "Advanced Smart Home Automation for Modern Living",
            desc: "Experience intelligent automation, advanced monitoring, and seamless control with Nystai’s next-gen IoT solutions designed for comfort and security.",
        },
        {
            img: BannerImg1,
            title: "AI Cameras to Protect Every Corner of Your Space",
            desc: "Powered by AI and automation, Nystai cameras bring superior protection, 24/7 monitoring, and real-time smart alerts to your home or business.",
        },
    ];

    return (
        <section className="relative w-full">
            <Swiper
                modules={[Autoplay, Navigation]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                navigation={{
                    nextEl: ".swiper-button-next-custom",
                    prevEl: ".swiper-button-prev-custom",
                }}
            >
                {banners.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full">
                            <img
                                src={item.img}
                                alt="Banner-Nystai"
                                className="
        w-full rounded-b-3xl object-cover
        h-[70dvh] sm:h-[60dvh] md:h-[70dvh] lg:h-[85dvh]
    "
                            />

                            <div className="absolute top-0 left-0 h-full flex items-center px-6 sm:px-10 md:px-[80px] overflow-hidden">
                                <div className="max-w-xl">

                                    {/* Title */}
                                    <div className="overflow-hidden">
                                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 leading-snug md:leading-tight">
                                            {item.title}
                                        </h1>
                                    </div>

                                    {/* Divider */}
                                    <div className="w-32 sm:w-40 h-[3px] border-b border-dotted mt-3 sm:mt-4 border-[#dc3545]"></div>

                                    {/* Description */}
                                    <div className="overflow-hidden mt-3 sm:mt-4">
                                        <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>

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

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

function ProductCategories() {
    const cardRefs = useRef([]);

    const cardData = [
        {
            title: "Home Automation",
            img: Cat1,
            description:
                "Home automation solutions controlling lighting, appliances, climate, doors, and security systems, offering convenience, comfort, remote access, voice integration, energy savings, and seamless smart living for modern households.",
            number: "01"
        },

        {
            title: "Smart Sensors",
            img: Cat2,
            description:
                "Smart sensors detecting motion, temperature, humidity, gas, and vibrations, enabling automation, safety, energy efficiency, and real-time alerts for responsive, modern, and intelligent smart environments across multiple applications.",
            number: "02"
        },

        {
            title: "CCTV Cameras",
            img: Cat3,
            description:
                "High-definition CCTV cameras offering clear monitoring, night vision, motion alerts, and reliable security coverage for homes, offices, warehouses, and industries with strong surveillance features ensuring continuous protection.",
            number: "03"
        },

        {
            title: "AI IoT Devices",
            img: Cat4,
            description:
                "AI-powered IoT devices enabling predictive automation, remote monitoring, real-time insights, seamless connectivity, and enhanced performance for smart homes, businesses, industries, and technology-driven environments requiring efficiency and intelligence.",
            number: "04"
        },
    ];

    useEffect(() => {
        gsap.fromTo(
            cardRefs.current,
            {
                opacity: 0,
                y: 60,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: cardRefs.current[0],
                    start: "top 80%",
                }
            }
        );
    }, []);

    return (
        <section className="md:py-16 py-16 bg-white">
            <div className="max-w-[1540px] mx-auto px-4">
                <div className="w-full flex flex-col md:flex-row justify-between md:items-start gap-4">

                    {/* Left Text */}
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-wide leading-snug">
                            PRODUCT <span className="text-[#dc3545]">CATEGORIES</span>
                        </h2>

                        <p className="mt-3 text-gray-600 max-w-3xl text-sm sm:text-base leading-relaxed tracking-wider">
                            The subtext helps customers quickly understand the value or specific
                        </p>
                    </div>

                    {/* Right Button */}
                    <button
                        className="
            w-[160px] md:w-auto lg:w-auto
            flex items-center justify-center md:justify-start
            gap-2 px-6 py-2
            bg-[#dc3545] text-white 
            font-medium rounded-full shadow
            hover:bg-red-700 transition-all duration-300
        "
                    >
                        View More <span className="text-lg">→</span>
                    </button>

                </div>

                {/* Cards */}
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center">
                    {cardData.map((card, i) => (
                        <div
                            key={i}
                            ref={(el) => (cardRefs.current[i] = el)}
                            className="clip-card group"
                        >
                            {/* Inside Image */}
                            <img
                                src={card.img}
                                alt={card.title}
                                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:blur-md group-hover:scale-110"
                            />

                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500" />

                            {/* Number Label (BOTTOM-LEFT) */}
                            <div className="absolute bottom-0 left-0 text-[#000] text-6xl font-black drop-shadow-2xl opacity-70 leading-none">
                                {card.number}
                            </div>

                            {/* Title + Line + Description */}
                            <div className="absolute inset-0 flex flex-col opacity-0 group-hover:opacity-100 transition-all duration-500 p-8">
                                <div className="text-white font-semibold text-3xl drop-shadow-lg md:text-left">
                                    {card.title}
                                </div>
                                <div className="w-2/6 border-t-2 border-dotted border-[#ffffff50] mt-5 mb-2"></div>
                                <p className="text-white text-sm mt-2 md:text-left ">{card.description}</p>
                            </div>

                            {/* Arrow button */}
                            <div className="absolute bottom-3 right-10 opacity-0 group-hover:opacity-100 transition-all duration-500 cursor-pointer">
                                <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-2xl font-bold
        group-hover:scale-125 group-hover:translate-x-2 transition-all duration-500 shadow-lg">
                                    <ArrowRight className="h-[15px]" />
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
}

function ServicesSection() {
    const [active, setActive] = useState(null);

    const items = [
        {
            id: 1,
            img: sell1,
            title: "Smart Home Controller",
            desc: "A premium smart home automation device that manages lighting, security, and appliances.",
            height: "450px"
        },
        {
            id: 2,
            img: sell2,
            title: "Wireless Sensor",
            desc: "Highly accurate wireless sensor for real-time monitoring.",
            height: "215px"
        },
        {
            id: 3,
            img: sell3,
            title: "Security Camera",
            desc: "Crystal-clear surveillance with night vision and mobile alerts.",
            height: "215px"
        },
        {
            id: 4,
            img: sell4,
            title: "Industrial IoT Hub",
            desc: "Manages multiple devices with ultra-fast data processing.",
            height: "450px"
        }
    ];

    return (
        <>
            <section className="py-16 bg-[#f5f5f5] rounded-2xl">
                <div className="max-w-[1540px] mx-auto px-4">

                    {/* Heading Row */}
                    <div className="w-full flex flex-col md:flex-row justify-between md:items-start gap-4">

                        {/* Heading + Subtext */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-wide leading-snug">
                                OUR TOP-SELLING <span className="text-[#dc3545]">PRODUCTS</span>
                            </h2>
                            <p className="text-gray-600 mt-1 text-sm sm:text-base tracking-wide">
                                The subtext helps customers quickly understand the value.
                            </p>
                        </div>

                        {/* Button */}
                        <button className="
        w-[160px] md:w-auto lg:w-auto
        flex items-center justify-center sm:justify-start 
        gap-2 px-6 py-2
        bg-[#ffffff70] text-[#1a1a1a] 
        font-medium rounded-full shadow
        hover:bg-[#ffffff] transition-all duration-300
    ">
                            View More <span className="text-lg">→</span>
                        </button>
                    </div>



                    {/* GRID LAYOUT */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

                        {/* LEFT — Big Image */}
                        <TopSellCard item={items[0]} active={active} setActive={setActive} />

                        {/* MIDDLE — Two Stacked */}
                        <div className="flex flex-col gap-6">
                            <TopSellCard item={items[1]} active={active} setActive={setActive} />
                            <TopSellCard item={items[2]} active={active} setActive={setActive} />
                        </div>

                        {/* RIGHT — Tall Image */}
                        <TopSellCard item={items[3]} active={active} setActive={setActive} />

                    </div>

                </div>
            </section>
        </>
    );
}

function TopSellCard({ item, active, setActive }) {
    const isOpen = active === item.id;

    return (
        <div
            className="rounded-2xl overflow-hidden relative border border-white/40 transition-all duration-300"
            style={{ height: item.height }}
        >
            {/* IMAGE */}
            <img
                src={item.img}
                className={`w-full h-full object-cover transition-all duration-500 ${isOpen ? "scale-110 opacity-30" : ""
                    }`}
            />

            {/* OVERLAY */}
            {isOpen && (
                <div className="absolute inset-0 bg-[#1a1a1a]/90 flex flex-col text-white md:p-6 p-6">
                    <h2 className="text-2xl font-bold my-2">{item.title}</h2>

                    {/*  Dotted Line under H2 */}
                    <div className="w-2/6 border-t-2 border-dotted border-[#ffffff50] mb-3"></div>

                    <p className="text-sm opacity-80">{item.desc}</p>
                </div>
            )}


            {/* PLUS / X BUTTON */}
            <button
                onClick={() => setActive(isOpen ? null : item.id)}
                className="absolute bottom-4 right-4 w-10 h-10 rounded-full flex items-center justify-center bg-white transition-all duration-300"
            >
                <Plus
                    className={`h-[15px] transition-transform duration-300 ${isOpen ? "rotate-45" : ""
                        }`}
                />
            </button>
        </div>
    );
}

function SolutionsSection() {
    const slides = [
        {
            type: "video",
            category: "Smart Living",
            title: "Transform Your Space with Intelligent Home Automation",
            tags: ["Smart Home", "Automation", "Convenience"],
            src: sampleVideo1,
        },
        {
            type: "video",
            category: "Success Story",
            title: "Crafting a digital oasis: a Saudi university's journey to smart education",
            tags: ["Education", "Saudi Arabia", "Security and Intelligence"],
            src: sampleVideo2,
        },
        {
            type: "video",
            category: "Innovation",
            title: "Pan Tilt and Zoom (PTZ) CCTV: Next-Gen Security Solutions",
            tags: ["Security", "IoT", "Smart Technology"],
            src: sampleVideo3,
        },
    ];

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "15%",
        slidesToShow: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: { centerPadding: "10%" }
            },
            {
                breakpoint: 1024,
                settings: { centerPadding: "5%" }
            },
            {
                breakpoint: 768,
                settings: { centerPadding: "0px" }
            }
        ]
    };

    return (
        <>
            {/* Heading */}
            <div className="pt-16 px-4 max-w-[1540px] mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-wide leading-snug">
                    NYSTAI-IoT <span className="text-[#dc3545]">SOLUTIONS</span>
                </h2>

                <p className="mt-3 text-gray-600 text-sm sm:text-base tracking-wider leading-relaxed">
                    The subtext helps customers quickly understand the value or specific
                </p>
            </div>

            {/* Slider Section */}
            <section>
                <div className="relative my-10 sm:px-4">
                    <Slider {...settings}>
                        {slides.map((slide, i) => (
                            <div key={i} className="px-2">
                                <div className="
                                    relative w-full 
                                    h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] 
                                    rounded-[20px] overflow-hidden
                                ">
                                    {/* Background (Video / Image) */}
                                    {slide.type === "video" ? (
                                        <video
                                            src={slide.src}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div
                                            className="absolute inset-0 bg-cover bg-center"
                                            style={{ backgroundImage: `url(${slide.src})` }}
                                        />
                                    )}

                                    {/* Dark overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

                                    {/* Text Content */}
                                    <div className="relative h-full flex items-end pb-12 sm:pb-16 md:pb-20 px-6 sm:px-10 md:px-16">
                                        <div className="max-w-[500px]">
                                            {/* Category */}
                                            <span className="text-white/90 text-xs sm:text-sm md:text-base font-semibold tracking-wide uppercase">
                                                {slide.category}
                                            </span>

                                            {/* Title */}
                                            <h1 className="
                                                text-white 
                                                text-xl sm:text-2xl md:text-3xl lg:text-3xl 
                                                font-bold leading-snug md:leading-tight 
                                                mt-3 mb-4
                                            ">
                                                {slide.title}
                                            </h1>

                                            {/* Dotted Line */}
                                            <div className="max-w-[350px] h-[2px] border-b border-dotted border-white/60 mb-4"></div>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-1 sm:gap-2">
                                                {slide.tags.map((tag, idx) => (
                                                    <span key={idx} className="text-white/90 text-xs sm:text-sm md:text-base">
                                                        {tag}
                                                        {idx < slide.tags.length - 1 && ","}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Slider Custom CSS */}
                <style>{`
                    .slick-slide {
                        transition: all 0.3s ease;
                        opacity: 0.4;
                        transform: scale(0.85);
                    }
                    .slick-slide.slick-active,
                    .slick-center {
                        opacity: 1;
                        transform: scale(1);
                    }
                    .slick-dots {
                        bottom: 22px;
                    }
                    .slick-dots li button:before {
                        width: 10px;
                        height: 10px;
                        background: white;
                        opacity: 0.4;
                        border-radius: 50%;
                        content: '';
                    }
                    .slick-dots li.slick-active button:before {
                        opacity: 1;
                        width: 18px;
                        border-radius: 6px;
                    }
                `}</style>
            </section>
        </>
    );
}

function Waterlevelontroller() {
    return (
        <>
            <section className="py-5 md:py-16 bg-white">
                <div className="max-w-[1540px] mx-auto px-4">

                    <div className="grid lg:grid-cols-2 gap-5 items-center">

                        {/* Left Image */}
                        <div className="relative overflow-hidden rounded-2xl">
                            <img
                                src={Waterlevel}
                                alt="Water Level Controller"
                                className="
                        w-full h-[320px] sm:h-[420px] md:h-[500px] lg:h-[580px]
                        object-cover rounded-2xl
                        transition-transform duration-500 ease-out
                        hover:scale-110
                    "
                            />
                        </div>

                        {/* Right Content */}
                        <div className="
                rounded-2xl bg-[#f9f9f9]
                flex flex-col justify-center
                p-6 sm:p-10
            ">

                            <div className="max-w-[600px] lg:h-[500px] mx-auto flex items-center">

                                <div className="">

                                    <h2 className="text-3xl sm:text-4xl md:text-[36px] font-bold text-gray-900 mb-4 leading-tight">
                                        Automated <span className="text-red-500">Water Level Controller</span>
                                    </h2>

                                    <p className="text-gray-600 text-base sm:text-[17px] leading-relaxed mb-6">
                                        Introducing our Automated Water Level Controller with a built-in level monitor and
                                        1000-meter range, ensuring efficient water management for your home or business.
                                        With a 1-year warranty, this system guarantees reliability, automates water usage,
                                        and prevents overflows. Stay in control with real-time monitoring anywhere, even on
                                        your mobile device.
                                    </p>

                                    {/* Features */}
                                    <div className="space-y-4 mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-[#ffc107] flex items-center justify-center flex-shrink-0">
                                                <Shield className="w-5 h-5 text-white" />
                                            </div>
                                            <span className="text-gray-700 tracking-wide text-sm sm:text-base">
                                                Automated water level control with real-time monitoring.
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-[#ffc107] flex items-center justify-center flex-shrink-0">
                                                <Wifi className="w-5 h-5 text-white" />
                                            </div>
                                            <span className="text-gray-700 tracking-wide text-sm sm:text-base">
                                                10 Kilometer range for flexible installation with Access.
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-[#ffc107] flex items-center justify-center flex-shrink-0">
                                                <Smartphone className="w-5 h-5 text-white" />
                                            </div>
                                            <span className="text-gray-700 tracking-wide text-sm sm:text-base">
                                                Mobile and Desktop connectivity for remote access.
                                            </span>
                                        </div>
                                    </div>

                                    {/* Button */}
                                    <button className="
                        flex items-center gap-2
                        px-6 py-2 bg-[#dc3545] text-white
                        font-medium rounded-full shadow
                        hover:bg-red-700 transition-all duration-300
                    ">
                                        View More
                                        <span className="text-lg">→</span>
                                    </button>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

function WhyNystai() {
    const containerRef = useRef(null);
    const scrollRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    const sections = [
        {
            title: "Why Nystai",
            description: "We manage your projects using established agile techniques to ensure collaboration between all parties involved. Our streamlined process results in quicker completion times and the attainment of even the most challenging objectives.",
            image: null
        },
        {
            title: "Discovery Phase",
            description: "We conduct thorough research on the client's business to identify areas for improvement before beginning any development work. Our planning phase is crucial to successful outcomes and delivering better results.",
            image: WhynysImg1
        },
        {
            title: "Discovery Phase",
            description: "We create a comprehensive product from start to finish and offer customized web UX/UI design to meet your specifications. We always keep in mind the end-users to enhance their experience.",
            image: WhynysImg2
        },
        {
            title: "Discovery Phase",
            description: "We employ diverse web development methods for smooth project execution. Our full web development services cover different programming languages and technical solution architectures.",
            image: WhynysImg3
        }
    ];

    useEffect(() => {
        const container = containerRef.current;
        const scrollContent = scrollRef.current;

        const handleScroll = () => {
            const container = containerRef.current;
            const scrollContent = scrollRef.current;

            const containerRect = container.getBoundingClientRect();
            const totalHeight = container.offsetHeight - window.innerHeight;

            const scrolled = Math.min(Math.max(-containerRect.top, 0), totalHeight);
            const progress = (scrolled / totalHeight) * 100;

            const scrollWidth = scrollContent.scrollWidth - container.offsetWidth;
            const translateX = -(scrollWidth * (progress / 100));

            scrollContent.style.transform = `translateX(${translateX}px)`;
            setScrollProgress(progress);
        };

        window.addEventListener("lenis-scroll", handleScroll);
        return () => window.removeEventListener("lenis-scroll", handleScroll);
    }, []);
    return (
        <div className="bg-[#f5f5f5] pt-10" style={{ borderRadius: "30px" }}>
            <div className="max-w-[1500px] mx-auto">

                {/* Horizontal Scroll Container */}
                <div ref={containerRef} className="h-[400vh] relative">
                    {/* Scroll Progress Indicator */}
                    {/* <div className="h-2 bg-gray-200 z-50" style={{ position: "sticky", top: "100px", borderRadius: "10px" }}>
                        <div
                            className="h-full bg-[#dc3545] transition-all duration-100"
                            style={{ width: `${scrollProgress}%`, borderRadius: "10px" }}
                        />
                    </div> */}
                    <div className="sticky top-0 h-screen overflow-hidden">
                        <div ref={scrollRef} className="flex h-full transition-transform duration-100 ease-out">
                            {sections.map((section, index) => (
                                <div
                                    key={index}
                                    className="min-w-screen h-full flex items-center justify-center px-20 flex-shrink-0"
                                >
                                    <div className="max-w-6xl w-full">
                                        {index === 0 ? (
                                            <div className="space-y-6">
                                                <h2 className="text-4xl md:text-4xl font-bold text-[#dc3545]">
                                                    {section.title}
                                                </h2>
                                                <p className="text-  text-gray-600 max-w-md leading-relaxed">
                                                    {section.description}
                                                </p>
                                            </div>
                                        ) : (
                                            <div className="space-y-8">
                                                <div className="space-y-4">
                                                    <h3 className="text-4xl md:text-4xl font-bold text-[#dc3545]">
                                                        {section.title}
                                                    </h3>
                                                    <p className="text-sm text-gray-600 max-w-lg leading-relaxed">
                                                        {section.description}
                                                    </p>
                                                </div>
                                                {section.image && (
                                                    <div className="mt-8">
                                                        <img
                                                            src={section.image}
                                                            alt={section.title}
                                                            className="w-full max-w-2xl h-96 object-cover rounded-2xl shadow-lg"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Additional content section */}
                {/* <div className="h-screen flex items-center justify-center bg-gray-50">
                <h2 className="text-4xl font-bold text-gray-900">
                    Continue scrolling for more content...
                </h2>
            </div> */}
            </div>


        </div>
    );
}

function PartnersLogo() {
    const partners = [
        partner1, partner2, partner3, partner4, partner5,
        partner6, partner7, partner8, partner9, partner10,
        partner11, partner12, partner13, partner14, partner15,
        partner16, partner17, partner18, partner19, partner20
    ];

    const row1 = partners.slice(0, 10);
    const row2 = partners.slice(10, 20);

    return (
        <section className="max-w-[1540px] mx-auto py-16 px-4 bg-white">

            <div className="pb-8 sm:pb-10">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-wide leading-snug">
                    Partners & <span className="text-[#dc3545]">Testimonials</span>
                </h2>
            </div>

            {/* ROW 1 → LTR (ONE BY ONE) */}
            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 1200, // Moves one-by-one every 1.2 sec
                    disableOnInteraction: false,
                }}
                loop={true}
                slidesPerView={6}
                spaceBetween={20}
                speed={600} // smooth slide
                breakpoints={{
                    320: { slidesPerView: 2 },
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                    1280: { slidesPerView: 6 },
                }}
            >
                {row1.map((logo, i) => (
                    <SwiperSlide key={`row1-${i}`}>
                        <div className="h-24 bg-[#f5f5f5] rounded-xl flex items-center justify-center shadow-sm">
                            <img src={logo} className="w-[100px] object-contain" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* ROW 2 → RTL (ONE BY ONE) */}
            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 1200,
                    reverseDirection: true, // RTL movement
                    disableOnInteraction: false,
                }}
                loop={true}
                slidesPerView={6}
                spaceBetween={20}
                speed={600}
                className="mt-6"
                breakpoints={{
                    320: { slidesPerView: 2 },
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                    1280: { slidesPerView: 6 },
                }}
            >
                {row2.map((logo, i) => (
                    <SwiperSlide key={`row2-${i}`}>
                        <div className="h-24 bg-[#f5f5f5] rounded-xl flex items-center justify-center shadow-sm">
                            <img src={logo} className="w-[100px] object-contain" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    );
}

function Testimonial() {
    const testimonials = [
        { id: 1, text: "Amazing service with reliable fast support that exceeded our expectations.", name: "Rohit Kumar" },
        { id: 2, text: "Professional team delivering seamless integrations with excellent after support.", name: "Sanjay Patel" },
        { id: 3, text: "A trusted company providing quality solutions with timely communication always.", name: "Aisha Verma" },
        { id: 4, text: "Great experience working with a responsive team offering premium service quality.", name: "Michael Das" },
        { id: 5, text: "Their system improved our workflow efficiency making tasks much easier daily.", name: "Kavya Menon" },
        { id: 6, text: "Affordable pricing combined with strong performance and outstanding customer satisfaction.", name: "Rahul Singh" },
        { id: 7, text: "Reliable long term partner delivering consistent impressive results for our projects.", name: "Priya Sharma" },
    ];

    return (
        <>
            <section className="max-w-[1540px] mx-auto px-4 bg-white">

                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loop={true}
                    spaceBetween={20}
                    slidesPerView={3}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 1 },
                        1024: { slidesPerView: 2 },
                        1280: { slidesPerView: 4 },
                    }}
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={item.id}>
                            <div className="bg-[#eeeeee] rounded-xl p-[25px] h-[400px] flex flex-col shadow-sm relative">

                                {/* Top Number */}
                                <span className="absolute text-[#dc3545] font-bold text-sm">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                {/* Centered Text */}
                                <div className="flex-1 flex items-center justify-center px-2">
                                    <p className="text-gray-800 text-left text-md font-medium leading-relaxed italic">
                                        " {item.text}"
                                    </p>
                                </div>

                                {/* Bottom Name */}
                                <p className="text-[#dc3545] font-semibold text-sm text-left mt-auto">
                                    — {item.name}
                                </p>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </section>
        </>
    );
}
