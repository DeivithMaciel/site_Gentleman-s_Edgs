import { AboutUs } from "../../components/AboutUs"
import { Contact } from "../../components/Contact"
import { Footer } from "../../components/Footer"
import { Gallery } from "../../components/Gallery"
import { Header } from "../../components/Header"
import { Hero } from "../../components/Hero"
import { Products } from "../../components/Products"
import { VisitUs } from "../../components/VisitUs"

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Gallery />
      <AboutUs />
      <Products />
      <VisitUs />
      <Contact />
      <Footer />
    </>
  )
}
