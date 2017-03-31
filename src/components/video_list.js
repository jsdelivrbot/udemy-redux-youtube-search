import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

    // props.onVideoSelect is passed into VideoListItem in its which is the value set in index.js
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video} />
        );
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;