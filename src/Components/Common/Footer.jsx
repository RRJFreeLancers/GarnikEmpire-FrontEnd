import React from 'react'
import message from '../../../src/assets/Images/message.png'
import linkedin from '../../../src/assets/Images/linkedin.png'
import facebook from '../../../src/assets/Images/Facebook.png'
import whatsapp from '../../../src/assets/Images/whatsapp.png'
import chat from '../../../src/assets/Images/chat.png'




const Footer = () => {

  return (
    /*  bg-[#454848] */


    <>
        <footer className="mt-14 w-full bg-[#154253] sm:py-5 md:py-10 text-white flex flex-col sm:gap-8 gap-4 cursor-pointer">
            <div className="lg:w-[900px] sm:w-full mx-auto flex sm:flex-col md:flex-row md:justify-between sm:gap-6 md:px-5 text-center">
                <div className="hidden md:block">logo here</div>
                <div className="flex flex-col sm:gap-3 md:gap-5 lg:border-l border-white px-4">
                    <h1 className="md:text-lg">CATEGORIES</h1>
                    <div className="sm:text-[12px] md:text-[16px]">
                        <p>Women</p>
                        <p>Men</p>
                        <p>Shoes</p>
                        <p>Watches</p>
                    </div>
                </div>
        
                <div className="flex flex-col sm:gap-3 md:gap-5 lg:border-l border-white px-4">
                    <h1 className="md:text-lg">Help</h1>
                    <div className="sm:text-[12px] md:text-[16px]">
                        <p>Track Order</p>
                        <p>Returns</p>
                        <p>Shipping</p>
                        <p>FAQs</p>
                    </div>
                </div>
                <div className="flex flex-col sm:gap-3 md:gap-5 lg:border-l border-white px-4">
                    <h1 className="md:text-lg">Company</h1>
                    <div className="sm:text-[12px] md:text-[16px]">
                        <p>About Us</p>
                        <p>Contact Us</p>
                        <p>Resources</p>
                        <p>Privacy policy</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-between px-[60px]">
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-4">
                        <img src={message} alt="" className="sm:w-[20px] sm:h-[20px] md:w-[30px] md:h-[30px] cursor-pointer" />
                        <img src={whatsapp} alt="" className="sm:w-[20px] sm:h-[20px] md:w-[30px] md:h-[30px] cursor-pointer"/>
                        <img src={linkedin} alt="" className="sm:w-[20px] sm:h-[20px] md:w-[30px] md:h-[30px] cursor-pointer"/>
                        <img src={facebook} alt="" className="sm:w-[20px] sm:h-[20px] md:w-[33px] md:h-[33px] cursor-pointer"/>
                    </div>
                    <button className="bg-[#F48C06]  px-3 py-2 rounded-full sm:text-[12px] md:text-[16px]">Get In Touch</button>
                </div>
                <img src={chat} alt="" className="sm:w-[40px] sm:h-[40px] md:w-[60px] md:h-[60px] cursor-pointer"/>
            </div>
            <hr/>
            <p className="text-center sm:text-[12px] md:text-[16px]">© 2024 Garnik Empire</p>
        </footer>

    </>

  )
}

export default Footer