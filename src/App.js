import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Feature from './components/Feature';
import TopFemaleArtist from './components/TopFemale';
import Stadistics from './components/Stadistics';
import Suscribe from './components/Suscribe';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Feature/>
      <TopFemaleArtist/>
      <Stadistics/>
      <Suscribe/>
      <Footer/>
    </div>
  );
}

export default App;
