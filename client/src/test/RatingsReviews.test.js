import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import axiosConfig from '../../../axiosConfig.js'; // use this variable in place of axios
import RatingsReviews from '../components/RatingsReviews/RatingsReviews.jsx';

const productId = 65632;

afterEach(() => {
  cleanup();
});

test('loads and displays Ratings and Reviews heading', () => {
  render(<RatingsReviews axiosConfig={axiosConfig} productId={productId}/>);
  const RatingsReviewsHeader = screen.getByTestId('RatingsReviews-header');

  expect(RatingsReviewsHeader).toBeInTheDocument();
  expect(RatingsReviewsHeader).toHaveTextContent('RATINGS & REVIEWS');
});


// Review Tile

  // Star Rating
    // test for each rating from 1 through 5

  // Summary
    // bold
    // will

// Content:
  // no more than 5 images
  // renders images

