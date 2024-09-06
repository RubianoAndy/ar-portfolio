import Projects from "./projects/projects";

export default function Portfolio() {
    const projects = [
        {
            picture: '/assets/webpage/projects/Luciana/1.png',
            name: 'Luciana',
            description: 'Hola mundo, Hola mundo, Hola mundo, Hola mundo, Hola mundo, Hola mundo, Hola mundo, Hola mundo, ',
            technologies: [
                'Angular',
                'Bootstrap',
                'Laravel',
                'MySQL',
                'TypeScript',
                'Power BI',
                'Git',
            ],
            path: 'luciana',
        },
        {
            picture: '/assets/webpage/projects/Luciana/1.png',
            name: 'Luciana',
            description: 'Hola mundo, Hola mundo, Hola mundo, Hola mundo, Hola mundo, Hola mundo, Hola mundo, Hola mundo, Hola mundo, Hola mundo',
            technologies: [
                'Angular',
                'Bootstrap',
                'Laravel',
                'MySQL',
                'TypeScript',
                'Power BI',
                'Git',
            ],
            path: 'luciana',
        },
        {
            picture: '/assets/webpage/projects/Luciana/1.png',
            name: 'Luciana',
            description: 'Hola mundo, Hola mundo, Hola mundo, Hola mundo, Hola mundo, Hola mundo, Hola mundo, Hola mundo, ',
            technologies: [
                'Angular',
                'Bootstrap',
                'Laravel',
                'MySQL',
                'TypeScript',
                'Power BI',
                'Git',
            ],
            path: 'luciana',
        },
        {
            picture: '/assets/webpage/projects/Luciana/1.png',
            name: 'Luciana',
            description: 'Hola mundo, Hola mundo, Hola mundo, Hola mundo, Hola mundo, Hola mundo, Hola mundo, Hola mundo, ',
            technologies: [
                'Angular',
                'Bootstrap',
                'Laravel',
                'MySQL',
                'TypeScript',
                'Power BI',
                'Git',
            ],
            path: 'luciana',
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