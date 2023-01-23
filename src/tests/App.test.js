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
  test('Testar se os inputs existem', () => {
    render(<App />);
      const textBox = screen.getByRole('textbox');
      expect(textBox).toBeInTheDocument();

      const valueInput = screen.getByRole('spinbutton');
      expect(valueInput).toBeInTheDocument();

      const column = screen.getByTestId('column-filter')
      const compare = screen.getByTestId('comparison-filter')

      expect(column).toBeInTheDocument();
      expect(compare).toBeInTheDocument();
  });
  test('Testar se o botão existe', () => {
    render(<App />);
    const btn = screen.getByTestId('button-filter');
    expect(btn).toBeInTheDocument();  
  })
  test('Se todas categorias existem: ', () => {
    render(<App />);
    const name = screen.getByRole('columnheader', {
      name: /name/i
    });
    expect(name).toBeInTheDocument();


    const rotation = screen.getByRole('columnheader', {
      name: /rotation period/i
    });
    expect(rotation).toBeInTheDocument();

    const orbital = screen.getByRole('columnheader', {
      name: /orbital period/i
    });
    expect(orbital).toBeInTheDocument();

    const diameter = screen.getByRole('columnheader', {
      name: /diameter/i
    });
    expect(diameter).toBeInTheDocument();

    const climate = screen.getByRole('columnheader', {
      name: /climate/i
    });
    expect(climate).toBeInTheDocument();

    const gravity = screen.getByRole('columnheader', {
      name: /gravity/i
    });
    expect(gravity).toBeInTheDocument();

    const terrain = screen.getByRole('columnheader', {
      name: /terrain/i
    });
    expect(terrain).toBeInTheDocument();

    const surface = screen.getByRole('columnheader', {
      name: /surface water/i
    });

    expect(surface).toBeInTheDocument();
  })
   test('Se o filtro por nome e número funcionam', async () => {
    render(<App />);

    const textBox = screen.getByRole('textbox');
    const column = screen.getByTestId('column-filter')
    const compare = screen.getByTestId('comparison-filter')
    const valueInput = screen.getByRole('spinbutton')
    const btn = screen.getByTestId('button-filter');

    userEvent.selectOptions(column, ['rotation_period'])
    userEvent.selectOptions(compare, 'igual a')
    userEvent.type(valueInput, '23')
    userEvent.click(btn)


    userEvent.type(textBox, 'Ta');


     const tatooineElements = await screen.findByText(/tatooine/i);
     expect(tatooineElements).toBeInTheDocument();
 })
})


