import React from "react";
import ReactPlayer from "react-player";

function Video({ src }) {
    const config = {
        youtube: {
            playerVars: {
                controls: 1,
                modestbranding: 1,
                loop: 1,
                iv_load_policy: 3
            }
        },
        file: {
            attributes: {
                controls: true
            }
        }
    };

    return (
        <div className="mt-4 mb-4">
            <ReactPlayer url={src} width="100%" config={config} />
        </div>
    )
}

export default Video;
