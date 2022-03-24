import { fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../testing/render-with-providers';
import Home from './home';

describe('Home', () => {
  it('should mount', () => {
    renderWithProviders(<Home />);
  });
  
  it('should mount different location', () => {
    // renderWithProviders(<Home />);
  });

  it('should mark location as favorite', () => {
    renderWithProviders(<Home />);

    // fireEvent.click(screen.get)
  });
})