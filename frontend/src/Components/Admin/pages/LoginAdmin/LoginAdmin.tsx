import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "../../../Clients/styles/Register/style.css";
import image from '../../../../assets/images/signup/2.jpg';

interface DataConnect {
  id: string;
  password: string;
}

const LoginAdmin: React.FC = () => {
  const [connectData, setConnectData] = useState<DataConnect>({
    id: "",
    password: ""
  });

  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setConnectData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
  
    try {
      const response: AxiosResponse = await axios.post('http://localhost:5173/admin', connectData);
      console.log(response);
  
      // Si la connexion est réussie, redirigez vers la page de tableau de bord
      if (response.status === 200) {
        navigate('/admin/dash');
        toast.success('Bienvenue !', { position: toast.POSITION.TOP_CENTER });
      }
    } catch (error: Error) {
      console.error('Erreur lors de la connexion:', error);
      setError('Identifiant ou mot de passe incorrect.');
    }
  };
  

  return (
    <div className='login-container'>
      <div className="login-content">
        <div className="left-login">
          <img src={image} alt="image de connexion" className="img" />
        </div>
        <div className="right-login">
          <h2 className='title-conenct'>Administrateurs</h2>
          <form onSubmit={handleSubmit} className="form">
            <div className="email-input email-inputs">
              <label htmlFor="id">Identifiant</label>
              <input
                type="text"
                name="id"
                id="id"
                onChange={handleChange}
                value={connectData.id}
                placeholder="Identifiant..."
                required
              />
            </div>
            <div className="email-input">
              <label htmlFor="password">Mot de passe</label>
              <input type="password"name='password' id='password' onChange={handleChange} value={connectData.password} placeholder='Mot de passe...' required />
            </div>
            <div className="box-button mt-8">
              <button type="submit" className="bg-pureBlue m-auto p-3 uppercase text-whiteSignup text-center block rounded mb-5">Se Connecter</button>
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginAdmin;
