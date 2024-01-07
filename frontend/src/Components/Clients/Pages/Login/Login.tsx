import "../../styles/Register/style.css"
import image from '../../../../assets/images/signup/2.jpg';
import { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';

interface DataConnect {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [connectData, setConnectData] = useState<DataConnect>({
    email: "",
    password: ""
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setConnectData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!connectData.email || !connectData.password) {
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
          <h2 className='title-conenct'>Bienvenue sur AgriDigital</h2>
          <p className='title-para'>Connectez-vous pour accéder à votre espace personnel.</p>
          <form onSubmit={handleSubmit} className="form">
            <div className="email-input email-inputs">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" onChange={handleChange} value={connectData.email} placeholder="Adresse email..." />
            </div>
            <div className="email-input">
              <label htmlFor="password">Mot de passe</label>
              <input type="password" name='password' id='password' onChange={handleChange} value={connectData.password} placeholder='Mot de passe...' />
            </div>
            <div className="box-button mt-8">
              <button type="submit" className="bg-pureBlue m-auto p-3 uppercase text-whiteSignup text-center block rounded ">Se Connecter</button>
              {error && <p className="text-red-500 mt-2">{error}</p>}
              <h3 className='text-xs mt-4 ml-8 text-gray mb-3'>Pas encore membre? <Link to='/user/signup' className='underline text-whiteBlue'>S'inscrire ici.</Link></h3>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
