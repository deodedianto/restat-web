import * as React from "react"

const Features = () => {
  return (
    <>
      <div id="features" className="consulting-features-area ptb-100">
        <div className="container">
          <div className="consulting-section-title">
            <span>Services</span>
            <h2>Fasilitas yang Anda Dapatkan</h2>
          </div>

          <div
            className="features-content"
            data-aos="flip-up"
            data-aos-duration="1200"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6">
                <div className="consulting-features-card">
                  <div className="icon">
                    <i className="flaticon-phone-call"></i>
                  </div>
                  <h3>Konsultasi Tanpa Batas</h3>
                  <p>Bingung cara olah data? Kami siap menerima konsultasi GRATIS 24/7
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="consulting-features-card">
                  <div className="icon">
                    <i className="flaticon-fast-delivery"></i>
                  </div>
                  <h3>Olah Data Cepat dan Tepat</h3>
                  <p>Sedang dikejar deadline? Cukup 1 hari analisa data anda selesai 
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="consulting-features-card">
                  <div className="icon">
                    <i className="flaticon-checked"></i>
                  </div>
                  <h3>Bimbingan Sampai Selesai</h3>
                  <p>
                  Kami akan selalu siap membantu sampai penelitian Anda sampai benar-benar selesai.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="consulting-features-card">
                  <div className="icon">
                    <i className="flaticon-money-management"></i>
                  </div>
                  <h3>Garansi Uang Kembali</h3>
                  <p> Kami akan mengembalikan biaya olah data jika hasil analisa yang kami berikan salah
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features
