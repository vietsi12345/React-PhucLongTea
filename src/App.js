import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from '../src/Theme/DarkTheme';
import { Home } from './component/Home/Home';
import RestaurantDetail from './component/Restaurant/RestaurantDetail';
import Cart from './component/Cart/Cart';
import Profile from './component/Profile/Profile';
import { CustomerRouter } from './Routers/CustomerRouter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from './component/State/authentication/Action';
import {Routers} from './Routers/Routers'


function App() {
  const dispactch = useDispatch()
  const jwt = localStorage.getItem('jwt')
  const { auth } = useSelector(store => store)
  useEffect(() => {
    dispactch(getUser(auth.jwt || jwt))
  }, [auth.jwt])
  // console.log('jwt', auth.jwt)
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {/* <Navbar /> */}
      {/* <Home /> */}
      {/* <RestaurantDetail /> */}
      {/* <Cart /> */}
      {/* <Profile /> */}
      <Routers />
    </ThemeProvider >
  );
}

export default App;
