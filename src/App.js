import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Sidebar from './Components/Sidebar'
import Cart from './Components/Cart';
import GlassLayer from './Components/GlassLayer';
import Products from './pages/Products';
import ContactBar from './Components/ContactBar';
import Login from "./pages/Login"
import Register from './pages/Register';
import UserProfile from './pages/UserProfile';
import RequireAuth from './Components/RequireAuth';
import ProductDetails from './pages/ProductDetails';

const EcommerceLayout = ({children}) => {
  return <>
         <ContactBar />
         <Navbar />
         <Cart />
         <Sidebar />
         {children}
    </>
}

function App() {
  
  return (
    <div className="App">


        <GlassLayer />

        <Routes>
          <Route path='/' element={<EcommerceLayout><Home /></EcommerceLayout> } />
          <Route path='/products' element={<EcommerceLayout><Products /></EcommerceLayout>}/>
          <Route path='/products/:productId' element={<EcommerceLayout><ProductDetails /></EcommerceLayout>}/>
          <Route path='/profile' element={<RequireAuth><EcommerceLayout><UserProfile /></EcommerceLayout ></RequireAuth>}  />
          <Route path='/account/login' element={<Login /> } />
          <Route path='/account/register' element={<Register /> } />
        </Routes>



    </div>
  );
}

export default App;
