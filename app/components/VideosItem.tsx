import Image from 'next/image';
import Link from 'next/link';
import { Video } from '@/app/models';
import FavoriteButton from '@/app/components/FavoriteButton';

const VideosItem = ({ item }: { item: Video }) => {
    return (
        <>
            <div className="videos-item overflow-hidden pb-2 px-1 box rounded-md border-t-sky-300 border-t-2 shadow-md text-center relative">
                <FavoriteButton videoFolder={item.path} liked={item.liked} />
                <div className="flex py-2">
                    <p className="mb-0 grow-1">{item.date}</p>
                    <p className="mb-0 grow-2 text-truncate">
                        <Link href="/" className="inline-block px-1 bg-dark text-white" />
                    </p>
                </div>

                <a href={`/videos/${item.path}?video=${item.filename}`} title="noimage.png" className="block mb-3 ">
                    <Image src='https://placehold.co/320x180' alt='Video 1' width={320} height={180} />
                </a>

                <p className="overflow-hidden text-truncate mb-2">{item.title}</p>
                <a href={`/videos/${item.path}?video=${item.filename}&title=${item.title}`} title="video-01" className="inline-block px-4 py-2 bg-sky-300 mx-1 rounded-md font-oswald min-w-20">Gallery</a>
                <a href={`/videos/${item.url}`} title="video-01" className="inline-block px-4 py-2 bg-sky-300 mx-1 rounded-md font-oswald min-w-20">Play</a>
            </div>
        </>
    )
}

export default VideosItem;