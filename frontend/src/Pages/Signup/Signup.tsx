import React, { useState, ChangeEvent, FormEvent } from 'react';
import image from '../../assets/images/signup/1.jpg';
import { Link } from 'react-router-dom';
import '../../styles/Register/style.css';

interface DataRegister {
  name: string;
  email: string;
  password: string;
  image: File | null;
  role: string;
}

const Signup: React.FC = () => {
  const [registerData, setRegisterData] = useState<DataRegister>({
    name: '',
    email: '',
    password: '',
    image: null,
    role: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLInputElement>) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      setRegisterData((prevData) => ({
        ...prevData,
        image: e.target.files ? e.target.files[0] : null,
      }));
    } else {
      setRegisterData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Données soumises :', registerData);
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="left-login">
          <img src={image} alt="image de connexion" className="img" />
        </div>
        <div className="right-login">
          <h2 className="title-conenct">Bienvenue aux nouveaux membres !</h2>
          <p className="title-para">
            Veuillez vous inscrire afin de bénéficier de tous nos produits.
          </p>
          <form onSubmit={handleSubmit} className="form">
            <div className="email-input">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                value={registerData.name}
                placeholder="Nom..."
              />
            </div>
            <div className="email-input">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                onChange={handleChange}
                value={registerData.email}
                placeholder="Adresse email..."
              />
            </div>
            <div className="email-input">
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                value={registerData.password}
                placeholder="Mot de passe..."
              />
            </div>
            <div className="email-input">
              <label htmlFor="file">Ajoutez une photo</label>
              <input
                type="file"
                name="file"
                id="file"
                onChange={handleChange}
                accept=".jpg, .jpeg, .png, .gif"
              />
            </div>
            <div className="email-radio">
              <label>
                <input
                  type="radio"
                  value="admin"
                  name="role"
                  onChange={handleChange}
                  checked={registerData.role === 'admin'}
                />
                Producteur
              </label>
              <label>
                <input
                  type="radio"
                  value="client"
                  name="role"
                  onChange={handleChange}
                  checked={registerData.role === 'client'}
                />
                Autres
              </label>
            </div>
            <div className="box-button mt-8">
              <button
                type="submit"
                className="bg-pureBlue m-auto p-3 uppercase text-whiteSignup text-center block rounded "
              >
                S'inscrire
              </button>
              <h3 className="text-xs mt-4 ml-8 text-gray mb-3">
                Déjà membre?
                <Link to="/" className="underline text-whiteBlue">
                  Se connecter ici.
                </Link>
              </h3>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
