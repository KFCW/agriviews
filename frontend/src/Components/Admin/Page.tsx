import { Route, Routes } from 'react-router-dom'
import DashWelcome from './pages/Dashbord/DashWelcome'
import DashActuality from './pages/DashActuality/DashActuality'
import DashFormation from './pages/DashForm/DashFormation'
import DashStock from './pages/DashStock/DashStock'
import DashClient from './pages/DashClient/DashClient'
import DashGain from './pages/DashGain/DashGain'
import DashVente from './pages/DashVente/DashVente'
import SideBar from './components/sidebar/SideBar'

const Page = () => {
  return (
    <div className='PageContainer'>
        <SideBar/> 
      <Routes>
            <Route path="/" element={<DashWelcome />} />
              <Route path="/settings" element={<DashActuality />} />
              <Route path="/formation" element={<DashFormation />} />
              <Route path="/stock" element={<DashStock />} />
              <Route path="/client" element={<DashClient />} />
              <Route path="/gain" element={<DashGain />} />
              <Route path="/add" element={<DashVente />} />
      </Routes>
    </div>
  )
}

export default Page
