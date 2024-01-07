import {Routes, Route } from 'react-router-dom';
import './App.css';
import Page from './Page';
import LoginProducteur from './pages/LoginProducteur/LoginProducteur';
import SignupProducteur from './pages/SignupProducteur/SignupProducteur';


function App() {
  return (
        <div className="container__app">
          <Routes>
               <Route path="/" element={<LoginProducteur />} />
               <Route path="/signup" element={<SignupProducteur />} />
                <Route path='/dash/*' element={<Page/>}/>
          </Routes>
        </div>
  );
}

export default App;
