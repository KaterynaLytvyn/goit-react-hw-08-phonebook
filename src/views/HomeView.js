import { NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function HomeView() {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

    return(
        <div>
            <h1>Hello, this is Phonebook app</h1>
            {!isLoggedIn && <p>to use the app please <NavLink to="/register">Register</NavLink> or <NavLink to="/login">Login</NavLink></p>}
        </div>
    )
}