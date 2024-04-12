import React from 'react'
import logo from '../../../src/assets/Images/logoGarnier.jpg'
import { SlMagnifier } from "react-icons/sl";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

import {useNavigate} from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

  return (

    <>
        
        <div className="flex sticky top-0 z-50 justify-between bg-[#154253] py-3 px-5">

                {/* logo and Navlist  */}
                <div className="flex gap-14">

                    {/* logo */}
                    <div className="flex items-center justify-center gap-3">

                        <img src={logo} alt="GarnikEmpireLogo" className="h-[50px] w-[50px]"/>
                        <p className="text-xl text-white font-bold">Garnik <span className="text-gray-400">Empire</span></p>

                    </div>

                    {/* navlist */}
                    <nav className="flex items-center justify-center text-white">

                        <ul className="flex gap-8">

                            <li onClick={()=>{navigate('/')}} className="hover:text-blue-300">Home</li>
                            <li onClick={()=>{navigate('/shop')}} className="hover:text-blue-300">Shop</li>
                            <li onClick={()=>{navigate('/about')}} className="hover:text-blue-300">About</li>
                            <li onClick={()=>{navigate('/contact')}} className="hover:text-blue-300">Contact</li>
                
                        </ul>
                    </nav>

                </div>

                {/* search,cart and favourites  */}
                <div className="flex items-center justify-center gap-4 text-[20px]">
                    <input type="text" placeholder='Search in Garnik Empire' className='text-xs rounded py-2 pl-2 pr-7'/>
                    <SlMagnifier color='white' />
                    <FaShoppingCart size={25} color="white" />
                    <FaRegHeart color='white' />
                </div>


        </div>

    </>

  )
}

export default Navbar










