import { MdOutlineAdfScanner } from "react-icons/md";
import './style.css'






const DashFeedback = () => {

  return (
    <div className="container__feeds">
      <div className="icon__dash">
      <h3 className="stock__title">Démandes d'accès des producteurs</h3>
      <div className="box__stock">
        <MdOutlineAdfScanner  className="dash__icon"/>
        <span>20</span>
      </div>
      </div>
    </div>
  )
}

export default DashFeedback
