import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from "./components/Header"
import Footer from "./components/Footer"
import PrivateRoutes from './components/PrivateRoutes'
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/productScreen"
import CartScreen from './screens/cartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import ProfileScreen from './screens/ProfileScreen'


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
          <Route path='/profile' element={<ProfileScreen /> }/>
          <Route path='/register' element={<RegisterScreen/> }/>

          {/* private routes */}
          <Route path='' element={<PrivateRoutes />}>
            <Route path='/shipping' element={<ShippingScreen />} />
            <Route path='/payment' element={<PaymentScreen />} />
            <Route path='/placeorder' element={<PlaceOrderScreen />} />
            <Route path='/order/:id' element={<OrderScreen />} />
          </Route>

        </Routes>     
      </main>
      <Footer/>
      <ToastContainer />
    </Router>
  )
}

export default App


