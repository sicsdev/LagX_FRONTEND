import React from 'react';
import '../../app/globals.css';
import './pricing.css';
import Reviews from '../../components/reviews'
import Cards from '../../components/cards'
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';


const Pricing = () => {
    return (
        <>
            <Navbar />
            <div className="pricing container mx-auto py-8 px-20">
                <div className="flex flex-col justify-center items-center">
                    <h1 className='text-[96px] tracking-wide font-normal font-bebas-neue '>GET LAGX IN <span>3 STEPS</span></h1>
                    <div className="select_plan">
                        Select a plan that works for you:
                    </div>
                    <div class="flex items-center">
                        <span className="ml-3">Monthly</span>

                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" checked />
                            <div class="w-11 h-5 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.8 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  toggle  toggle_ball"></div>
                            <span className="ml-3">Yearly <sup> <button className="saving-btn">12% Save</button></sup></span>


                        </label>

                    </div>

                </div>

                <Cards />
            </div>
            <Reviews />
            <Footer />

        </>
    );
}

export default Pricing;
