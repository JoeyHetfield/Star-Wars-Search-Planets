import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

jest.mock('../services/FetchApi', () => {
  return jest.fn(() => 'mocked function')
})

describe('Testar A aplicação', () => {
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
  // test('Se o filtro por nome funciona', () => {
  //   render(<App />);

  //   const textBox = screen.getByRole('textbox');
  //   userEvent.type(textBox, 'Ta');


  //   const tatooineElements = screen.queryAllByText(/tatooine/i);
  //   expect(tatooineElements).toHaveLength(2);
    
  // })

})
