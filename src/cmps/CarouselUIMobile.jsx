import React from 'react';

import Carousel from 'react-material-ui-carousel'

import I1 from '../assets/imgs/1.jpg'
import I2 from '../assets/imgs/2.HEIC'
import I3 from '../assets/imgs/3.heic'
import I4 from '../assets/imgs/4.HEIC'
import I5 from '../assets/imgs/5.HEIC'
import I6 from '../assets/imgs/6.HEIC'
import I7 from '../assets/imgs/7.JPG'
import I8 from '../assets/imgs/8.HEIC'
import I9 from '../assets/imgs/9.HEIC'
import I10 from '../assets/imgs/10.HEIC'
import I11 from '../assets/imgs/11.HEIC'
import I12 from '../assets/imgs/12.HEIC'
import I13 from '../assets/imgs/13.HEIC'
import I14 from '../assets/imgs/14.HEIC'
import I15 from '../assets/imgs/15.HEIC'

export const CarouselUIMobile= () => {

    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel autoPlay={false} className='carousel-mobile-container'>
            
            <img className="" style={{"width":"-webkit-fill-available"}} src={I1}></img> 
            <img className="" style={{"width":"-webkit-fill-available"}} src={I2}></img> 
            <img className="" style={{"width":"-webkit-fill-available"}} src={I3}></img> 
            <img className="" style={{"width":"-webkit-fill-available"}} src={I4}></img> 
            <img className="" style={{"width":"-webkit-fill-available"}} src={I5}></img> 
            <img className="" style={{"width":"-webkit-fill-available"}} src={I6}></img> 
            <img className="" style={{"width":"-webkit-fill-available"}} src={I7}></img> 
            <img className="" style={{"width":"-webkit-fill-available"}} src={I8}></img> 
            <img className="" style={{"width":"-webkit-fill-available"}} src={I9}></img> 
            <img className="" style={{"width":"-webkit-fill-available"}} src={I10}></img> 
            <img className="" style={{"width":"-webkit-fill-available"}} src={I11}></img> 
            <img className="" style={{"width":"-webkit-fill-available"}} src={I12}></img> 
            
        </Carousel>
    )

}
