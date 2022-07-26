import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation.jsx';
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import { useGetCurrentUserQuery } from './redux/PhonebookSlice'
import { fetchUser } from './redux/actions'
import { useSelector } from 'react-redux';

let isInitialLoad = true

const Home = lazy(() => import('./views/HomeView'));
const Register = lazy(() => import('./views/RegisterView'));
const Login = lazy(() => import('./views/LoginView'));
const Contacts = lazy(() => import('./views/ContactsView'));

export const App = () => {

    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token)
    //const skip = !isInitialLoad || (token?false:true) 
    let skip = true
    if(isInitialLoad && token){
      skip=false;
    }

    console.log('isInitialLoad:', isInitialLoad, 'token', token, 'skip', skip ) 

    const { data } = useGetCurrentUserQuery(undefined,{skip})
    console.log('data from App', data)
    isInitialLoad = false

    useEffect(() => {
      console.log('useEffect')
      if(!skip){dispatch(fetchUser(data))}      
    },[dispatch])

    return (
      <div>
        <Navigation/>
        <Suspense fallback="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contacts" element={<Contacts />}/>
            <Route path="*" element={<Navigate to='/' />} />
          </Routes>
        </Suspense>
      </div>
    );
  };

  //<PrivateRoute path="/contacts"><Contacts /></PrivateRoute>