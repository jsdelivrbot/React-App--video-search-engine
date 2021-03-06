import React from 'react';
import VideoListItem from './video_list_item';

const VideoList  = function(props){


    const listItems = props.videos.map((video) =>
    <VideoListItem 
    onVideoSelect={props.onVideoSelect}
    key={video.etag} video={video}/>);

   
return (

<ul className="col-md-4 list-group">
{listItems}
</ul>

)
}

export default VideoList;