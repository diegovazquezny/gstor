import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Search } from '../client/components/search';
import * as actions from '../client/actions/actions';

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('search tests', () => {
  it("renders an input field with 'Search for a game' placeholder text", () => {
    act(() => {
      render(<Search
        updateHideSearch={actions.updateHideSearch}
        updateSearchResults={actions.updateSearchResults}
        updateSearchQuery={actions.updateSearchQuery}
      />, container);
    });
    expect(container.querySelector("input").placeholder).toBe("Search for a game");
  });
});