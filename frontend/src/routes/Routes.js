import { Route } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen'
import ProductDetails from '../screens/ProductDetails'
import Cart from '../components/Cart'
import Login from '../components/Login'
const Routes=()=>{
    return (
      <>
        <Route path="/" exact component={HomeScreen}></Route>
        <Route
          path="/productDetails/:id"
          exact
          component={ProductDetails}
        ></Route>
        <Route
          path="/cart/:?id"
          exact
          component={Cart}
        ></Route>
        <Route
          path="/login"
          exact
          component={Login}
        ></Route>
      </>
    );
}
export default Routes