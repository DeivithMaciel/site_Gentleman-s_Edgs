import { AboutUs } from "../../components/AboutUs"
import { Gallery } from "../../components/Gallery"
import { Header } from "../../components/Header"
import { Hero } from "../../components/Hero"

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Gallery />
      <AboutUs />
    </>
  )
}
