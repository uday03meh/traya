import "./App.css";
import { Route, Routes } from "react-router-dom";

//Custom Components
import Form from "./Components/Form";
import Thanks from "./Components/Thanks";
import Schedule from "./Components/Schedule";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Form />}></Route>
        <Route path="/thanks" element={<Thanks />}></Route>
        <Route path="/schedule" element={<Schedule />}></Route>
      </Routes>
    </>
  );
}

export default App;
