import React from 'react';
import Description from './Description';
import Image from './Image';
import SubTitle from './SubTitle';
import Video from './Video';

function ContentContainer({type, src}) {
    switch (type) {
        case "desc": {
            return <Description src={src}/>
        }
        case "video": {
            return <Video src={src}/>
        }
        case "img": {
            return <Image src={src}/>
        }
        case "timer": {
            // Placeholder
            return <Description src={"insert timer here"}/>
        }
        case "subtitle": {
            
            return <SubTitle src={src}/>
        }
        default: {
            return <Description src={src}/>
        }
    }

}

export default ContentContainer;