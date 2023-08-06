import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login'
import Footer from './components/Footer';
import Product from './components/Product';
import Registration from './components/Registration';

function App() {
  return (
    <>
      <Navbar />
      <Registration />
      <Footer />
    </>
  );
}

export default App;
