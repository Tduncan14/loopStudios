
import './App.css';
import Content from './Components/Content/Content';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <div className="container">
        <Navbar />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
