import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div >
       <BrowserRouter>
    <Navbar />
     <Routes>
       <Route path='/' element={<Home />}></Route>
       <Route path='/menu' element={<Menu />}></Route>
       <Route path='/reservation' element={<Reservation />}></Route>
     </Routes>
    </BrowserRouter>
     </div>
  );
}

export default App;
