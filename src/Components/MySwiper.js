import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "./MySwiper.css"

const MySwiper = (props) =>{
    const Imgs = props.imgs.map((img) => {
        return <SwiperSlide><img key={img.id} alt= {img.alt} src={img.src.landscape} /></SwiperSlide>
    })

        return(
            <Swiper navigation={true} modules={[Navigation]} className="shadow-lg mySwiper container mt-5">
                {Imgs}
          </Swiper>
            )
}

export default MySwiper;