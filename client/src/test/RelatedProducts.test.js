/*
test example of a component
in command line run 'npm test'
*/
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import RelatedProducts from '../components/Comparison/RelatedProducts/RelatedProducts.jsx';

afterEach(cleanup);

test('should take a snapshot', () => {
  const { asFragment } = render(<RelatedProducts />);

  expect(asFragment(<RelatedProducts />)).toMatchSnapshot();
});

// test if the dom element with test id 'title' in <RelatedProducts />
// have text content 'RELATED PRODUCTS'
test('should equal to RELATED PRODUCTS', () => {
  const { getByTestId } = render(<RelatedProducts />);
  expect(getByTestId('title')).toHaveTextContent('RELATED PRODUCTS');
});
