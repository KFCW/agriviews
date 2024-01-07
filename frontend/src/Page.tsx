import { Link } from "react-router-dom";
import "./App.css"

const Page = () => {
  return (
    <div className="presenterEntity">
      <div className="container">
        <div className="entity entity1">
          <Link to="/user" className="link">Clients</Link>
        </div>
        <div className="entity entity2">
          <Link to="/productor" className="link">Producteurs</Link>
        </div>
        <div className="entity entity3">
          <Link to="/admin"  className="link">Administrateur</Link>
        </div>
      </div>
      </div>
  )
}

export default Page
