import logo from './logo.svg';
import { Navbar } from './Components/Navbar';
import { Menubar } from './Components/Menubar';
import { Home } from './Components/Home';
import { Trade } from './Components/Trade';
import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import {ContextProvider} from './context/Context'
import { Lottery } from './Components/Lottery';
import { Farm } from './Components/Farm';
function App() {
  return (
    <ContextProvider>
      <div className="" style={{position:"relative"}}>
        <Navbar/>
        <div className="boxcontainer">
          <Menubar/>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path='/trade' element={<Trade/>}/>
            <Route path='/lottery' element={<Lottery/>}/>
            <Route path='/farm' element={<Farm/>}/>
          </Routes>
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
