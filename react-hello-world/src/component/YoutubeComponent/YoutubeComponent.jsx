import React from 'react';
import './YoutubeComponent.css';

const YoutubeComponent = (props) => {
    return(
        <div className='youtube-wrapper'>
            <div className='img-thumb'>
                <img src='https://www.howtogeek.com/wp-content/uploads/2021/08/YouTube-logo-hero-1.png?height=200p&trim=2,2,2,2&crop=16:9'alt=''/>
                <p className='time'>{props.time}</p>
            </div>
            <p className='title'>{props.title}</p> 
            <p className='desc'>{props.desc}</p>
        </div>
    )
}

// default untuk props
YoutubeComponent.defaultProps = {
    time: '00.00',
    title:'Title Here',
    desc:'xx ditonton, xx hari yang lalu',
}

export default YoutubeComponent;