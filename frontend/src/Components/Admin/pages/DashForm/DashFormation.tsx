import './style.css'
import video from "../../../../assets/videos/presentation.mp4"
import FormBox from '../../components/FormBox'

const DashFormation = () => {

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="actuality__container">
    <div className="actuality__header formation__head">
      <h3>Nos Formations</h3>
    </div>

   
      <form className="form" onSubmit={handleSubmit} >
          <div className="formBoxContainer">
              <FormBox video={video} 
                                  title='Titre'
                                  description=' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, vitae?
                                    Facilis fugiat dolore odit facere perspiciatis nemo illum'
                                    linkTo=''
                />
              <FormBox video={video} 
                                  title='Titre'
                                  description=' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, vitae?
                                    Facilis fugiat dolore odit facere perspiciatis nemo illum recusandae a!
                                  bo!'
                                    linkTo=''
                />
          </div>
          <div className="divButton">
              <button className='my-4' type='button'>Envoyer</button>
          </div>
      </form>
      </div>
  )
}

export default DashFormation
