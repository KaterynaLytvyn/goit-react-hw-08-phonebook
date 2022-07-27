import { useState } from "react"
import { useDispatch } from 'react-redux'
import { useRegisterUserMutation } from '../redux/PhonebookSlice'
import { register } from '../redux/actions'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

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
            console.log('result of registerUser', result)
            if (!result.error){dispatch(register(result.data))}  
            else alert('An error occured:'+ result.error.data.name)           
            
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
        <Container>
            <h1>Registration Page</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" name="name" onChange={handleChange} />
                </Form.Group>
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
                    Register
                </Button>
            </Form>
        </Container>
    )
}