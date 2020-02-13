// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import StarWarsCharacters from './components';
import { getData as mockGetNewData } from './api';

jest.mock('../api');

test('renders the character list with a next and back button', async () => {
    mockGetNewData.mockResolvedValueOnce({ id: 1 });
    const { getByText } = render(<StarWarsCharacters />);
    const nextButton = getByText(/Next/i);
    const previousButton = getByText(/Previous/i);

    fireEvent.click(nextButton);
    fireEvent.click(previousButton)

    expect(mockGetNewData).toHaveBeenCalledTimes(1);

    await wait(() => expect(getByText(/Luke Skywalker/i)));
});

test('test test', () => { });
