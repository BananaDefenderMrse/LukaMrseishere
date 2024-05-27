import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import './App.css';
import Roditelj from './Roditelj';
import { MyProvider } from './MyContext';
import Login from './Login';
import Pvp from './Pvp';
import Rod from './Rod';
import Building from './Building';
function App() {
  return (
    <MyProvider>
      <div>
        <Roditelj />
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Pvp" element={<Pvp />}></Route>
            <Route path="/Rod" element={<Rod />}></Route>
            <Route path="/Building" element={<Building />}></Route>
          </Routes>
        </Router>
      </div>
    </MyProvider>
  );
}

export default App;
