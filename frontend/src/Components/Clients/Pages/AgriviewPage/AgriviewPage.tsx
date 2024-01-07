import "../../styles/Components/NavBar/Agriviews/style.css"
import videoBg from "../../../../assets/videos/agriviews.mp4"
import NavBar from "../../HomePage/NavBar"
import AgriviewsBox from "../../HomePage/AgriviewsBox"
import Footer from "../../HomePage/Footer"


const icon_1 = {
  name: "Icon pour les nouveautés",
  source: "../../../src/assets/icons/new.png"
}

const icon_2 = {
  name: "Icon pour les formations",
  source: "../../../src/assets/icons/form.png"
}
const icon_3 = {
  name: "Icon pour le blog",
  source: "../../../src/assets/icons/blog.png"
}

const AgriviewPage = () => {
  return (
    <>
    <NavBar/>
      <div className="products__welcome">
        <div className="box__video">
          <video src={videoBg} autoPlay muted loop />
          <div className="box__content">
            <h1>Avec AgriDigital, </h1>
            <p className="welcome">Découvrir le plaisir de l'apprentissage, éprouver la satisfaction du partage, <br/>et ressentir la joie de former sont des expériences enrichissantes que <br/> vous apprécierez sans aucun doute.</p>
          </div>
        </div>
      </div>
      <div className="agri__box">
        <AgriviewsBox
          icon={icon_1}
          titre="Actualité"
          paragraph="Je m'informe!"
          link="/actuality"
        />
        <AgriviewsBox
          icon={icon_2}
          titre="Formation"
          paragraph="Je me forme!"
          link="/form"
        />
        <AgriviewsBox
          icon={icon_3}
          titre="Blog"
          paragraph="Je partage mon expérience!"
          link="/blog"
        />
      </div>
      <Footer/>
    </>
  )
}

export default AgriviewPage
