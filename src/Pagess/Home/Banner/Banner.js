import React from 'react';
import { Link } from 'react-router-dom';
import BannerAnnimashion from '../../BrowserAnimashion/BrowserAnimashion';
import Typewriter from 'typewriter-effect';
import './Banner.css'
const Banner = () => {


    return (

        

        <div class="hero min-h-screen  bg-[url('/src/assets/img/licha.png')]  ">

                
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <BannerAnnimashion />
                    <div>
                        <h1  id="type-text"className="text-5xl font-bold"><Typewriter
                            options={{
                                strings: ['Hello  I am Lichachowdhury', 'World'],
                                autoStart: true,
                                loop: true,
                            }}
                        />

                        </h1>
                        <div className='text-white'>
                        <p class="py-6">We now have high quality domestic and foreign laptops. You can purchase from our dealer ship the laptop of your choice for your store such as Asus Dell Hp lenovo Samsung Acer Apple Toshiba Laptop If you have an old 19th century photograph with the name and sometimes the address</p>

                        </div>



                        <Link to="/about">
                            <button class=" btn hover-info ">More...</button>
                        </Link>

                    </div>
                </div>
            </div>
        
    );
};

export default Banner;