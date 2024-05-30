import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/productScreen"
import CartScreen from './screens/cartScreen'
// import { Rating } from "@material-tailwind/react"

function App() {
  return (
    <Router>
      <Header/>
      <main className="px-24 py-2 pb-12">
        <Routes>
          <Route path='/products' element={<HomeScreen/> } />
          <Route path='/products/:id' element={<ProductScreen/> }/>
          <Route path='/cart' element={<CartScreen/>} />
          
        </Routes>     
      </main>
      <Footer/>
    </Router>
  )
}

export default App


