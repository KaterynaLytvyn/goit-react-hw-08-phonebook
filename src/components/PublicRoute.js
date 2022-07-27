
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PublicRoute({children, restricted=false}) {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const shouldRestrict = isLoggedIn && restricted;
    
    return(
        shouldRestrict?<Navigate to='/contacts'/>:children
    ) 

}