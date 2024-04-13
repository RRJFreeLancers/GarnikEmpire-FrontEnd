import React from 'react'
import details from '../assets/Images/details.png'
import detail2 from '../assets/Images/detail2.png'
import detail3 from '../assets/Images/detail3.png'


const ProductList = () => {
  return (
    <>
    
    <div className=" flex pt-10 mx-[200px] bg-white">

        {/* side images */}
        <div className="flex flex-col gap-5 ">
                    <div className="pb-5 pl-5 pr-5  w-[130px] h-[95px]" >
                        <img src={details}/>
                    </div>
                    <div className="pb-5 pl-5 pr-5  w-[130px] h-[95px]"  >
                        <img src={detail2} />
                    </div>
                    <div className="pb-5 pl-5 pr-5  w-[130px] h-[95px]" >
                        <img src={detail3}/>
                    </div>


        </div>


        {/* Main Image */}
        <div className="left">
            
            <img src={details} className=" border  w-[900px] h-[600px] "/>

        </div>

        {/* Product Description */}
        <div className="left w-[532px] h-[600px]">
            
            <div>
                <p className="ml-10 text-xl mt-5"><b>Light Weight Jacket</b></p>
                <h4 className="ml-10 mt-5"><b>$400.00</b></h4>
            </div>

            <div className="mx-8 mt-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            
                Repellendus fugit necessitatibus voluptatum iure?
            </div>

            <div className="pt-8 flex">
                <label for="cars" className="ml-[60px]">Size:</label>
                <div className="pl-10 ">
                    <select name="clothes" id="clothes"  className="border-2 border-black ">
                    
                        <option value="volvo" className="bg-stone-400 ">Choose an option</option>
                        <option value="Size S">Size S</option>
                        <option value="Size M">Size M</option>
                        <option value="Size L">Size L</option>
                        <option value="Size XL">Size XL</option>
                        </select>
                </div>
                
            </div>

            <div className="pt-8 flex">
                <label for="cars" className="ml-[60px]">Color:</label>
                <div className="pl-7 ">
                    <select name="clothes" id="clothes"  className="border-2 border-black ">
                    
                        <option value="volvo" className="bg-stone-400 ">Choose an option</option>
                        <option value="Size S">RED</option>
                        <option value="Size M">GREEN</option>
                        <option value="Size L">YELLOW</option>
                        <option value="Size XL">PINK</option>
                        </select>
                </div>
                
                
            </div>

            <div className="counter pl-[130px] pt-10 flex">
                <div className="w-[45px] h-10 border border-black">
                    <h1 className="pl-4">_</h1>

                </div>
                <div className="w-[45px] h-10 border border-black">
                    <h1 className="pl-4 pt-2">0</h1>
                </div>
                <div className="w-[45px] h-10 border border-black">
                    <h1 className="pl-4 pt-2">+</h1>

                </div>

            </div>

            <div className="ml-[130px] mt-8 w-[150px] h-[40px] rounded-full bg-[#ffa600]" >
                <button className="pl-7 pt-2 text-white">ADD TO CART</button>
            </div>


        </div>

    </div>
    
    </>
  )
}

export default ProductList