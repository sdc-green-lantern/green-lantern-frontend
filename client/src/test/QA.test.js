import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import QA from '../components/QA/QA.jsx';

afterEach(() => {
  cleanup();
});

test('loads and displays QA heading', () => {
  render(<QA />);
  const QAcomponent = screen.getByTestId('QA-1');

  expect(QAcomponent).toBeInTheDocument();
  expect(QAcomponent).toHaveTextContent('Questions and Answers');
});
