import { useState } from "react"
import { useDispatch } from 'react-redux'
import { useRegisterUserMutation } from '../redux/PhonebookSlice'
import { registerUser } from '../redux/actions'

export default function RegisterView() {

    const [registerUser] = useRegisterUserMutation()
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = event => {
        const value = event.target.value;
        const name = event.target.name;

        switch ( name ) {
            case 'name': 
                return setName(value);
            case 'email': 
                return setEmail(value);
            case 'password': 
                return setPassword(value);
            default:
                return;      
        }

    }

    const handleUserSignUp = async user => {
        try {
            const result = await registerUser(user)
            console.log('result of registerUser',result)
            dispatch(registerUser(result))
          } catch (error) {
            console.log('error', error)
          }
    }

    const handleSubmit = event => {
        event.preventDefault();

        const user = { name, email, password }
        handleUserSignUp(user)

        
        setName('');
        setEmail('');
        setPassword('');
    }   

    return(
        <div>
            <h1>Registration Page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                Name
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    required
                />
                </label>
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
                <button type="submit" className="button">Sign up</button>
            </form>
        </div>
    )
}