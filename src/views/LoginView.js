import { useState } from "react"
import { useDispatch } from 'react-redux'
import { useLoginUserMutation } from '../redux/PhonebookSlice'
import { login } from '../redux/actions'

export default function LoginView() {

    const [loginUser] = useLoginUserMutation()
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = event => {
        const value = event.target.value;
        const name = event.target.name;

        switch ( name ) {
            case 'email': 
                return setEmail(value);
            case 'password': 
                return setPassword(value);
            default:
                return;      
        }

    }

    const handleUserLogin = async user => {
        try {
            const result = await loginUser(user)
            console.log('result of login',result)
            dispatch(login(result.data))
          } catch (error) {
            console.log('error', error)
          }
    }

    const handleSubmit = event => {
        event.preventDefault();

        const user = { email, password }
        handleUserLogin(user)
        
        setEmail('');
        setPassword('');
    }   


    return(
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                Email
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    required
                />
                </label>
                <label>
                Password
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    required
                />
                </label>
                <button type="submit" className="button">Log In</button>
            </form>
        </div>
    )
}