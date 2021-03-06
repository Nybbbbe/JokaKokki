import React from 'react';
import Description from './Description';
import Image from './Image';
import SubTitle from './SubTitle';
import Video from './Video';
import Timer from './Timer';

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
            return <Timer src={src}/>
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