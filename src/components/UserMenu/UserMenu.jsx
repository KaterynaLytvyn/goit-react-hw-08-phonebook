import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import s from './UserMenu.module.css'
import { useLogoutUserMutation } from '../../redux/PhonebookSlice.js'
import { logout } from '../../redux/actions'

export default function UserMenu() {

    const userEmail = useSelector(state => state.auth.user.email)
    const [logoutUser] = useLogoutUserMutation()
    const dispatch = useDispatch()


    //await??
    const handleClick = () => {
        logoutUser()
        dispatch(logout())
    }

    return (
            <div className={s.container}>
                <p>{userEmail}</p>
                <button type="button" onClick={handleClick}>Log Out</button>
            </div>
    );
  }