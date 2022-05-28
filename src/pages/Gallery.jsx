import React, { useEffect } from 'react'
import { useState } from 'react';
import ReactDOM from 'react-dom'
import { Footer } from '../cmps/Footer';
import {CarouselUIMobile} from '../cmps/CarouselUIMobile';

import SimpleImageSlider from "react-simple-image-slider";
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
import I16 from '../assets/imgs/16.HEIC'



export const Gallery = () => {

    const [selectedImage, setSelectedImage] = useState(I1);
    // const [str, setStr] = useState([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);


    useEffect(() => {


    }, [])

    const selectImage = (img) => {

        // setSelectedImage(img);
        console.log(img.target.src);
        setSelectedImage(img.target.src);

    }





    return (
        <div className="page gallery">
            <div className="gallery_container">
            <CarouselUIMobile/>
                <div className="small-imgs-container">

                <img className="small-img" onClick={(ev) => selectImage(ev)} src={I16}></img>
                <img className="small-img" onClick={(ev) => selectImage(ev)} src={I11}></img>
                <img className="small-img" onClick={(ev) => selectImage(ev)} src={I14}></img>
                <img className="small-img" onClick={(ev) => selectImage(ev)} src={I10}></img>
                <img className="small-img" onClick={(ev) => selectImage(ev)} src={I1}></img>
                <img className="small-img" onClick={(ev) => selectImage(ev)} src={I2}></img>
                <img className="small-img" onClick={(ev) => selectImage(ev)} src={I3}></img>
                <img className="small-img" onClick={(ev) => selectImage(ev)} src={I5}></img>
                <img className="small-img" onClick={(ev) => selectImage(ev)} src={I9}></img>
                <img className="small-img" onClick={(ev) => selectImage(ev)} src={I8}></img>
                <img className="small-img" onClick={(ev) => selectImage(ev)} src={I7}></img>
                <img className="small-img" onClick={(ev) => selectImage(ev)} src={I6}></img>
                <img className="small-img" onClick={(ev) => selectImage(ev)} src={I4}></img>
                <img className="small-img" onClick={(ev) => selectImage(ev)} src={I13}></img>
                <img className="small-img" onClick={(ev) => selectImage(ev)} src={I12}></img>

                    {/* {str.map((item,i)=><img className="small-img" id={i} onClick={(ev) => selectImage(ev)} src={`I${i}`}></img>)} */}

                </div>

                <div className="logo-container"></div>


                <div className="big-img-container">
                    <img className="big-img" src={selectedImage}></img>
                </div>

            </div>

            <Footer/>
        </div>

    )
}