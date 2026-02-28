import { AboutUs } from "../../components/AboutUs"
import { Contact } from "../../components/Contact"
import { Footer } from "../../components/Footer"
import { Gallery } from "../../components/Gallery"
import { Header } from "../../components/Header"
import { Hero } from "../../components/Hero"
import { Products } from "../../components/Products"

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Gallery />
      <AboutUs />
      <Products />
      <Contact />
      <Footer />
    </>
  )
}
