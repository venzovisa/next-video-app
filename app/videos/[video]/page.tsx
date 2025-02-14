'use client'
import { useParams, useSearchParams } from "next/navigation";

const Gallery = () => {
    const params = useParams();
    const searchParams = useSearchParams();
    const video = searchParams.get('video');
    const title = searchParams.get('title');

    return (
        <>
            <h1 className="mt-4 font-oswald font-medium text-2xl">{ title }</h1>

            <video className="w-full h-auto aspect-video" controls autoPlay={false}>
                <source src={`${params.video}/${video}`} type="video/mp4" />
            </video>
        </>
    )
}

export default Gallery;