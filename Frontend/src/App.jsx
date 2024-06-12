import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/productScreen"
import CartScreen from './screens/cartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

function App() {
  return (
    <Router>
      <Header/>
      <main className="px-24 py-2 pb-12">
        <Routes>
          <Route path='/products' element={<HomeScreen/> } />
          <Route path='/products/:id' element={<ProductScreen/> }/>
          <Route path='/cart' element={<CartScreen/>} />
          <Route path='/login' element={<LoginScreen/> }/>
          <Route path='/register' element={<RegisterScreen/> }/>
          
        </Routes>     
      </main>
      <Footer/>
      <ToastContainer />
    </Router>
  )
}

export default App


