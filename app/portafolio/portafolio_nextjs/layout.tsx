import Link from "next/link";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <div>
            <Link href={'/portafolio'} className="fixed top-4 left-4 bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded mt-16 z-10">
                Volver
            </Link>
            {children}
        </div>
    );
}