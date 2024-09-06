'use client';

import Image from "next/image";
import React from "react";

interface Promps {
    projectsInfo: any;
}

const Projects: React.FC<Promps> = ({projectsInfo}) => {
    if (!Array.isArray(projectsInfo)) {
        return (
            <div>
                No hay proyectos disponibles
            </div>
        );
    }

    return (
        <div className="flex flex-wrap justify-start">
            {projectsInfo.map((project, index) => (
                <div key={index} className="flex flex-col w-full md:w-1/2 lg:w-1/3 p-2 justify-center items-center">
                    <div className="flex flex-col w-full mx-auto bg-white p-4 justify-center items-center border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100">
                        <div className="mb-8">
                            <Image width={1920} height={1032} priority={true} className="object-center object-cover rounded-lg w-full h-auto" src={project.picture} alt="photo" />
                        </div>

                        <div className="text-center">
                            <p className="text-xl text-black font-bold mb-2">{ project.name }</p>
                            <p className="text-base text-black font-normal text-justify">{ project.description }</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;