import { fireEvent, render } from '@testing-library/react';
import {screen} from '@testing-library/dom';
import Home from './home';
import { providersWrapper } from '../../providers-wrapper';

describe('Home', () => {
  describe('location', () => {    
    it('should select default location', async () => {
      render(providersWrapper(<Home />));
      expect(await screen.findByTestId('localized-name')).toHaveTextContent('Tel Aviv');
    });
    
    it('should select different location', async () => {
      render(providersWrapper(<Home />));

      expect(await screen.findByTestId('localized-name')).toHaveTextContent('Paris');
    });

    it('should init with defferent active location', async () => {
  
    });
  })
  
  describe('favorite', () => {
    it('should not mark location as favorite', async () => {
      render(providersWrapper(<Home />));
      expect(await screen.findByTestId('FavoriteBorderIcon')).toBeInTheDocument();
    });
    
    it('should mark location as favorite', async () => {
      render(providersWrapper(<Home />));
      fireEvent.click(await screen.findByRole('button'));
      expect(await screen.findByTestId('FavoriteIcon')).toBeInTheDocument();
    });
  });

})