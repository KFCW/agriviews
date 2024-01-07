import '../../styles/ErrorPage/style.css'
import errorImg from "../../../../assets/images/signup/error.jpg"
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="error-container">
           <div className="error-content">
                <div className="error-left">
                    <h4 className="title-error">ERREUR !</h4>
                    <p className="error-para">Page introuvable.</p>
                    <div className="block-red">
                        <p className="text-box">Veuillez vous rédirigez vers la page de connexion.</p>
                        <Link to='/' className='btn'>Retour</Link>
                    </div>
                </div>
                <div className="error-right">
                    <img src={errorImg} alt="Page d'érreur" className="img" />
                </div>
           </div>
    </div>
  )
}

export default ErrorPage
