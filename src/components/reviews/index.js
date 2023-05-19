import React from 'react';
import './reviews.css';

const Reviews = () => {
    return (
        <div className='reviews'>
            <div class="container mx-auto py-8 px-20">
                <div className="flex flex-col justify-center p-7 items-center">
                    <h2 className='text-4xl font-bold mb-3'>REVIEWS</h2>
                    <div className="select_plan">
                        We are trusted by those, below you can read the reviews
                    </div>
                </div>
                <div className="flex reviews_wrapper">
                    <div className="w-1/2 p-4">
                        <p>This is the best service for games that use a vpn connection. Thanks to this service my game is more focused and there are no crashes from the game as it was before. Stable connection and reliability, thats what LAGX says about the service</p>
                        <div className='rating_wrapper'>
                            <div className="flex items-center pt-4">
                                <span className='rating'>5.0</span>
                                <span className="text-yellow-500 text-lg mr-1">★</span>
                                <span className="text-yellow-500 text-lg mr-1">★</span>
                                <span className="text-yellow-500 text-lg mr-1">★</span>
                                <span className="text-yellow-500 text-lg mr-1">★</span>
                                <span className="text-yellow-500 text-lg">★</span>
                            </div>
                            <div className="heading1">
                                Aleksandr Kostylev “s1mple”
                            </div>
                            <div className="heading2">
                                Player - Natus Vincere
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 p-4">
                        <p>This is the best service for games that use a vpn connection. Thanks to this service my game is more focused and there are no crashes from the game as it was before. Stable connection and reliability, thats what LAGX says about the service</p>
                        <div className='rating_wrapper'>
                            <div className="flex items-center pt-4">
                                <span className='rating'>4.7</span>
                                <span className="text-yellow-500 text-lg mr-1">★</span>
                                <span className="text-yellow-500 text-lg mr-1">★</span>
                                <span className="text-yellow-500 text-lg mr-1">★</span>
                                <span className="text-yellow-500 text-lg mr-1">★</span>
                                <span className="textstar">★</span>
                            </div>
                            <div className="heading1">
                                Mathieu Herbaugh “ZywOo”

                            </div>
                            <div className="heading2">
                                Player - Vitality
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews