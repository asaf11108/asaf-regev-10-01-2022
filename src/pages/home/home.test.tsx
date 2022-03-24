import { renderWithProviders } from '../../testing/render-with-providers';
import Home from './home';

it('It should mount', () => {
  renderWithProviders(<Home />);
});