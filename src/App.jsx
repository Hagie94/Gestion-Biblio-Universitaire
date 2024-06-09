import './style/App.css';
import Formulaire from './components/Form.jsx';
import { BrowserRouter,Route, Router, Routes } from 'react-router-dom';
import Inscription from './components/inscription.jsx';

function App() {
  return (
    <div className='flex w-full h-full'>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Formulaire />} ></Route>
            <Route path="/connexion" element={<Formulaire />} ></Route>
            <Route path="/inscription" element={<Inscription />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
