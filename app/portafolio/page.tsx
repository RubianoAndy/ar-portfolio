import Projects from "./projects/projects";

export default function Portfolio() {
    const projects = [
        {
            picture: '/assets/webpage/projects/Luciana/1.png',
            name: 'Luciana',
            description: `Luciana es una solución integral de gestión del talento humano desarrollada que optimiza todo el 
                    ciclo de contratación, desde el reclutamiento hasta el retiro de los empleados. Ofrece un portal intuitivo 
                    donde los candidatos pueden registrarse y postularse a diversas vacantes, mientras que las empresas clientes y 
                    los sicólogos acceden a una interfaz detallada para monitorear la trazabilidad completa de los procesos de selección`,
            technologies: [
                'Angular',
                'Bootstrap',
                'CSS',
                'Git',
                'Laravel',
                'MySQL',
                'TypeScript',
                'Power BI',
                'SQL server',
            ],
            path: 'luciana',
        },
        {
            picture: '/assets/webpage/projects/Portafolio NextJS/1.png',
            name: 'Portafolio Next.JS',
            description: 'Hola mundo, Hola mundo, Hola mundo, Hola mundo, Hola mundo, Hola mundo, Hola mundo, Hola mundo, Hola mundo, Hola mundo',
            technologies: [
                'Git',
                'NextJS',
                'Tailwind CSS',
                'TypeScript',
            ],
            path: 'portafolio_nextjs',
        },
        {
            picture: '/assets/webpage/projects/Andy Rubiano web/1.png',
            name: 'Andy Rubiano web',
            description: 'Hola mundo, Hola mundo, Hola mundo, Hola mundo, Hola mundo, Hola mundo, Hola mundo, Hola mundo, ',
            technologies: [
                'Angular',
                'Django',
                'Git',
                'JWT',
                'MySQL',
                'PostgreSQL',
                'Python',
                'Tailwind CSS',
                'TypeScript',
            ],
            path: 'andy-rubiano-web',
        },
    ];

    return (
        <div className="container mx-auto pb-4">
            <div className="py-4 text-center">
                <h1 className="text-center text-4xl md:text-5xl font-bold text-black">Portafolio</h1>
            </div>

            <Projects projectsInfo={projects} />
        </div>
    );
}