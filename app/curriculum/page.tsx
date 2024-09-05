import Technologies from "../global/components/technologies/technologies";
import PDFViewer from "../global/components/pdf-viewer/pdfViewer";

export default function AboutMe() {
    const pdfFile = '/assets/curriculum/Curriculum Andy Rubiano.pdf';
    
    return (
        <div className="md:space-y-12">
            <div>
                <div className="py-4 text-center">
                    <h1 className="text-center text-3xl md:text-5xl font-bold text-black">Curriculum</h1>
                </div>

                <div className="flex max-w-screen-xl mx-auto p-4 md:px-10">
                    <p className="text-lg text-justify">
                        Ahorita miro esto.
                    </p>
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto">
                <PDFViewer src={`${pdfFile}`} />
            </div>

            <Technologies />
        </div>
    );
}