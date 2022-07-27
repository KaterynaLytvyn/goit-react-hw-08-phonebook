import { NavLink} from 'react-router-dom';
import s from './Navigation.module.css'
import { useSelector } from 'react-redux';
import UserMenu from '../UserMenu/UserMenu'

export default function Navigation() {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

    return (
            <nav className={s.container}>
                <NavLink to="/" className={({ isActive }) => isActive?s.active_link:s.link }>Home</NavLink>
                {isLoggedIn && <NavLink to="/contacts" className={({ isActive }) => isActive?s.active_link:s.link }>Contacts</NavLink>}
                <div>
                {!isLoggedIn &&  
                    <div>                       
                        <NavLink to="/register" className={({ isActive }) => isActive?s.active_link:s.link}>Register</NavLink>
                        /
                        <NavLink to="/login" className={({ isActive }) => isActive?s.active_link:s.link}>Login</NavLink>
                    </div> 
                }
                {isLoggedIn && 
                    <div className={s.user}>                        
                        <UserMenu/>  
                    </div>                   
                }
                </div>
            </nav>

    );
  }