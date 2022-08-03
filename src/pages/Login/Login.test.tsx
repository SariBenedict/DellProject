import { render, screen } from '@testing-library/react';
import Login from './Login';
describe('Login component', () => {
    test('handle onclick', () => {
        const onclick = jest.fn();
        render(<Login />);
        const handleSubmit = screen.getByText('login component here')
        expect(onclick).toBeInTheDocument();
    });
})

