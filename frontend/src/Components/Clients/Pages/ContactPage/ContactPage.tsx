import ContactSection from "../../HomePage/ContactSection"
import Footer from "../../HomePage/Footer"
import NavBar from "../../HomePage/NavBar"
import SectionHome from "../../HomePage/SectionHome"
import image from "../../../../assets/images/contact/help.jpg"


const ContactPage = () => {
  return (
    <>
      <NavBar />
      <SectionHome
        welcomeText={{
          title: 'Besoin d\'aide?, ',
          title2: 'contactez nous',
          title3: 'dès maintenant.',
          title4: "AgriDigital, l'agriculture à l'ère du numérique : ",
        }}
        backgroundImage={`url(${image})`}
        imageUrl="https://images.unsplash.com/photo-1588560979004-a4de3190506e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGJsYWNrJTIwbWFufGVufDB8fDB8fHww"
        cropTitle="Aide"
        buttonProps={{
          buttonText: 'Contactez-nous',
          buttonLink: '/contact',
        }}
      />
      <ContactSection/>
      <Footer/>
    </>
  )
}

export default ContactPage
