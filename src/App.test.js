import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
/*
test('Verifier si la page affiche correctement', () => {
    const root = document.createElement("div");
    ReactDOM.render(<App />, root);
    expect(root.querySelector("h1").textContent).toBe("TODO");
});
*/
// la méthode render retourne le composant <App />
// The i flag makes the regular expression case-insensitive

/*
test('Verifier si la page affiche correctement', () => {
    const root = document.createElement("div");
    ReactDOM.render(<App />, root);
    expect(root.querySelector("h1").textContent).toBe("TODO");
});
*/
const sum = require('./App');

test('adds 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toBe(3);
});
