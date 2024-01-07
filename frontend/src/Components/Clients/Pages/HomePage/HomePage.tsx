import NavBar from "../../HomePage/NavBar";
import Button from '../../HomePage/Button'
import SectionHome from "../../HomePage/SectionHome"
import Vitrines from "../../HomePage/Vitrines";
import Objectifs from "../../HomePage/Objectifs";
import Equipes from "../../HomePage/Equipes";
import Footer from "../../HomePage/Footer";
import image from "../../../../assets/images/home/home.jpg"



const HomePage = () => {

  return (
    <div className="home-container">
      <NavBar />
      <SectionHome
        welcomeText={{
          title: 'Bienvenue à vous, ',
          title2: 'chez',
          title3: 'AgriDigital.',
          title4: "AgriDigital, l'agriculture à l'ère du numérique : ",
        }}
        backgroundImage={`url(${image})`}
        imageUrl="https://images.unsplash.com/photo-1633640737481-2e9aabd87033?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc2lsfGVufDB8fDB8fHww"
        cropTitle="Persil"
        buttonProps={{
          buttonText: 'Découvrir',
          buttonLink: '/products',
        }}
      />

      <Button title="Catégories" />
      <Vitrines />
      <Button title="Objectifs" />
      <Objectifs />
      <Button title="Equipes" />
      <Equipes />
      <Footer />
    </div>
  )
}

export default HomePage
