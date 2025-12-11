import React from 'react'

import smarthomebanner from "../../assets/Images/Allsolutions-Images/Smarthome/smarthomebanner.jpeg"

const Smarthome = () => {
    return (
        <>
            <Hero />
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