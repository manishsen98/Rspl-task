import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home/Home";

function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/login" element = {< Login /> } />
      <Route path="/" element = {< Home /> } />
      
     </Routes>
    </BrowserRouter>
  )
}

export default App
