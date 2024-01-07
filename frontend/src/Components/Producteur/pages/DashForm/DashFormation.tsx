import './style.css'
import video from "../../../../assets/videos/presentation.mp4"
import { Link } from 'react-router-dom'

const DashFormation = () => {

  return (
    <div className="actuality__container">
    <div className="actuality__header formation__head">
      <h3>Mes Formations</h3>
    </div>

    <div className="form__content">
      <div className="img__left">
        <video src={video} autoPlay loop muted />
      </div>
      <div className="img__descrip">
        <h3>Title</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, vitae?
          Facilis fugiat dolore odit facere perspiciatis nemo illum recusandae a!
          Asperiores dolorem libero accusantium delectus at alias unde rem optio!
          Non recusandae quas natus nemo voluptas, sed odio similique qui.
          Ex voluptatum praesentium unde commodi inventore dolorum exercitationem dolores explicabo!
        </p>
        <Link to="" className='linkMore'>Plus</Link>
      </div>
    </div>
  </div>
  )
}

export default DashFormation
