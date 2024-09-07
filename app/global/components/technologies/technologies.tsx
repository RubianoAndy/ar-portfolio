'use client';

import Image from "next/image";

import React from "react";

interface Promps {
    name: string,
}

const Technologies: React.FC<Promps> = ({name}) => {
    const path: string = '/assets/technologies/';
    // const technologiesOptions = [
    //     {
    //         logo: '/assets/technologies/Angular.png',
    //         name: 'Angular',
    //     },
    //     {
    //         logo: '/assets/technologies/Bootstrap.png',
    //         name: 'Bootstrap',
    //     },
    //     {
    //         logo: '/assets/technologies/CSS.png',
    //         name: 'CSS',
    //     },
    //     {
    //         logo: '/assets/technologies/Django.png',
    //         name: 'Django',
    //     },
    //     {
    //         logo: '/assets/technologies/Git.png',
    //         name: 'Git',
    //     },
    //     {
    //         logo: '/assets/technologies/HTML.png',
    //         name: 'HTML',
    //     },
    //     {
    //         logo: '/assets/technologies/JWT.png',
    //         name: 'JWT',
    //     },
    //     {
    //         logo: '/assets/technologies/Laravel.png',
    //         name: 'Laravel',
    //     },
    //     {
    //         logo: '/assets/technologies/MySQL.png',
    //         name: 'MySQL',
    //     },
    //     {
    //         logo: '/assets/technologies/NextJS.png',
    //         name: 'NextJS',
    //     },
    //     {
    //         logo: '/assets/technologies/NodeJS.png',
    //         name: 'NodeJS',
    //     },
    //     {
    //         logo: '/assets/technologies/PostgreSQL.png',
    //         name: 'PostgreSQL',
    //     },
    //     {
    //         logo: '/assets/technologies/Power BI.png',
    //         name: 'Power BI',
    //     },
    //     {
    //         logo: '/assets/technologies/Python.png',
    //         name: 'Python',
    //     },
    //     {
    //         logo: '/assets/technologies/SQL server.png',
    //         name: 'SQL server',
    //     },
    //     {
    //         logo: '/assets/technologies/Tailwind CSS.png',
    //         name: 'Tailwind CSS',
    //     },
    //     {
    //         logo: '/assets/technologies/TypeScript.png',
    //         name: 'TypeScript',
    //     },
    // ]

    return (
        <div className="flex flex-col w-full mx-auto bg-white p-4 justify-center items-center border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100">
            <Image width={100} height={100} src={`${path}${name}.png`} alt={name} className="object-center object-cover w-16 h-auto"/>
            <div className="text-center">
                <h2 className="text-xl text-black font-bold mb-2">{name}</h2>
            </div>
        </div>
    );
}

export default Technologies;