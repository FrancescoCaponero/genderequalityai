import './Sponsors.scss'

const Sponsors = () => {
  return (
    <section id="sponsors" className="sponsors-section">
    <div className='title-wrapper'>
      <h2>
        04<br/>
        Sponsors
      </h2>
    </div>
    <div className='sponsors-images'>
      <div className='inner-sponsors-img'>
        <div className='inner-img'>
          <img src="../../assets/sponsor-1.png"/>
        </div>
        <div className='inner-img'>
          <img src="../../assets/sponsor-2.png"/>
        </div>
      </div>
      <div className='inner-sponsors-img'>
        <div className='inner-img'>
          <img src="../../assets/sponsor-3.png"/>
        </div>
        <div className='inner-img'>
          <img src="../../assets/sponsor-4.png"/>
        </div>
      </div>
      </div>
  </section>
  )
}

export default Sponsors