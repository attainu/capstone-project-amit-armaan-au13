import Header from "./components/Header";
import Footer from "./components/Footer";
import "./bootstrap.min.css";
import { Container, } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen"
import Crousel from './components/Crousel'

function App() {
  return (
    <>
      <Header />
      <main>
        
        <Crousel/>
          <HomeScreen/>
      
      </main>
      <Footer />
    </>
  );
}

export default App;
