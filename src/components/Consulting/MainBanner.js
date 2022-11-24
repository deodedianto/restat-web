import * as React from "react"
import { Link } from "gatsby"

import bannerMainImg from "../../images/banner/banner-top.webp"
import bannerBGImg from "../../images/banner/banner-bg-3.webp"
import shape30 from "../../images/shape/shape-30.png"
import shape31 from "../../images/shape/shape-31.png"

const MainBanner = () => {
  return (
    <>
      <div 
        id="home" 
        className="consulting-banner-area" 
        style={{ backgroundImage: `url(${bannerBGImg})` }}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="consulting-banner-content">
                <span>Right Solution for Your Research</span>

                <h1>ReStat, Tutor Statistik Anda!</h1>

                <p>
                Kami menyediakan jasa olah data statistik profesional. 
                Pengolahan data penelitian, skripsi, thesis dan research paper. 
                Tim kami sudah berpengalaman lebih dari 5 tahun.
                </p>

                <Link to="https://wa.me/6285945123233?text=Halo ReStat, Aku Mau Konsultasi" className="consulting-default-btn btn mr-20">
                  Gratis Konsultasi <i className="flaticon-right-arrow-3"></i>
                </Link>

                {/* <Link to="#" className="join-us-btn">
                  <i className="flaticon-paper-plane"></i> Join Us On Telegram
                </Link> */}
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="consulting-banner-image"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
                data-aos-once="true"
              >
                <img src={bannerMainImg} alt="Image" />

                <div className="month-stars">
                  <ul className="list1 d-flex justify-content-between">
                    <li>Client Terbantu</li>
                    {/* <li>Stars</li> */}
                  </ul>

                  <ul className="list2 d-flex justify-content-between">
                    <li>869</li>
                    <li>1000</li>
                  </ul>

                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: '86%' }}
                      aria-valuenow="10"
                      aria-valuemin="0"
                      aria-valuemax="25"
                    ></div>
                  </div>
                </div>

                {/* <div className="careear">
                  <div className="content">
                    <div className="icon">
                      <i className="flaticon-idea"></i>
                    </div>
                    <p>Expand Your Career Opportunities with Our Coaching</p>
                  </div>
                </div> */}
                
                {/* Shape Images */}
                <img
                  src={shape30}
                  className="banner-shape-1"
                  alt="Image"
                />
                <img
                  src={shape31}
                  className="banner-shape-2"
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainBanner
