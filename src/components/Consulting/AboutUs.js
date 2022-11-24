import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Mousewheel } from "swiper"

import aboutImg3 from "../../images/about/about-deo.webp"

import awardImg from "../../images/about/kemendag.webp"
import awardImg2 from "../../images/about/stan.webp"
import awardImg3 from "../../images/about/dac.webp"
import awardImg4 from "../../images/about/stis.webp"
import awardImg5 from "../../images/about/ken.webp"

import shape1 from "../../images/about/about-shape-1.png"
import shape2 from "../../images/about/about-shape-2.png"

const AboutUs = () => {
  return (
    <>
      <div 
        id="about" 
        className="consulting-about-area bg-color-f9f5f4 ptb-100"
      >
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6">
              <div className="consulting-about-content pl-20">
                <div className="consulting-about-title">
                  <span>ABOUT US</span>
                  <h2>Selesaikan dengan ReStat</h2>
                </div>
                <p>
                ReStat sudah ada selama 5 tahun dan membantu lebih dari 800 klien.
                Jasa olah data terpercaya dan sudah mendapatkan banyak penghargaan dibidang statistik dan penelitian.
                Tim kami adalah sarjana statistik. Semoga dengan adanya ReStat dapat membantu lebih banyak klien.
                </p>

                <div className="about-profile">
                  <div className="img">
                    <img
                      src={aboutImg3}
                      alt="Image"
                    />
                  </div>
                  <h3>Deo Dedianto</h3>
                  <p>Founder ReStat</p>
                </div>

                

                {/* <Link to="#team" className="download-btn">
                  Download Our Latest Presentation{" "}
                  <i className="flaticon-downloading"></i>
                </Link> */}
              </div>
            </div>

            <div className="col-lg-6">
            <Swiper
                  cssMode={true}
                  navigation={true}
                  pagination={true}
                  mousewheel={true}
                  modules={[Navigation, Pagination, Mousewheel]}
                  className="mySwiper"
                >
                  <SwiperSlide><div className="consulting-about-image pr-20"><img src={awardImg} alt="Image" /> </div></SwiperSlide>
                  <SwiperSlide><div className="consulting-about-image pr-20"><img src={awardImg2} alt="Image" /> </div></SwiperSlide>
                  <SwiperSlide><div className="consulting-about-image pr-20"><img src={awardImg3} alt="Image" /> </div></SwiperSlide>
                  <SwiperSlide><div className="consulting-about-image pr-20"><img src={awardImg4} alt="Image" /> </div></SwiperSlide>
                  <SwiperSlide><div className="consulting-about-image pr-20"><img src={awardImg5} alt="Image" /> </div></SwiperSlide>
                </Swiper>
            </div>

          </div>
          
          
          {/* Shape Images */}
          <img
            src={shape1}
            className="about-shape-1"
            alt="Image"
          />
          <img
            src={shape2}
            className="about-shape-2"
            alt="Image"
          />
        </div>
      </div>
    </>
  )
}

export default AboutUs
