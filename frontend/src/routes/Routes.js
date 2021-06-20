import { Route } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen'
import ProductDetails from '../screens/ProductDetails'
import CartScreen from '../screens/CartScreen'
// import Login from '../components/Login'
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from "../screens/RegisterScreen";
import ProfileScreen from '../screens/ProfileScreen';
import UserListScreen from '../screens/UserListScreen';
import UserEditScreen from '../screens/UserEditScreen'
const Routes=()=>{
    return (
      <>
        <Route path="/" exact component={HomeScreen}></Route>
        <Route
          path="/productDetails/:id"
          exact
          component={ProductDetails}
        ></Route>
        <Route path="/cart/:id?" exact component={CartScreen}></Route>
        <Route path="/login" exact component={LoginScreen}></Route>

        <Route path="/register" exact component={RegisterScreen}></Route>
        <Route path="/profile" exact component={ProfileScreen}></Route>
        <Route path="/admin/userList" exact component={UserListScreen}></Route>
        <Route path="/admin/users/:id/edit" exact component={UserEditScreen}></Route>
      </>
    );
}
export default Routes