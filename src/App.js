import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { auth } from './components/fireb';
import { Header } from './components/header'
import { Login } from './components/login';
import { Main } from './components/Main';
import { selectlogin,login, logout } from './features/loginSlice';
function App() {
  
  const  islogin= useSelector(selectlogin);
  const dispatch = useDispatch();

  useEffect(() => {
   auth.onAuthStateChanged(
     (user)=>{
       if(user){
         dispatch(login({
           displayName: user.displayName,
           email: user.email,
           photoURL: user.photoURL,
         }));
       }
       else{
         logout();
       }
     }
   )
  }, [])

  
  return (
    <div className="App">
      {!islogin?
         (<Login/>):
        (<>
        <Header/>
         <Main/>
        </>)
      }
    </div>
  )
      
}

export default App;
