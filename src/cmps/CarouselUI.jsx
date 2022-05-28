import React from 'react';

import Carousel from 'react-material-ui-carousel'

import I1 from '../assets/imgs/1.jpg'
import I11 from '../assets/imgs/11.HEIC'
import I14 from '../assets/imgs/14.HEIC'
import I10 from '../assets/imgs/10.HEIC'

export const CarouselUI= () => {

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
        <Carousel className='carousel-container'>
            
            <img className="" style={{"width":"-webkit-fill-available"}} src={I1}></img> 
            <img className="" style={{"width":"-webkit-fill-available"}} src={I11}></img> 
            <img className="" style={{"width":"-webkit-fill-available"}} src={I14}></img> 
            <img className="" style={{"width":"-webkit-fill-available"}} src={I10}></img> 
            
        </Carousel>
    )

}
