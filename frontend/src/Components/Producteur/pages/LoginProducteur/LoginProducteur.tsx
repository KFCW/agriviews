import { useState, ChangeEvent, FormEvent } from 'react';
import "../../styles/Register/style.css"
import image from '../../../../assets/images/signup/1.jpg';
import { Link } from 'react-router-dom';



interface DataConnect {
    id: string;
    password: string;
  }

const LoginProducteur:React.FC = () => {
    const [connectData, setConnectData] = useState<DataConnect>({
        id: "",
        password: ""
      });

      const [error, setError] = useState<string | null>(null);

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setConnectData(prevState => ({ ...prevState, [name]: value }));
      };
    
      const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    
        if (!connectData.id || !connectData.password) {
          setError("Veuillez remplir tous les champs.");
          return;
        }
    
        // Réinitialiser l'état d'erreur en cas de soumission réussie
        setError(null);
    
        console.log("Données soumises :", connectData);
        // Ajoutez ici votre logique de gestion de connexion (ex: appel API)
      };

       return (
        <div className='login-container'>
          <div className="login-content">
            <div className="left-login">
              <img src={image} alt="imge de connexion" className="img" />
            </div>
            <div className="right-login">
              <h2 className='title-conenct'>Producteurs</h2>
              <form onSubmit={handleSubmit} className="form">
                <div className="email-input email-inputs">
                  <label htmlFor="id">Identifiant</label>
                  <input type="text"  id="id" onChange={handleChange} value={connectData.id} placeholder="Identifiant..." />
                </div>
                <div className="email-input">
                  <label htmlFor="password">Mot de passe</label>
                  <input type="password"  id='password' onChange={handleChange} value={connectData.password} placeholder='Mot de passe...' />
                </div>
                <div className="box-button mt-8">
                  <button type="submit" className="bg-whiteBlue m-auto p-3 uppercase text-whiteSignup text-center block rounded mb-5">Se Connecter</button>
                  {error && <p className="text-red-500 mt-2">{error}</p>}
                  <h3 className='text-xs mt-4 ml-8 text-gray mb-3'>Pas encore membre? <Link to='/productor/signup' className='underline text-whiteBlue'>S'inscrire ici.</Link></h3>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
}

export default LoginProducteur
