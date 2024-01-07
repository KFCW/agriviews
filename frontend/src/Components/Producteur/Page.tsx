import { Route, Routes } from 'react-router-dom'
import SideBar from '../Producteur/components/sidebar/SideBar'
import DashActuality from '../Producteur/pages/DashActuality/DashActuality'
import DashWelcome from '../Producteur/pages/Dashbord/DashWelcome'
import DashStock from '../Producteur/pages/DashStock/DashStock'
import DashVente from '../Producteur/pages/DashVente/DashVente'
import DashFeedback from '../Producteur/pages/DashFeedback/DashFeedback'
import DashFormation from '../Producteur/pages/DashForm/DashFormation'
import DashClient from '../Producteur/pages/DashClient/DashClient'
import DashGain from '../Producteur/pages/DashGain/DashGain'

const Page = () => {
  return (
    <div className='PageContainer'>
        <SideBar/> 
      <Routes>
            <Route path="/" element={<DashWelcome />} />
              <Route path="/settings" element={<DashActuality />} />
              <Route path="/formation" element={<DashFormation />} />
              <Route path="/stock" element={<DashStock />} />
              <Route path="/feedback" element={<DashFeedback />} />
              <Route path="/client" element={<DashClient />} />
              <Route path="/gain" element={<DashGain />} />
              <Route path="/add" element={<DashVente />} />
      </Routes>
    </div>
  )
}

export default Page
