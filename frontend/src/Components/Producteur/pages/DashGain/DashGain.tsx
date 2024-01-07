import "./style.css"


const DashGain = () => {

  return (
    <div className="container__gain">
      <div className="sold_dash">
        <div className="boxdash__img">
          <img src="../../src/assets/card.png" alt="carte bancaire" />
        </div>
        <div className="content__info">
          <h4>KADJO</h4>
          <p>Votre solde actuel : 2000 F CFA</p>
          <button type="submit">Voir</button>
        </div>
      </div>
  </div>
  )
}

export default DashGain
