import { render, screen } from '@testing-library/react';
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

      const numberInput = screen.getByRole('spinbutton');
      expect(numberInput).toBeInTheDocument();
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
   test('Se o filtro por nome funciona', async () => {
    render(<App />);

    const textBox = screen.getByRole('textbox');
     userEvent.type(textBox, 'Ta');


     const tatooineElements = await screen.findByText(/tatooine/i);
     expect(tatooineElements).toBeInTheDocument();
 })
    test('Se o filtro por número funciona', async () => {
    render(<App />);

     const valueInput = screen.getByRole('spinbutton')
     userEvent.type(valueInput, '5000000000');
     
     const btn = screen.getByTestId('button-filter');
     userEvent.click(btn) 

     const tatooineElements = await screen.findByText(/Coruscant/i);
     expect(tatooineElements).toBeInTheDocument();
 })
})


