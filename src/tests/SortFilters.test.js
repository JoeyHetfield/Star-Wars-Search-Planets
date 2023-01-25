import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import mockAPi from './mockApi';


describe('Testar A aplicação', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockAPi)
});
})
  test('Se a ordenagem funciona', async () => {
      render(<App />);
      const columnOrder = screen.getByTestId('column-sort');
      const asc = screen.getByTestId('column-sort-input-asc');
      const desc = screen.getByTestId('column-sort-input-desc');
      const btnOrder = screen.getByRole('button', {
        name: /ordenar/i
      });

      await screen.findByText('Tatooine')

      expect(columnOrder).toBeInTheDocument();
      expect(asc).toBeInTheDocument();
      expect(desc).toBeInTheDocument();
      expect(btnOrder).toBeInTheDocument();

      userEvent.selectOptions(columnOrder, ['diameter']);
      userEvent.click(asc);
      userEvent.click(btnOrder);

      userEvent.selectOptions(columnOrder, ["surface_water"]);
      userEvent.click(desc);
      userEvent.click(btnOrder);
})
  })
