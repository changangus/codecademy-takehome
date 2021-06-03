// __tests__
import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import App from '../App'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../redux/rootReducer';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const renderWithRedux = (
  component: any,
  { initialState, store = createStore(rootReducer, initialState) }: any = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>)
  }
};

describe("Testing when user submits a question answer", () => {
  it('is correct', async () => {
    const { getByTestId } = renderWithRedux(<App />);

    fireEvent.click(getByTestId('h1 answer'));
    expect(getByTestId('question-response')).toHaveTextContent('Correct!');

  });

  it('is incorrect', () => {
    const { getByTestId } = renderWithRedux(<App />);

    fireEvent.click(getByTestId('p answer'));
    expect(getByTestId('question-response')).toHaveTextContent('Incorrect...')
  })
});