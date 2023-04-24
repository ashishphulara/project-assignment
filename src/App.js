import './App.css';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Header from './Components/Header/Header';
import Home from "./Components/Home/Home"
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
