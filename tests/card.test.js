import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Card from '../client/components/card';

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
describe('card content tests', () => {
  it("renders with a game title", () => {
    const selectGame = jest.fn();
    act(() => {
      render(<Card
        name={'Warcraft'}
        picUrl={'http://www.gstor/1.png'}
        addons={true}
        voice={true}
        num={1}
        selectGame={ selectGame }
      />, container);
    });
    expect(container.querySelector("p[id='card-title-1']").textContent).toBe("Warcraft");
  });

  it("renders with a game image", () => {
    const selectGame = jest.fn();
    act(() => {
      render(<Card
        name={'Warcraft'}
        picUrl={'http://www.gstor/1.png'}
        addons={true}
        voice={true}
        num={1}
        selectGame={ selectGame }
      />, container);
    });
    expect(container.querySelector("img").src).toBe("http://www.gstor/1.png");
  });

  it("renders with supports addons heading and value", () => {
    const selectGame = jest.fn();
    act(() => {
      render(<Card
        name={'Warcraft'}
        picUrl={'http://www.gstor/1.png'}
        addons={true}
        voice={true}
        num={1}
        selectGame={ selectGame }
      />, container);
    });
    expect(container.querySelector("p[id='card-addons-heading-1']").textContent).toBe("Supports addons");
    expect(container.querySelector("p[id='card-addons-value-1']").textContent).toBe("Y");
  });

  it("renders with supports voice heading and value", () => {
    const selectGame = jest.fn();
    act(() => {
      render(<Card
        name={'Warcraft'}
        picUrl={'http://www.gstor/1.png'}
        addons={true}
        voice={true}
        num={1}
        selectGame={ selectGame }
      />, container);
    });
    expect(container.querySelector("p[id='card-voice-heading-1']").textContent).toBe("Supports voice");
    expect(container.querySelector("p[id='card-voice-value-1']").textContent).toBe("Y");
  });
});