import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Hero } from "./Hero";

describe("Hero Component", () => {
  it("Expect when you click on the button READ MORE to show in the pathname to be /products", async() => {
    global.window = { location: { pathname: null } };

    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );
    await fireEvent.click(screen.queryByText('READ MORE'));

    expect(global.window.location.pathname).toContain('/products')
  });
});
