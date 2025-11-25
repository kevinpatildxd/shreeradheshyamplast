import React from 'react';

interface VideoCardProps {
    videoId: string;
    title: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoId, title }) => {
    return (
        <div className="w-full rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video">
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                ></iframe>
            </div>
        </div>
    );
};

export default VideoCard;
