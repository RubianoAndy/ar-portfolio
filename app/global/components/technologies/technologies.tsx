'use client';

import Image from "next/image";

const Technologies = () => {
    const technologiesOptions = [
        {
            logo: '/assets/technologies/Angular.png',
            name: 'Angular',
        },
        {
            logo: '/assets/technologies/Bootstrap.png',
            name: 'Bootstrap',
        },
        {
            logo: '/assets/technologies/CSS.png',
            name: 'CSS',
        },
        {
            logo: '/assets/technologies/Django.png',
            name: 'Django',
        },
        {
            logo: '/assets/technologies/GitHub.png',
            name: 'GitHub',
        },
        {
            logo: '/assets/technologies/HTML.png',
            name: 'HTML',
        },
        {
            logo: '/assets/technologies/Laravel.png',
            name: 'Laravel',
        },
        {
            logo: '/assets/technologies/MySQL.png',
            name: 'MySQL',
        },
        {
            logo: '/assets/technologies/NextJS.png',
            name: 'NextJS',
        },
        {
            logo: '/assets/technologies/PostgreSQL.png',
            name: 'PostgreSQL',
        },
        {
            logo: '/assets/technologies/Power BI.png',
            name: 'Power BI',
        },
        {
            logo: '/assets/technologies/Python.png',
            name: 'Python',
        },
        {
            logo: '/assets/technologies/Tailwind CSS.png',
            name: 'Tailwind CSS',
        },
        {
            logo: '/assets/technologies/TypeScript.png',
            name: 'TypeScript',
        },
    ]

    return (
        <div className="container mx-auto">
            <div className="py-4 text-center">
                <h1 className="text-center text-4xl md:text-5xl font-bold text-black">Tecnologías</h1>
            </div>

            <div className="flex flex-wrap justify-start">
                {technologiesOptions.map((tech, index) => (
                    <div key={index} className="flex flex-col w-1/3 sm:w-1/4 md:w-1/6 p-2 justify-center items-center">
                        <div className="flex flex-col w-full mx-auto bg-white p-4 justify-center items-center hover:bg-gray-100 border border-gray-200 rounded-lg shadow-lg">
                            <Image width={100} height={100} src={`${tech.logo}`} alt={`${tech.name}`} className="object-center object-cover w-16 h-auto"/>
                            <div className="text-center">
                                <h2 className="text-xl text-black font-bold mb-2">{tech.name}</h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Technologies;