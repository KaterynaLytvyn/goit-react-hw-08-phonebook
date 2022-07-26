import { NavLink} from 'react-router-dom';
import s from './Navigation.module.css'
import { useSelector } from 'react-redux';
import UserMenu from '../UserMenu/UserMenu'

export default function Navigation() {

    const state = useSelector(state => state)
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    
    console.log('state from navigation', state)
    console.log('isLoggedIn from navigation', isLoggedIn)

    return (
            <nav className={s.container}>
                <NavLink to="/" className={({ isActive }) => isActive?s.active_link:s.link }>Home</NavLink>
                {!isLoggedIn && 
                    <div>                        
                        <NavLink to="/register" className={({ isActive }) => isActive?s.active_link:s.link}>Register</NavLink>
                        /
                        <NavLink to="/login" className={({ isActive }) => isActive?s.active_link:s.link}>Login</NavLink>
                    </div>
                    }
                {isLoggedIn && 
                    <div>
                        <NavLink to="/contacts" className={({ isActive }) => isActive?s.active_link:s.link }>Contacts</NavLink>
                        <UserMenu/>
                    </div>
                    }
            </nav>
    );
  }