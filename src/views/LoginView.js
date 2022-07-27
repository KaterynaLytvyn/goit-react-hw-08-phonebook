import { useState } from "react"
import { useDispatch } from 'react-redux'
import { useLoginUserMutation } from '../redux/PhonebookSlice'
import { login } from '../redux/actions'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

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
            dispatch(login(result.data))
          } catch (error) {
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
        <Container>
            <h1>Login Page</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange}/>
                </Form.Group>
                 <Button variant="primary" type="submit">
                    Log in
                </Button>
            </Form>
        </Container>
    )
}