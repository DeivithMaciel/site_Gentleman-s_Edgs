import image from '../../assets/images/image.visit.png'

export const VisitUs = () => {
  return (
    <div>
      <section className="container">
        <h2>Visit Us</h2>
        <div>
          <img src={image} alt="Gentleman's Edge" />
          <ul>
            <h4>Opening Hours</h4>
            <li>
              Monday - Friday <br />
              9:00 AM – 7:00 PM
            </li>
            <li>
              Saturday <br />
              9:00 AM – 5:00 PM
            </li>
            <li>
              Sunday <br />
              Closed
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
