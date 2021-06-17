import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter}from 'react-router-dom'
import "./bootstrap.min.css";
// import { Container, } from "react-bootstrap";
import Routes from './routes/Routes'
// import HomeScreen from "./screens/HomeScreen"


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        
        
          <Routes/>
      
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
