import { FaBoxOpen } from "react-icons/fa";
import { BsNewspaper } from "react-icons/bs";
import { FaUserTag } from "react-icons/fa";
import AllBox from '../../components/AllBox'
import './style.css'


const DashWelcome = () => {
  return (
    <div className='welcomedash__container'>
            <div className="box__allbox__container">
              <AllBox icon={<FaUserTag />} title="Producteurs" count={20}/>
              <AllBox icon={<FaBoxOpen />} title="Stocks" count={20}/>
              <AllBox icon={<BsNewspaper />} title="Formations" count={20}/>
            </div>
    </div>
  )
}

export default DashWelcome
