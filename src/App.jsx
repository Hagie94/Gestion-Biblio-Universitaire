import './style/App.css';
import Formulaire from './components/Form.jsx';
import { BrowserRouter,Route, Router, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Inscription from './components/inscription.jsx';
import AllBooks from './components/livre/viewAllBooks.jsx';
import Alluser from './components/etudiants/alluser.jsx';
import Header from './components/view/header.jsx';


function App() {
  return (
    <div className='bg-light h-full w-full'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' Component={Formulaire} />
            <Route path="/connexion" Component={Formulaire} />
            <Route path="/inscription" Component={Inscription} />
            <Route path='/livre' Component={AllBooks} />
            <Route path='/alluser' Component={Alluser} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
