import React from 'react';
import './footer.css'
import Link from 'next/link';
import '../../app/globals.css';

const Footer = () => {
    return (
        <>
            <footer class="footer">
                <div class="container mx-auto py-8 px-20">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div class="flex flex-col logo_wrapper">
                            <div>
                                <img src="./images/Logo.png" class="footer_logo mb-3" />
                                <h3>© 2099 Company</h3></div>
                            <h3 className='pl-3'>© 2023 LAGXVPN</h3>
                        </div>
                        <div class="flex flex-col">
                            <h3 class="text-lg mb-3">Homepage</h3>
                            <ul>
                                <li className='text-sm'><Link href="/">Lable</Link></li>
                                <li className='text-sm'><Link href="/">Lable</Link></li>
                                <li className='text-sm'><Link href="/">Lable</Link></li>
                                <li className='text-sm'><Link href="/">Lable</Link></li>
                                <li className='text-sm'><Link href="/">Lable</Link></li>

                            </ul>
                        </div>
                        <div class="flex flex-col">
                            <h3 class="text-lg mb-3">Account</h3>
                            <ul>
                                <li className='text-sm'><Link href="/">Lable</Link></li>
                                <li className='text-sm'><Link href="/">Lable</Link></li>
                                <li className='text-sm'><Link href="/">Lable</Link></li>
                            </ul>
                        </div>
                        <div class="flex flex-col">
                            <h3 class="text-lg mb-4">Get the app</h3>
                            <button class="download_btn text-sm mt-3 bg-blue-600 text-white py-2 px-4 rounded">
                                <img className='pl-3' src="./images/windows.png" /> <p>Download for Windows</p>
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer