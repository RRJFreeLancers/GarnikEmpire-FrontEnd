import React from 'react'
import image from "../assets/Images/image.png"

const Product = () => {
  const array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
  return (
    <section className='w-full px-10 mt-[100px] flex flex-col gap-5'>
        <h1 className='text-3xl font-bold'>PRODUCT OVERVIEW</h1>
        <div className='w-full flex justify-between text-[gray] font-semibold'>
          <ul className='flex gap-x-10 '>
            <li>All Products</li>
            <li>Women</li>
            <li>Men</li>
          </ul>
          <div className='flex gap-x-5'>
            <div className='px-4 py-2 border'>Filter</div>
            <div className='px-4 py-2 border'>Search</div>
          </div>
        </div>

        <div className='w-full grid grid-cols-1 gap-12  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            
        {
          array.map((item,i)=>(
            <div key={i} className='flex flex-col gap-2'>

                <div className=' w-[250px] h-[300px] overflow-hidden'>
                  <img src={image} alt="" className='w-full h-full hover:transform hover:scale-105 duration-300 '/>
                </div>

                  <div className='w-full flex justify-around cursor-pointer text-[14px]'>
                      <div>
                          <p className='text-[gray]'>Esprit Ruffle Shirt</p>
                          <p>$16.64</p>
                      </div>
                      <div className='w-[100px] h-[40px] flex items-center justify-center bg-[#ffa600] text-white rounded-full'>
                        Add to cart
                      </div>
                  </div>
            </div>
          ))
        }

        </div>

    </section>
  )
}

export default Product