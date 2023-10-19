import FrontSection from '../Sections/FrontSection'
import About from '../Sections/About'
import Speakers from '../Sections/Speakers'
import Schedule from '../Sections/Schedule'
import Sponsors from '../Sections/Sponsors'
import Info from '../Sections/Info'

const Content = () => {
  return (
    <div>
        <FrontSection></FrontSection>
        <About></About>
        <Speakers></Speakers>
        <Schedule></Schedule>
        <Sponsors></Sponsors>
        <Info></Info>
    </div>
  )
}

export default Content