import { render, screen, fireEvent } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../../contexts/AuthContext";
import { CartProvider, useCartContext } from "../../contexts/CartContext";
import { ProductProvider } from "../../contexts/ProductContext";
import { Header } from "./Header";

describe("Header Component", () => {
  it("Expect when you click on the button Home to show in the pathname to be /", async () => {
    global.window = { location: { pathname: null } };

    render(
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <Header />
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    );
    await fireEvent.click(screen.queryByText("HOME"));
    expect(global.window.location.pathname).toContain("/");
  });
  it("Expect when you click on the button Login to show in the pathname to be /login", async () => {
    global.window = { location: { pathname: null } };

    render(
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <Header />
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    );
    await fireEvent.click(screen.queryByText("LOGIN"));
    expect(global.window.location.pathname).toContain("/login");
  });
  
  it("Expect when you click on the button PRODUCTS to show in the pathname to be /products", async () => {
    global.window = { location: { pathname: null } };

    render(
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <Header />
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    );
    await fireEvent.click(screen.queryByText("PRODUCTS"));
    expect(global.window.location.pathname).toContain("/products");
  });
});
