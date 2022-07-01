import './App.css';
import FooterComp from './Components/Footer';
import HeaderComp from './Components/Header';
import MainComp from './Components/Main';

function App() {
  return (
    <div className="App">
      <HeaderComp/>
      <MainComp/>
      <FooterComp/>
    </div>
  );
}

export default App;
