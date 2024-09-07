'use client';

import React from "react";

import Image from "next/image";

interface Promps {
    img: string,
}

const Gallery: React.FC<Promps> = ({img}) => {
 return(
    <div>
        <Image width={1920} height={1080} priority={true} src={img} alt={img} className="h-auto max-w-full rounded-lg shadow-lg" />
    </div>
 );   
}

export default Gallery;