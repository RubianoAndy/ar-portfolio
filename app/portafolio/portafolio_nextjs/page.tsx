import Gallery from "@/app/global/components/gallery/gallery";

import Image from "next/image";

import Technologies from "@/app/global/components/technologies/technologies";

export default function PortafolioNextJs() {
    const path: string = '/assets/webpage/projects/Portafolio NextJS/';

    const imagesQuantity = Array.from({ length:9 });

    const technologies = [
        'Git',
        'HTML',
        'NextJS',
        'Tailwind CSS',
        'TypeScript',
    ];

    return (
        <div className="pb-4">
            <div className="relative flex w-full items-center justify-center py-24 lg:py-32 bg-gray-700 bg-blend-multiply">
                <Image width={3255} height={1610} priority={true} src="/assets/webpage/banner/Code.jpg" alt="Banner" className="absolute inset-0 w-full h-full object-cover"/>
                {/* <div className="absolute inset-0 bg-white opacity-50"></div> */}
            </div>

            <div className="md:space-y-8 px-4 md:px-10">
                <div className="flex flex-col p-4 space-y-4">
                    <div className="flex flex-wrap justify-center mt-4">
                        {technologies.map((technology: string, index: number) => (
                            <div key={index} className="flex m-2">
                                <Image width={40} height={40} priority={true} src={`/assets/technologies/${ technology}.png`} alt={technology} />
                            </div>
                        ))}
                    </div>

                    <div className="relative text-center">
                        <h1 className="text-center text-4xl md:text-5xl font-bold text-black">Portafolio Next.JS</h1>
                    </div>

                    <p className="text-lg text-justify">
                    Portafolio para desarrollador web que muestra una colección de programas y aplicaciones creadas utilizando 
                    una variedad de frameworks y lenguajes de programación, reflejando la capacidad de adaptación a diferentes requisitos 
                    técnicos y desafíos. Cada sección del portafolio presenta proyectos que demuestran experiencia en el desarrollo 
                    de soluciones innovadoras y efectivas en distintos entornos tecnológicos.
                    </p>
                </div>

                <div className="flex flex-wrap justify-start">
                    {imagesQuantity.map((_,index) => (
                        <div key={index} className="flex flex-col w-full md:w-1/2 lg:w-1/3 p-2 justify-start">
                            <Gallery img={`${path}${index + 1}.png`} />
                        </div>
                    ))}
                </div>

                <div className="py-4 text-center">
                    <h1 className="text-center text-4xl md:text-5xl font-bold text-black">Tecnologías</h1>
                </div>
                
                <div className="flex flex-wrap justify-start">
                    {technologies.map((tech:string, index:number) => (
                        <div key={index} className="flex flex-col w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-2 justify-center items-center">
                            <Technologies name={tech} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}