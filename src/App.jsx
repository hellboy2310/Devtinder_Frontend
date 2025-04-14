import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from './Body';
import Login from './Login';
import Home from './Home';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body/>}>
              <Route path='/login' element={<Login/>}/>
              <Route path='/home' element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
