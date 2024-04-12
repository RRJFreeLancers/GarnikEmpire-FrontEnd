import React, { useEffect, useState } from 'react';
import fetchCaraouselImage from '../Services/CaraouselService';
import Carousel from 'react-bootstrap/Carousel';

import WomenCat from '../../src/assets/Images/WomenCat.png'
import manCat from '../../src/assets/Images/ManCat.png'
import Accessory from '../../src/assets/Images/Accessory.png'
import Product from './Product';




const Home = () => {
    const [carouselData, setCarouselData] = useState([]);
    const [index, setIndex] = useState(0);

    const fetchData = async () => {
        const responseData = await fetchCaraouselImage();
        // console.log(responseData);
        setCarouselData(responseData);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            {/* Carousel */}
            <div>
                <Carousel activeIndex={index} onSelect={handleSelect} interval={2000} data-bs-theme="dark">
                    {carouselData.map((item) => (
                        <Carousel.Item key={item.id}>
                            <img
                                classNameName="d-block w-100"
                                // src={item.avatar}
                                src="https://ik.imagekit.io/bhsa3gea8yj/homepage_images/banner/IMG1712402209-0.jpg"
                                
                                alt={`Carousel Image ${item.id}`}
                                style={{ height: '400px' }}
                            />
                            <Carousel.Caption classNameName="black-caption">
                                <p classNameName='text-black'>Created At: {item.createdAt.split('T')[0]}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>

            {/* Men,Women and Accessories  */}
            <div className="flex justify-around gap-4 mt-10 px-5">

                <div className="relative border border-black h-[251px]">

                    {/* <title & season  */}
                        <div className="absolute top-10 left-4">
                            <h1 className="font-bold text-4xl">Women</h1>
                            <h2 className="text-[16px]">Spring 2018</h2>

                        </div>

                        <div>

                            <img src={WomenCat} alt="" className="h-[250px]"/>
                        </div>

                </div>

                <div className="relative border border-black h-[251px]">

                    {/* title & season  */}
                        <div className="absolute top-10 left-4">
                            <h1 className="font-bold text-4xl">Men</h1>
                            <h2 className="text-[16px]">Spring 2018</h2>

                        </div>

                        <div>

                            <img src={manCat} alt="" className="h-[250px]"/>
                        </div>

                </div>

                <div className="relative border border-black h-[251px]">

                    {/* title & season */}
                        <div className="absolute top-10 left-4">
                            <h1 className="font-bold text-4xl">Accessories</h1>
                            <h2 className="text-[16px]">New Trend</h2>

                        </div>

                        <div>

                            <img src={Accessory} alt="" className="h-[250px]"/>
                        </div>

                </div>
            
            
            </div>

            {/* products */}
            <Product/>
        </>
    );
};

export default Home;





















































/* The onSelect is indeed a prop, and it's a callback function that gets called when the active
 item index changes in the React Bootstrap Carousel component. */

/* The onSelect prop in the React Bootstrap Carousel component is a callback function that gets 
called when the active item index changes, either due to user interaction (manual slide selection)
or automatic transition (auto slide).*/

/* interval is alo prop */