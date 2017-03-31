import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {

    const imageUrl = video.snippet.thumbnails.default.url;

    // so anytime a list item is clicked on, the onVideoSelect function from props is called and is passes video as the argument
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list-media">

                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>

                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>

            </div>
        </li>
        );
};

export default VideoListItem;