import './style/App.css';
import Formulaire from './components/Form.jsx';
import { BrowserRouter,Route, Router, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Inscription from './components/inscription.jsx';
import AllBooks from './components/livre/viewAllBooks.jsx';
import Alluser from './components/etudiants/alluser.jsx';
import Header from './components/view/header.jsx';
import Disponible from './components/livre/disponible.jsx';
import Nondisponible from './components/livre/nonDisponibles.jsx';
import AddBook from './components/livre/ajoutlivre.jsx';


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
            <Route path='/livre-disponible' Component={Disponible} />
            <Route path='/livre-nondisponible' Component={Nondisponible} />
            <Route path='/ajoutlivre' Component={AddBook} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
