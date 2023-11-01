import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Checkout from './Checkout';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/checkout" element={<Checkout/>}/>
         <Route path="/login" element={<Login/>}/>
       </Routes>
      
      </BrowserRouter>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
