import { Link } from 'react-router-dom';
import "./style.css"

interface VideoDescriptionProps {
  video: string;
  title: string;
  description: string;
  linkTo: string;
}

const FormBox :React.FC<VideoDescriptionProps> = ({ video, title, description, linkTo }) => {
  return (
    <div className='container__form'>
            <div className="img__left">
            <video src={video} autoPlay loop muted />
            </div>
            <div className="img__descrip">
            <h3>{title}</h3>
            <p>{description}</p>
            <Link to={linkTo} className='linkMore'>Plus</Link>
            </div>
  </div>
  )
}

export default FormBox
