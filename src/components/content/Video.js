import React from 'react';
import ReactPlayer from 'react-player'

function Video ({src}) {
    return (
        <ReactPlayer 
        url={src} 
        width="100%"
        config={{
            youtube: {
                playerVars: {
                    controls: 1,
                    modestbranding: 1,
                    loop: 1,
                    iv_load_policy: 3
                }
            },
        }} 
        />
    );

}

export default Video;
