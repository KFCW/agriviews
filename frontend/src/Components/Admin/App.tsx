import {Routes, Route } from 'react-router-dom';
import './App.css';
import LoginAdmin from './pages/LoginAdmin/LoginAdmin';
import Page from './Page';


function App() {
  return (
        <div className="container__app">
          <Routes>
               <Route path="/" element={<LoginAdmin />} />
                <Route path='/dash/*' element={<Page/>}/>
          </Routes>
        </div>
  );
}

export default App;
