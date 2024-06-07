import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../../../assets/banner/1.png'
import banner2 from '../../../../assets/banner/2.jpg'
import banner3 from '../../../../assets/banner/3.jpg'
import banner4 from '../../../../assets/banner/4.jpg'
import banner5 from '../../../../assets/banner/5.jpg'
import { Container } from 'react-bootstrap';

const Banner = () => {
    return (
       
    

<Carousel>
                    <Carousel.Item>
                        <img src={banner1} width={'1350px'}  height={'500px'}/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={banner2} width={'1350px'} height={'500px'} />   
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={banner3} width={'1350px'} height={'500px'} />    
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={banner4} width={'1350px'} height={'500px'} />   
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={banner5} width={'1350px'} height={'500px'} />    
                    </Carousel.Item>
                </Carousel>
     
            
        
    );
};

export default Banner;