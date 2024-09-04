'use client';

const Features = () => {
    const featuresOptions = [
        {
            icon: 'fa-solid fa-server',
            name: 'Diseño',
            description: 
                `Interfaces con diseño UX/UI atractivas, funcionales y de navegación fluida, usando  las tecnologías 
                más actuales en el mercado, creando aplicativos eficientes y centrados en el usuario`,
        },
        {
            icon: 'fa-solid fa-laptop',
            name: 'Escalabilidad',
            description: 
                `Soluciones preparadas para expandirse y adaptarse a nuevas demandas sin comprometer el 
                rendimiento, garantizando que los aplicativos evolucionen y crezcan constantemente`,
        },
        {
            icon: 'fa-solid fa-poll',
            name: 'Mantenimiento',
            description: 
                `Soporte confiable y mantenimiento continuo, asegurando un rendimiento y funcionalidad óptimos 
                de las soluciones mediante pruebas exhaustivas asegurando estabilidad y eficiencia`,
        },
    ];

    return (
        <div className="flex flex-col w-full bg-white py-4 md:py-8 space-y-8">
            <div className="flex container mx-auto text-center justify-center">
                <div className="w-full px-4">
                    <h2 className="text-4xl lg:text-5xl font-semibold text-black">¿Tienes algo en mente?</h2>
                    {/* <p className="text-lg mt-4 mb-4 text-black">
                        Put the potentially record low maximum sea ice extent this year
                        down to low ice. According to the National Oceanic and
                        Atmospheric Administration, Ted, Scambos.
                    </p> */}
                </div>
            </div>

            <div className="flex container mx-auto">
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-wrap justify-center">
                        {featuresOptions.map((feature, index) => (
                            <div key={index} className="w-full md:w-1/3 px-4 text-center">
                                <div className="text-black p-3 w-24 h-24 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <i className={`${feature.icon} text-5xl text-green-700`}></i>
                                </div>
                                <h5 className="text-xl mt-5 font-semibold text-black">
                                    {feature.name}
                                </h5>
                                <p className="mt-2 mb-4 text-lg text-black text-justify">
                                    {feature.description}.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;