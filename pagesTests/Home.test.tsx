import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('renders the homepage header', () => {
    render(<Home />);

    const homepageTitle = screen.getByRole('heading', {
      name: /Hello FFXIV Stuff Helper Homepage/i,
    });
    expect(homepageTitle).toBeInTheDocument();
  });
});
