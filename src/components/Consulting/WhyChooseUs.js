import React, { useState } from "react"
import FsLightbox from "fslightbox-react"
import { Link } from "gatsby"

import videoThumbImg from "../../images/choose/choose-me.webp"

const WhyChooseUs = () => {
  const [toggler, setToggler] = useState(false)
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/SlBmpKnqjUo?rel=0&autoplay=1"]}
      />

      <div id="whyus" className="start-consuling-choose ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="consulting-choose-content pr-20">
                <div className="choose-content-title">
                  <span>Why Us?</span>
                  <h2>Berikut Salah Satu Testimoni dari Klien Kami</h2>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="consult-choose-img pl-20">
                <img 
                  src={videoThumbImg} 
                  alt="Image" 
                />

                <div className="icon">
                  <div className="play-btn" onClick={() => setToggler(!toggler)}>
                    <i className="flaticon-play-button-arrowhead"></i>
                  </div>
                </div>

                
              </div>
            </div>
          </div>

          <Link to="https://wa.me/6285945123233?text=Halo ReStat, Aku Mau Konsultasi" className="consulting-default-btn btn">
                Konsultasi Sekarang <i className="flaticon-right-arrow-3"></i>
          </Link>

        </div>
      </div>
    </>
  )
}

export default WhyChooseUs
