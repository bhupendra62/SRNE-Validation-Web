import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Login from './Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Signup';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes> 
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
