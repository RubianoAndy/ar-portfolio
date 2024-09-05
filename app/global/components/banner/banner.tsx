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
                        <h2 className="font-semibold text-black text-4xl lg:text-5xl">¡Hola, soy <span className="text-green-700">Andy Rubiano!</span></h2>

                        <p className="mt-2 text-lg text-black text-justify">
                            Soy Ingeniero electrónico con experiencia desarrollo de software y conocimientos en Git, Power BI, MySQL, SQL y PostgreSQL 
                            y en lenguajes de programación como Python, HTML, TypeScript, JavaScript, C++ y PHP, aplicados en frameworks como Angular (Bootstrap 
                            y Tailwind CSS), Laravel, Next.js (React) y Django (rest framework y JWT).
                        </p>

                        <div className="flex justify-center lg:justify-start mt-6 space-x-2">
                            <Link href={'/portafolio'} className="px-4 py-3 bg-green-700 text-gray-200 text-xs font-semibold rounded hover:bg-green-900">Portafolio</Link>
                            <Link href={'/curriculum'} className="px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400">Curriculum</Link>
                            <Link href={'https://www.linkedin.com/in/rubianoandy/'} target='_blank' className="px-4 py-3 bg-blue-900 text-white text-xs font-semibold rounded hover:bg-gray-400"><i className="fa-brands fa-linkedin mr-2"></i> LinkedIn</Link>
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
