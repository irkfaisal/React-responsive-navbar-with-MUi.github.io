
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponent from './components/Header/HeaderComponent';



function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <HeaderComponent />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
