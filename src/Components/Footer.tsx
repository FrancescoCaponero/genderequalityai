import './Footer.scss'

const Footer = () => {
  const thisYear = new Date();
  return (
    <footer>
      <section className='footerwrap'>
        <div>
          <a href="https://www.stmichelehotel.it/it.html" target="_blank">
            <h4>
              Accomodations
            </h4>
          </a>
          <a href="https://univaq.webex.com/meet/conferenze" target="_blank">
            <h4>
              Streaming
            </h4>
          </a>
        </div>
        <div>
          <a href="https://www.univaq.it/section.php?id=28" target="_blank">
            <h4>
              Transportation
            </h4>
          </a>
          <a href="https://www.eventbrite.it/e/gender-equality-and-artificial-intelligence-tickets-444520551937?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=escb" target="_blank">
            <h4>
              Registration
            </h4>
          </a>
        </div>
      </section>
      <section className='copyclaim'>
        <p>
          © {thisYear.getFullYear()} GenderEqualityAI. All rights reserved.
        </p>
      </section>
    </footer>
  )
}

export default Footer