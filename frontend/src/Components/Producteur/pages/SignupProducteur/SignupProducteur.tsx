import React, { useState, ChangeEvent, FormEvent } from 'react';
import image from '../../../../assets/images/signup/2.jpg';
import { Link } from 'react-router-dom';
import '../../styles/Register/style.css';

interface DataRegister {
  name: string;
  email: string;
  password: string;
  tel: string;
  modePaye: string;
}

const SignupProducteur: React.FC = () => {
  const [registerData, setRegisterData] = useState<DataRegister>({
    name: '',
    email: '',
    password: '',
    tel: "",
    modePaye: ""
  });

  const [selectedPayment, setSelectedPayment] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePaymentChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedPayment(event.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Données soumises :', registerData);
    // Ajoutez ici la logique pour soumettre les données à votre backend

    // Ensuite, vous pouvez réinitialiser les données du formulaire si nécessaire
    setRegisterData({
      name: '',
      email: '',
      password: '',
      tel: '',
      modePaye: ''
    });
    setSelectedPayment('');
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="left-login">
          <img src={image} alt="image de connexion" className="img" />
        </div>
        <div className="right-login">
          <h2 className="title-conenct">Demande Producteur !</h2>
          <p className="title-para">
            Veuillez vous inscrire afin de bénéficier de votre propre tableau de bord.
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
                required
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
                required
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
                required
              />
            </div>
            <div className="email-input">
              <label htmlFor="tel">Numero de Tel</label>
              <input
                type="tel"
                name="tel"
                id="tel"
                onChange={handleChange}
                value={registerData.tel}
                placeholder="Tel..."
                required
              />
            </div>
            <div className="email-input">
              <label htmlFor="paymentMethod">Mode de Paiement</label>
              <select
                className='select'
                id="paymentMethod"
                value={selectedPayment}
                onChange={handlePaymentChange}
                required
              >
                <option value="">Sélectionnez un mode de paiement</option>
                <option value="moov">Moov</option>
                <option value="orange">Orange</option>
                <option value="mtn">MTN</option>
                <option value="wave">Wave</option>
              </select>
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
                <Link to="/productor" className="underline text-whiteBlue">
                  Se connecter ici.
                </Link>
              </h3>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupProducteur;
