
import { BrowserRouter, Routes,Route, Navigate} from "react-router-dom";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import { useDispatch, useSelector } from "react-redux";
import HomePage from "./components/HomePage";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import { useEffect } from "react";
import { userAuthenticated } from "./app/authenticationSlice";
import Navbar from "./components/Navbar";




const App=()=> {

  const {isLoggedIn} =useSelector(state=>state.authenticationSlice)
  const dispatch=useDispatch()
  useEffect(()=>{
    const token=sessionStorage.getItem('token')
    if(token !==undefined && token !==null) {
      dispatch(userAuthenticated({token}))
    }
  },[])

  return (<BrowserRouter>
      <Navbar />
      <Routes>   
        <Route exact path="/" element={isLoggedIn ? <HomePage /> : <SignInPage />} /> 
        <Route path="/signup" element={isLoggedIn ? <Navigate to='/' /> : <SignUpPage />} />
        <Route path="/signin" element={isLoggedIn ? <Navigate to='/' /> : <SignInPage />} />
        <Route component={() => <h2>Page not found!</h2>} />
    </Routes>
  </BrowserRouter>)

}

export default App;


