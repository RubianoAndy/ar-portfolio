'use client';

import Link from 'next/link';
import Image from 'next/image';

const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row bg-white md:h-[600px]">
            <div className="flex md:hidden py-8 justify-center items-center">
                <Image width={200} height={200} src="/assets/webpage/Developer.png" alt="Developer" className="rounded-full"/>
            </div>

            <div className='flex'>
                <div className="flex items-center text-center lg:text-left px-8 md:px-12 md:w-1/2">
                    <div>
                        <h2 className="font-semibold text-black text-4xl lg:text-5xl">Build Your New <span className="text-indigo-600">Idea</span></h2>

                        <p className="mt-2 text-lg text-black text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates. Cumque debitis dignissimos id quam vel!
                        </p>

                        <div className="flex justify-center lg:justify-start mt-6">
                            <Link href={'/curriculum'} className="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800">Get Started</Link>
                            <Link href={'/contact'} className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400">Learn More</Link>
                        </div>
                    </div>
                </div>

                <div className="hidden md:block md:w-1/2" style={{ clipPath: 'polygon(10% 0, 100% 0%, 100% 100%, 0 100%)' }}>
                    <div className="h-full bg-center bg-cover" style={{ backgroundImage: 'url(/assets/webpage/Developer.png)' }}>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
