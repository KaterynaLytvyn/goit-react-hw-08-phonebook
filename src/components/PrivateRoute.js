import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function PrivateRoute({
    redirectTo,
    children,
    ...routeProps
    }) {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    
    return(
        <Route {...routeProps}>
            {isLoggedIn?children:<Navigate to='/login'/>}
        </Route>
    ) 

}