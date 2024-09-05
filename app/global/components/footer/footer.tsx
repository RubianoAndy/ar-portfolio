'use client';

import Link from 'next/link';
import Image from 'next/image';

import React from 'react';

interface FooterPromps {
    pageName: string,
    developer: string,
    email: string,
}

const Footer: React.FC<FooterPromps> = ({pageName, developer, email}) => {
    const currentYear = new Date().getFullYear();

    return(
        <footer className='bg-black'>
            <div className='mx-auto w-full p-6 md:py-8'>
                <div className='md:flex md:justify-between'>
                    <div className='flex flex-col items-center mb-6 md:mb-0'>
                        <Link href='/'>
                            <Image src='/assets/logos/Logo.png' alt='Logo' width={100} height={50} className='w-auto h-auto'/>
                        </Link>
                        <span className='text-2xl font-semibold text-green-700 text-center'>{`${developer}`}</span>
                    </div>

                    <div className="grid grid-cols-2">
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-green-600 uppercase">Marco legal</h2>

                            <ul className="text-white font-medium">
                                <li className="mb-4">
                                    <Link href="/terminos-condiciones" className="hover:underline">Términos y condiciones</Link>
                                </li>

                                <li className="mb-4">
                                    <a href="/politica-privacidad" className="hover:underline">Política de privacidad</a>
                                </li>

                                <li>
                                    <a href="/faqs" className="hover:underline">Faqs</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-green-600 uppercase">Contacto</h2>

                            <ul className="text-white font-medium">
                                <li className="mb-4">
                                    <i className="fa-solid fa-envelope mr-2"></i> {`${email}`}
                                </li>

                                <li>
                                    <i className="fa-brands fa-whatsapp mr-2"></i> 
                                    <a href="https://wa.me/573178737226" target="_blank">
                                        +57 317 873 7226
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="my-2 border-green-700 sm:mx-auto"/>

                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-black sm:text-center">&copy; {`${currentYear}`} <Link href="/" className="hover:underline">{`${ pageName }`}</Link>. Todos los derechos reservados.</span>
        
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        {/* URL de descarga de íconos tamaño 48px X 48px https://iconos8.es/icons/set/social-media */}
                        <Link href="https://www.facebook.com/RubianoAndy" target="_blank">
                            <Image width={30} height={30} src="/assets/social media/Facebook.png" alt="Facebook"/>
                        </Link>
                        
                        <Link href="https://www.instagram.com/RubianoAndy" target="_blank">
                            <Image width={30} height={30} src="/assets/social media/Instagram.png" alt="Instagram"/>
                        </Link>
                        
                        <Link href="https://www.youtube.com/@RubianoAndy" target="_blank">
                            <Image width={30} height={30} src="/assets/social media/YouTube.png" alt="YouTube"/>
                        </Link>
                        
                        <Link href="https://www.x.com/RubianoAndy" target="_blank">
                            <Image width={30} height={30} src="/assets/social media/X.png" alt="X (Twitter)"/>
                        </Link>
                        
                        <Link href="https://www.linkedin.com/company/andyrubiano" target="_blank">
                            <Image width={30} height={30} src="/assets/social media/LinkedIn.png" alt="LinkedIn"/>
                        </Link>
            
                        <Link href="https://www.tiktok.com/@RubianoAndy" target="_blank">
                            <Image width={30} height={30} src="/assets/social media/TikTok.png" alt="TikTok"/>
                        </Link>
                        
                        <Link href="https://wa.me/573178737226" target="_blank">
                            <Image width={30} height={30} src="/assets/social media/WhatsApp.png" alt="WhatsApp"/>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;