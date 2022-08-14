import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('the button initial color is red', () => {
  render(<App />);

  // get element by role button that contains text 'Change color to blue'
  const colorButton = screen.getByRole('button', 'Change to blue');

  // expect button initial color to be 'red'
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  // click on the button
  fireEvent.click(colorButton);

  // expect button initial color to be 'blue'
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  // expect button text to be 'Change color to red'
  expect(colorButton.textContent).toEqual('Change to red');
});
