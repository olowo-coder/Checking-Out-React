import './App.css';
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';
import MyForm from './components/MyForm'
import CustomerInfo from './components/CustomerInfo'
import ShippingAddress from './components/ShippingAddress'
import DiscountCoupon from './components/DiscountCoupon'
import PaymentInfo from './components/PaymentInfo'
import ShippingMethod from './components/ShippingMethod'
import CheckingOut from './components/CheckingOut'
import OrderSummary from './components/OrderSummary'
import OneItemOrder from './components/OneItemOrder'
import ItemsOrder from './components/ItemsOrder'
import OrderConfirmation from "./components/orderStuff/OrderConfirmation";

function App() {
  return (
    <div>
      {/* <MyForm/> */}
      {/* <CustomerInfo /> */}
      {/* <ShippingAddress/> */}
      {/* <DiscountCoupon/> */}
      {/* <PaymentInfo/> */}
      {/* <ShippingMethod/> */}
      {/* <CheckingOut/> */}
      {/* <OrderSummary/> */}
      {/* <OneItemOrder/> */}
      {/* <ItemsOrder/> */}
      <BrowserRouter>
        <nav>
          <h1>Fitnesso</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
        <Routes>
          <Route exact path="/checkout/*" element={<CheckingOut/>} />
          <Route path="/" element={(
            <div>
              <h2>Test Page</h2>
              <p>Home Welcome</p>
            </div>
          )}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
