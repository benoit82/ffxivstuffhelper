import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('renders the homepage header', () => {
    render(<Home />);

    const homepageTitle = screen.getByRole('heading', {
      name: /homepage.mainTitle/i,
    });
    expect(homepageTitle).toBeInTheDocument();
  });
});
