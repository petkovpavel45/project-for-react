import { render, screen, fireEvent } from "@testing-library/react";
import { Login } from "./Login";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../../contexts/AuthContext";
import { ProductProvider } from "../../contexts/ProductContext";
import { CartProvider } from "../../contexts/CartContext";

describe("Login component", () => {
  it("renders without any crash", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <Login />
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    );

    const loginTitle = screen.getByTestId("email");
    expect(loginTitle).toBeInTheDocument();
  });

  it("updates the email state when email input is changed", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <Login />
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    );

    const emailInput = screen.getByTestId("email");
    fireEvent.change(emailInput, { target: { value: "test@abv.bg" } });
    expect(emailInput.value).toBe("test@abv.bg");
  });

  it("updates the password state when password input is changed", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <Login />
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    );

    const passwordInput = screen.getByTestId("password");
    fireEvent.change(passwordInput, { target: { value: 123 } });
    expect(passwordInput.value).toBe("123");
  });

  it("redirects after successful login", () => {
    render(
        <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <Login />
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    );
    const emailInput = screen.getByTestId("email");
    const passwordInput = screen.getByTestId("password");

    const loginButton = screen.getByTestId('login');

    fireEvent.change(emailInput, { target: { value: "pavel@abv.bg" } });
    fireEvent.blur(emailInput);
    fireEvent.change(passwordInput, { target: { value: 'asdasd' } });
    fireEvent.blur(passwordInput);
    fireEvent.submit(loginButton);
    expect(window.location.href).toEqual("http://localhost/");
});
});
