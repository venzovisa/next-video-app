import VideosItem from "@/app/components/VideosItem";
import { Video } from "@/app/models";

const VideosList = async ({ videos }: { videos: Video[] }) => {
    return (
        <>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {videos.map((video, index) => <VideosItem key={index} item={video} />)}
            </div>
        </>
    )
}

export default VideosList;