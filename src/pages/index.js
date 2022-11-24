import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from "../components/Consulting/Navbar"
import MainBanner from "../components/Consulting/MainBanner"
import Features from "../components/Consulting/Features"
import AboutUs from "../components/Consulting/AboutUs"
import PriceTable from "../components/Consulting/PriceTable"
import WhyChooseUs from "../components/Consulting/WhyChooseUs"
import RecentProjects from "../components/Consulting/RecentProjects"
import OurTeam from "../components/Consulting/OurTeam"
import Testimonials from "../components/Consulting/Testimonials"
import Footer from "../components/Consulting/Footer"

const Consulting = () => {
  return (
    <Layout>

      <Seo title="Consulting" />

      <Navbar />

      <MainBanner />

      {/* <Partner /> */}

      <AboutUs />

      <WhyChooseUs />

      {/* <Services /> */}

      <Features />

      <RecentProjects />

      {/* <ClientReviews /> */}


      <Testimonials />

   

      <PriceTable />

      <OurTeam />



      {/* <Newsletter /> */}

      {/* <LatestArticles /> */}

      {/* <ContactForm /> */}

      <Footer />

    </Layout>
  )
}

export default Consulting
