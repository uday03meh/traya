import './App.css';
import Form from './Components/Form'
import Thanks from './Components/Thanks'
import Schedule from './Components/Schedule';
import Navbar from './Components/Navbar';
import {Route, Routes, BrowserRouter, Link} from 'react-router-dom'
function App() {
  return (
    <>
    {/* <Navbar /> */}
    <Routes>
    
      <Route path='/' element={<Form />}></Route>
      <Route path='/thanks' element={<Thanks />}></Route>
      <Route path='/schedule' element={<Schedule />}></Route>
    </Routes>
    </>
  );
}

export default App;
