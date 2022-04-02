import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
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
      // render(providersWrapper(<Home />));
      // const inputWrapper = screen.getByTestId<HTMLInputElement>('auto-input');
      // const input = within(inputWrapper).getByRole<HTMLInputElement>('textbox');
      // input.setSelectionRange(0, input.value.length);
      // userEvent.type(input, 'paris');
      // console.log("🚀 ~ file: home.test.tsx ~ line 18 ~ it ~ input", input.value)
      // const clickable = await waitFor(() => screen.getAllByRole('option').at(0)!, { timeout: 20000 });
      // screen.debug()
      // userEvent.click(clickable);
      // expect(await screen.findByTestId('localized-name')).toHaveTextContent('Paris');
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