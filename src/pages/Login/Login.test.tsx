import { render, screen } from '@testing-library/react';
import Login from './Login';
describe('Login component', () => {
    test('renders "login component here" as a text', () => {
        render(<Login />);
        const loginTextElement = screen.getByText('login component here')
        expect(loginTextElement).toBeInTheDocument();
    });
   
})

