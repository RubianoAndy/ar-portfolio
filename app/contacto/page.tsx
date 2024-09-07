'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    const emailDeveloper: string = 'AR.Andy.Rubiano@gmail.com';

    useEffect(() => {
        const isValid = name.trim() !== '' && email.includes('@') && subject.trim() !== '' && message.trim() !== '';
        setIsFormValid(isValid);
    }, [name, email, subject, message]);

    const handleSubmit = (event: any) => {
        event.preventDefault();

        if (!isFormValid)
            return;
        
        console.log('Formulario enviado:', { name, email, subject, message });
    }

    return(
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 pb-4 md:space-y-12">
            <div>
                <div className="py-4 text-center">
                    <h1 className="text-center text-4xl md:text-5xl font-bold text-black">Contáctame</h1>
                </div>

                <div className="flex">
                    <p className="text-lg text-justify">
                        Si deseas contratar mis servicios, ¡no lo dudes!, puedes diligenciar el siguiente formulario o 
                        contactarme vía correo electrónico o a través de comunicación celular o WhatsApp.
                    </p>
                </div>
            </div>

            <div className="grid w-full grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col items-center w-full">
                    <form onSubmit={handleSubmit} className="space-y-2 w-full">
                        <div className="flex">
                            <div className="w-full">
                                <label className="text-sm text-start text-black">Nombre</label>
                                <input id="name" type="text" value={name} placeholder="Nombre" maxLength={50} onChange={(e) => setName(e.target.value)} className="flex items-center w-full px-5 py-2 text-sm text-black font-medium outline-none focus:bg-gray-300 placeholder:text-gray-500 rounded-lg border border-gray-200 shadow-lg"/>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="w-full">
                                <label className="text-sm text-start text-black">Email</label>
                                <input id="email" type="email" value={email} placeholder="Email" maxLength={50} onChange={(e) => setEmail(e.target.value)} className="flex items-center w-full px-5 py-2 text-sm text-black font-medium outline-none focus:bg-gray-300 placeholder:text-gray-500 rounded-lg border border-gray-200 shadow-lg"/>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="w-full">
                                <label className="text-sm text-start text-black">Asunto</label>
                                <input id="subject" type="text" value={subject} placeholder="Asunto" maxLength={70} onChange={(e) => setSubject(e.target.value)} className="flex items-center w-full px-5 py-2 text-sm text-black font-medium outline-none focus:bg-gray-300 placeholder:text-gray-500 rounded-lg border border-gray-200 shadow-lg"/>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="w-full">
                                <label className="text-sm text-start text-black">Mensaje</label>
                                <textarea id="message" value={message} placeholder="Mensaje" maxLength={500} onChange={(e) => setMessage(e.target.value)} className="flex items-center w-full h-40 px-5 py-2 text-sm text-black font-medium outline-none focus:bg-gray-300 placeholder:text-gray-500 rounded-lg border border-gray-200 shadow-lg"></textarea>
                            </div>
                        </div>

                        <div className="flex justify-center items-center py-4">
                            <div className="w-1/2">
                                <button type="submit" disabled={!isFormValid} className={`flex flex-1 w-full justify-center focus:outline-none text-white ${isFormValid ? 'bg-green-700 hover:bg-green-800' : 'bg-green-700'} font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 disabled:opacity-50`}>
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="hidden md:flex flex-col items-center justify-center">
                    <Image width={2084} height={2084} priority={true} src="/assets/webpage/contact/Contact person.png" alt="" className="w-full max-w-lg h-auto object-cover" />
                </div>
            </div>

            <div className="hidden md:grid w-full md:grid-cols-3">
                <div className="flex flex-col items-center bg-white">
                    <span className="text-4xl text-green-600">
                        <i className="fa-solid fa-envelope"></i>
                    </span>
                    <p className="text-2xl font-extrabold text-dark-grey-900">Email</p>
                    <p className="text-lg font-base text-purple-blue-500">{ emailDeveloper }</p>
                </div>
            
                <div className="flex flex-col items-center bg-white">
                    <span className="text-4xl text-green-600">
                        <i className="fa-solid fa-phone"></i>
                    </span>
                    <p className="text-2xl font-extrabold text-dark-grey-900">Celular</p>
                    <Link href="https://wa.me/573178737226" target="_blank" className="text-lg font-base text-purple-blue-500">+57 317 873 7226</Link>
                </div>

                <div className="flex flex-col items-center bg-white">
                    <span className="text-4xl text-green-600">
                        <i className="fa-solid fa-location-dot"></i>
                    </span>
                    <p className="text-2xl font-extrabold text-dark-grey-900">Ubicación</p>
                    <p className="text-lg font-base text-purple-blue-500">Bogotá, Colombia</p>
                </div>
            </div>
        </div>
    );
}