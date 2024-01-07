import { CiSearch } from "react-icons/ci";
import "./style.css"

const DashHeader = () => {
  return (
    <div className='dash__header'>
      <form  className="formDash">
        <input type="text"  id="" placeholder='Recherche...' />
        <CiSearch className="searchIcon"/>
      </form>
      <div className="profil">
        <img src="/src/assets/react.svg" alt="photo de profil" />
      </div>
      <div className="content__profil"></div>
    </div>
  )
}

export default DashHeader
