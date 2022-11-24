import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"

import shapeBgImg from "../../images/reviews/reviews-shape-1.png"


import shape1 from "../../images/about/about-shape-2.png"

const Testimonials = () => {
  return (
    <>
      <div 
        id="testimonials"
        className="consulting-testimonial-area pt-100 pb-100"  
        style={{ backgroundImage: `url(${shapeBgImg})` }}
      >
        <div className="container">
          <div className="consulting-section-title">
          <span>Testimonials</span>
            <h2>Semua Klien Kami Senang</h2>
          </div>

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            autoplay={{
              delay: 6000,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="consulting-testimonial-slider"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <SwiperSlide>
              <div className="app-reviews-box">
              <div className="rating-star">
              <p>
              Saya sangat puas dgn hasil proses dari restat dan pelayanannya pun sangat baik dan memuaskan.
              Restat ok sukses terus...👍👍
              </p>
                        <ul>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                        </ul>
                      </div>
                <div className="cliens-profile">
                  <h6>Acep Hidayat</h6>
                  <p>Disertasi</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="app-reviews-box">
              <div className="rating-star">
              <p>
              Hasilnya dijelasin sampai detail, setiap ada yang bingung pastu di jelasin. 
                  Dosen saya juga sudah approve sekarang, sisa nunggu jadwal sidang. Maaci Ya
              </p>
                        <ul>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                        </ul>
                      </div>
                <div className="cliens-profile">
                  <h6>Dewi</h6>
                  <p>Thesis</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="app-reviews-box">
              <div className="rating-star">
              <p>
              Untuk Restat, respon sangat cepat, fleksible, pengerjaanya juga sangat cepat. Penjelasan juga mudah dipahami. Terimakasih Restat atas bantuannya!!!
              </p>
                        <ul>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                        </ul>
                      </div>
                <div className="cliens-profile">
                  <h6>Fajar</h6>
                  <p>Skripsi</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="app-reviews-box">
              <div className="rating-star">
              <p>
              Restat memiliki tenaga ahli yg sangat kompeten di bidang analisa statistik. Hasil pengerjaannya juga cepat disertai dengan interpretasi yang lengkap serta mudah dipahami
              </p>
                        <ul>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                        </ul>
                      </div>
                <div className="cliens-profile">
                  <h6>Cholis</h6>
                  <p>Research Study</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="app-reviews-box">
              <div className="rating-star">
              <p>
              Tim Restat merupakan tim yang sangat terbuka utk berdiskusi dan berbagi ilmu sehingga konsumen juga sangat puas, penjelasannya pun sangat baik dan jelas. Terima kasih Restat, Terima kasih mas Deo
              </p>
                        <ul>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                        </ul>
                      </div>
                <div className="cliens-profile">
                  <h6>Raditya</h6>
                  <p>Thesis</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="app-reviews-box">
              <div className="rating-star">
              <p>
              Kak Deo ngajarinnya hal2 statistik dari basic jadi ngerti. Yang awalnya ga ngerti ngolah data SPSS jadi paham maksud2nya itu apa dan cara interpretasinya juga gimana
              </p>
                        <ul>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                        </ul>
                      </div>
                <div className="cliens-profile">
                  <h6>Putrianti</h6>
                  <p>Tugas Statistik</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="app-reviews-box">
              <div className="rating-star">
              <p>
              Mantap min, terimakasih membantu secara cepat, next order lagi
              </p>
                        <ul>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                        </ul>
                      </div>
                <div className="cliens-profile">
                  <h6>Agus</h6>
                  <p>Tugas Statistik</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="app-reviews-box">
              <div className="rating-star">
              <p>
              Konsultasi gratis bareng ka Deo, dikasih penjelasan hasil output SPSS yang saya kerjakan. Terimakasih banyak ka Deo
              </p>
                        <ul>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                          <li>
                            <i className="flaticon-star"></i>
                          </li>
                        </ul>
                      </div>
                <div className="cliens-profile">
                  <h6>Inayah</h6>
                  <p>Skripsi</p>
                </div>
              </div>
            </SwiperSlide>

            
          </Swiper>

          <img src={shape1} className="testimonial-shape-1" alt="Image" />
        </div>
      </div>
    </>
  )
}

export default Testimonials
