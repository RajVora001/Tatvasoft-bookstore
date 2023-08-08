import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login'
import Footer from './components/Footer';
import Product from './components/Product';
import Registration from './components/Registration';
import AllRoutes from './routes/AllRoutes';
import ProductEdit from './components/ProductEdit';

function App() {
  return (
    <>
      <Navbar />
      <ProductEdit />
      <Footer />
    </>
  );
}

export default App;
