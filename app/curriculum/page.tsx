import Technologies from "../global/components/technologies/technologies";
import PDFViewer from "../global/components/pdf-viewer/pdfViewer";

export default function AboutMe() {
    const pdfFile = '/assets/curriculum/Curriculum Andy Rubiano.pdf';
    
    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 pb-4 md:space-y-12">
            <div>
                <div className="py-4 text-center">
                    <h1 className="text-center text-4xl md:text-5xl font-bold text-black">Curriculum</h1>
                </div>

                <div className="flex flex-col space-y-4">
                    <p className="text-lg text-justify">
                        Gracias por visitar mi portafolio. Aquí podrás explorar una muestra de mi trabajo y descubrir cómo mis habilidades 
                        en desarrollo backend, frontend y gestión de bases de datos pueden agregar valor a tu equipo.
                    </p>

                    <p className="text-lg text-justify">
                        Si estás buscando a un profesional apasionado y versátil, te invito a que eches un vistazo a mi currículum, el cual 
                        detalla mi experiencia y logros en diferentes proyectos. Estoy entusiasmado por la oportunidad de contribuir a tu 
                        empresa y de enfrentar nuevos desafíos.
                    </p>
                </div>
            </div>

            <PDFViewer src={`${pdfFile}`} />
        </div>
    );
}