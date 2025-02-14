'use client'

import { useState } from "react";

const FavoriteButton = ({ videoFolder, liked }: { videoFolder: string, liked: boolean }) => {
    const [status, setStatus] = useState(liked);
    const handleLike = async () => {
        try {
            await fetch('http://localhost:3000/api/videos/liked', {
                body: JSON.stringify({
                    videoFolder,
                }),
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                }
            });
            setStatus((prev) => !prev);
        } catch (err) {
            console.log(`Error while add to favorite ${videoFolder}`, err);
        }
    }

    return (
        <span title="Add to favorite" className={`btn-liked${status ? ' active' : ''}`} onClick={handleLike}></span>
    );
}

export default FavoriteButton;