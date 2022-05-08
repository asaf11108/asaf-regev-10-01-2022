import { render, within } from '@testing-library/react';
import { screen, waitFor } from '@testing-library/dom';
import Home from './home';
import { providersWrapper } from '../../providers-wrapper';
import userEvent from '@testing-library/user-event';

describe('Home', () => {
  describe('location', () => {    
    it('should select default location', async () => {
      render(providersWrapper(<Home />));
      expect(await screen.findByTestId('localized-name')).toHaveTextContent('Tel Aviv');
    });
    
    it('should select different location', async () => {
      render(providersWrapper(<Home />));
      const inputWrapper = screen.getByTestId<HTMLInputElement>('autocomplete-textfield');
      const input = within(inputWrapper).getByRole<HTMLInputElement>('textbox');
      input.setSelectionRange(0, input.value.length);
      userEvent.type(input, 'paris');
      const clickable = await waitFor(() => screen.getAllByRole('option').at(0)!, { timeout: 3000 });
      userEvent.click(clickable);
      expect(await screen.findByTestId('localized-name')).toHaveTextContent('Paris');
    });
  })
  
  describe('favorite', () => {
    it('should not mark location as favorite', async () => {
      render(providersWrapper(<Home />));
      expect(await screen.findByTestId('FavoriteBorderIcon')).toBeInTheDocument();
    });
    
    it('should mark location as favorite', async () => {
      render(providersWrapper(<Home />));
      userEvent.click(await screen.findByRole('button'));
      expect(await screen.findByTestId('FavoriteIcon')).toBeInTheDocument();
    });
  });

})