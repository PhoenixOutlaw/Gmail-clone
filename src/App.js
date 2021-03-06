import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { auth } from './components/fireb';
import { Header } from './components/header'
import { Loading } from './components/loading';
import { Login } from './components/login';
import { Main } from './components/Main';
import { selectlogin,login, logout, selectloading } from './features/loginSlice';
function App() {
  
  const  islogin= useSelector(selectlogin);
  const isloading= useSelector(selectloading);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(loading());
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
      {isloading?(<Loading/>):(
         !islogin?
          (<Login/>):
         (<>
         <Header/>
          <Main/>
         </>)
       
      )}

     
    </div>
  )
      
}

export default App;
