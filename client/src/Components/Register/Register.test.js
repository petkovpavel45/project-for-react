import { render, screen, fireEvent } from "@testing-library/react";
import { Register } from "./Register";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../../contexts/AuthContext";
import { ProductProvider } from "../../contexts/ProductContext";
import { CartProvider } from "../../contexts/CartContext";

describe("Register component", () => {
  it("renders without any crash", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <Register />
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    );

    const RegisterTitle = screen.getByTestId("email");
    expect(RegisterTitle).toBeInTheDocument();
  });

  it("updates the email state when email input is changed", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <Register />
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    );

    const emailInput = screen.getByTestId("email");
    fireEvent.change(emailInput, { target: { value: "test@abv.bg" } });
    expect(emailInput.value).toBe("test@abv.bg");
  });

  it("updates the username state when username input is changed", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <Register />
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    );

    const usernameInput = screen.getByTestId("username");
    fireEvent.change(usernameInput, { target: { value: "test12" } });
    expect(usernameInput.value).toBe("test12");
  });

  it("updates the phoneNumber state when phoneNumber input is changed", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <Register />
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    );

    const phoneNumberInput = screen.getByTestId("phoneNumber");
    fireEvent.change(phoneNumberInput, { target: { value: "0888140012" } });
    expect(phoneNumberInput.value).toBe("0888140012");
  });

  it("updates the address state when address input is changed", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <Register />
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    );

    const addressInput = screen.getByTestId("address");
    fireEvent.change(addressInput, { target: { value: "Main street 12" } });
    expect(addressInput.value).toBe("Main street 12");
  });

  it("updates the password state when password input is changed", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <Register />
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    );

    const passwordInput = screen.getByTestId("password");
    fireEvent.change(passwordInput, { target: { value: 123 } });
    expect(passwordInput.value).toBe("123");
  });

  it("renders error for invalid email", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <Register />
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    );
    const emailInput = screen.getByTestId("email");
    fireEvent.change(emailInput, { target: { value: "test@" } });
    fireEvent.blur(emailInput);
    expect(screen.getByTestId("emailError")).toBeInTheDocument();
  });

  it("renders error if username is shorter than 6 characters", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <Register />
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    );
    const usernameInput = screen.getByTestId("username");
    fireEvent.change(usernameInput, { target: { value: "test@" } });
    fireEvent.blur(usernameInput);
    expect(screen.getByTestId("usernameError")).toBeInTheDocument();
  });

  it("renders error if the phoneNumber is invalid", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <Register />
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    );
    const phoneNumberInput = screen.getByTestId("phoneNumber");
    fireEvent.change(phoneNumberInput, { target: { value: "012654876" } });
    fireEvent.blur(phoneNumberInput);
    expect(screen.getByTestId("phoneNumberError")).toBeInTheDocument();
  });

  it("renders error if address is shorter than 3 characters", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <Register />
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    );
    const addressInput = screen.getByTestId("address");
    fireEvent.change(addressInput, { target: { value: "mai" } });
    fireEvent.blur(addressInput);
    expect(screen.getByTestId("addressError")).toBeInTheDocument();
  });

  it("renders error if password is shorter than 6 characters", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <Register />
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    );
    const passwordInput = screen.getByTestId("password");
    fireEvent.change(passwordInput, { target: { value: "asdas" } });
    fireEvent.blur(passwordInput);
    expect(screen.getByTestId("passwordError")).toBeInTheDocument();
  });
  it("renders error if password and repeat password are not match", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <Register />
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    );
    const repeatPasswordInput = screen.getByTestId("repeatPassword");
    const passwordInput = screen.getByTestId("password");
    fireEvent.change(passwordInput, { target: { value: "asdasd5" } });
    fireEvent.blur(passwordInput);
    fireEvent.change(repeatPasswordInput, { target: { value: "asdasd" } });
    fireEvent.blur(repeatPasswordInput);
    expect(screen.getByTestId("repeatPassError")).toBeInTheDocument();
  });

  it("redirects after successful register", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <Register />
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    );
    const email = screen.getByTestId("email");
    const username = screen.getByTestId("username");
    const address = screen.getByTestId("address");
    const phoneNumber = screen.getByTestId("phoneNumber");
    const password = screen.getByTestId("password");
    const repeatPassword = screen.getByTestId("repeatPassword");
    const registerButton = screen.getByTestId("REGISTER");

    fireEvent.change(email, { target: { value: "test@abv.bg" } });
    fireEvent.change(username, { target: { value: "test23" } });
    fireEvent.change(address, { target: { value: "main street 2" } });
    fireEvent.change(phoneNumber, { target: { value: "0888140012" } });
    fireEvent.change(password, { target: { value: "asdasd" } });
    fireEvent.change(repeatPassword, { target: { value: "asdasd" } });
    fireEvent.submit(registerButton);
    expect(window.location.href).toEqual("http://localhost/");
  });
});
