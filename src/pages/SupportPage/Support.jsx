import React from 'react'
import supportbanner from "../../assets/Images/Support-Images/supportban.jpeg"

import message from "../../assets/Images/Support-Images/messageicon.png"
import call from "../../assets/Images/Support-Images/callicon.png"
import location from "../../assets/Images/Support-Images/locationicon.png"

import sales from "../../assets/Images/Support-Images/sales.jpeg"
import support from "../../assets/Images/Support-Images/support.jpeg"
import partner from "../../assets/Images/Support-Images/partner.jpeg"

const Support = () => {
  return (
    <>
      <Hero />
      <Formdesign />
    </>
  )
}

export default Support;


function Hero() {
  return (
    <>
      {/* CATEGORY BANNER */}
      <div className="w-full">
        <img
          src={supportbanner}
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


function Formdesign() {
  return (
    <>
      <div className="max-w-[1540px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-12">

          {/* Left contents */}
          <div className="lg:col-span-4 mx-auto">
            <div className="space-y-8 mt-11 max-w-[300px]">
              <div>
                <h3 className="text-[#dc3545] text-[30px] font-bold">GET IN TOUCH!</h3>
                <p className="text-[#000] text-[15px] mt-3 tracking-wide"> Need something cleared up? Here are our most frequently asked questions.</p>
              </div>

              {/* Email Section */}
              <div className="space-y-4 mt-5">
                <img src={message} alt="" />
                <h4 className="font-semibold text-lg">Email</h4>
                <p className="text-gray-600 text-[15px]">Our friendly team is here to help.</p>
                <p className="text-[#ffc107] text-[20px] font-bold">Nystai@support.com</p>
              </div>

              {/* Phone Section */}
              <div className="space-y-4 mt-5">
                <img src={call} alt="" />
                <h4 className="font-semibold text-lg">Phone</h4>
                <p className="text-gray-600 text-[15px]">Mon-Fri from 8am to 5pm</p>
                <p className="text-[#ffc107] text-[20px] font-bold">+91 81899 97770</p>
              </div>

              {/* Office Section */}
              <div className="space-y-4 mt-5">
                <img src={location} alt="" />
                <h4 className="font-semibold text-lg">Office</h4>
                <p className="text-gray-600 text-[15px]">Come say hello at our office HQ.</p>
                <p className="text-[#ffc107] text-[20px] font-bold">2/153, Padmalaya Nagar,<br />Narasimhanaickenpalayam,<br />Coimbatore - 641031</p>
              </div>

            </div>
          </div>

          {/* Right contents */}
          <div className="lg:col-span-8" style={{ marginTop: "-100px" }}>
            <div className="bg-white rounded-[20px] shadow-lg py-10">

              <div className="max-w-[870px] mx-auto px-4">



                <h2 className="text-[25px] font-bold mt-7 mb-3">PROSPEROUS FUTURE!</h2>
                <p className="text-gray-600 text-[15px] mb-10">We'd love to hear from you. Please fill out this form.</p>


                <div className="grid grid-cols-3 gap-6 mb-6 h-[110px]">

                  <button
                    className="rounded-lg font-semibold text-white flex items-center justify-center bg-cover bg-center hover:opacity-90 transition"
                    style={{ backgroundImage: `url(${sales})` }}
                  >
                    {/* SALES */}
                  </button>

                  <button
                    className="rounded-lg font-semibold text-white flex items-center justify-center bg-cover bg-center hover:opacity-90 transition"
                    style={{ backgroundImage: `url(${support})` }}
                  >
                    {/* SUPPORT */}
                  </button>

                  <button
                    className="rounded-lg font-semibold text-white flex items-center justify-center bg-cover bg-center hover:opacity-90 transition"
                    style={{ backgroundImage: `url(${partner})` }}
                  >
                    {/* PARTNER */}
                  </button>

                </div>


                <p className="text-[15px] text-gray-600 mt-10 mb-5">Fill out the form below for Support inquiries.</p>


                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-3 text-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                    />
                    <input
                      type="text"
                      placeholder="Business Name"
                      className="w-full px-4 py-3 text-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex gap-2">
                      <select className="px-1 py-1 text-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300">
                        <option>+91</option>
                      </select>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 text-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 text-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Address"
                      className="w-full px-4 py-3 text-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                    />
                    <textarea
                      placeholder="Let us know how can we help you"
                      rows="3"
                      className="w-full px-4 py-3 text-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                    ></textarea>
                  </div>

                  <select className="w-full px-4 py-3 text-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 text-gray-500">
                    <option className=''>Select Product</option>
                  </select>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Device Model"
                      className="w-full px-4 py-3 text-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                    />
                    <input
                      type="text"
                      placeholder="Serial Number"
                      className="w-full px-4 py-3 text-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Firmware Version"
                      className="w-full px-4 py-3 text-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                    />
                    <input
                      type="text"
                      placeholder="Software Version"
                      className="w-full px-4 py-3 text-[14px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                    />
                  </div>

                  <div className="flex gap-4 justify-center">
                    <div className="w-[300px] flex items-center gap-2 p-4 border border-gray-300 rounded-lg bg-gray-50">
                      <input type="checkbox" className="w-5 h-5" />
                      <span className="text-[14px] text-gray-600">I'm not a robot</span>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-center">

                    <button
                      type="reset"
                      className="px-8 py-3 border-2 text-[14px] border-gray-300 rounded-lg hover:bg-gray-50 transition"
                    >
                      Reset
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3 bg-[#dc3545] text-[14px] text-white rounded-lg hover:bg-red-700 transition"
                    >
                      Submit
                    </button>
                  </div>
                </form>

              </div>

            </div>
          </div>

        </div>
      </div>

    </>
  )
}