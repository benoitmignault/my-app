import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

/*
1 - Render a component we to test
2 - Find elements we want to interact with
3 - Interact with those elements
4 - Assert that results are as expected
*/

// Screen - une maniere d'intéragir avec les component

test('renders learn react link', () => {
    // App est un component
    render(<App/ >);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeDefined();
});

test('adds 1 + 2 to equal 3', () => {
	expect(sum(3, 5)).toBe(8);
});





