import { fireEvent, render } from '@testing-library/react';
import {screen} from '@testing-library/dom';
import Home from './home';
import { providersWrapper } from '../../providers-wrapper';

describe('Home', () => {
  it('should mount', () => {

  });
  
  it('should mount different location', () => {
    // renderWithProviders(<Home />);
  });
  
  it('should mark location as favorite', async () => {
    render(providersWrapper(<Home />));
    fireEvent.click(await screen.findByRole('button'));

    expect(await screen.findByTestId('FavoriteIcon')).not.toBeNull();
  });
})