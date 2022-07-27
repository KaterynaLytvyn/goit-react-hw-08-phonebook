import { useDispatch } from 'react-redux';
import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation.jsx';
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import { useGetCurrentUserQuery } from './redux/PhonebookSlice'
import { fetchUser } from './redux/actions'
import { useSelector } from 'react-redux';

const Home = lazy(() => import('./views/HomeView'));
const Register = lazy(() => import('./views/RegisterView'));
const Login = lazy(() => import('./views/LoginView'));
const Contacts = lazy(() => import('./views/ContactsView'));

export const App = () => {

    let skip = true;
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token)
    const user = useSelector(state => state.auth.user)
    
    if(token && user.name===null && user.email===null){
      skip=false
    }

    const { data } = useGetCurrentUserQuery(undefined,{skip})
    if(data){dispatch(fetchUser(data))}

    return (
      <div>
        <Navigation/>
        <Suspense fallback="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<PublicRoute restricted><Register /></PublicRoute>} />
            <Route path="/login" element={<PublicRoute restricted><Login /></PublicRoute>} />
            <Route path="/contacts" element={<PrivateRoute><Contacts /></PrivateRoute>}/>
            <Route path="*" element={<Navigate to='/' />} />
          </Routes>
        </Suspense>
      </div>
    );
  };
