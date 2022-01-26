import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import Button from '.';

describe('<Button />', () => {
  it('should render the button component', () => {
    render(<Button>Click me!</Button>);
  
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should call onClick on button click', () => {
    const handleClick = jest.fn();
    
    render(<Button onClick={handleClick}>Click me!</Button>);
    userEvent.click(screen.getByRole('button'));
  
    expect(handleClick).toHaveBeenCalled();
  });
});