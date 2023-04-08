import { render, screen, fireEvent } from "@testing-library/react";
import { Create } from "./Create";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../../contexts/AuthContext";
import { ProductProvider } from "../../contexts/ProductContext";
import { CartProvider } from "../../contexts/CartContext";

describe("Create component", () => {
  it("renders without any crash", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <Create />
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    );

    const CreateTitle = screen.getByTestId("title");
    expect(CreateTitle).toBeInTheDocument();
  });

  it("updates the title state when title input is changed", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <Create />
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    );

    const titleInput = screen.getByTestId("title");
    fireEvent.change(titleInput, { target: { value: "test" } });
    expect(titleInput.value).toBe("test");
  });

  it("updates the description state when description input is changed", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <Create />
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    );

    const descriptionInput = screen.getByTestId("description");
    fireEvent.change(descriptionInput, { target: { value: "testdescription" } });
    expect(descriptionInput.value).toBe("testdescription");
  });

  it("updates the imageUrl state when imageUrl input is changed", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <Create />
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    );

    const imageUrlInput = screen.getByTestId("imageUrl");
    fireEvent.change(imageUrlInput, { target: { value: "https://assets.roguefitness.com/f_auto,q_auto,c_limit,w_1600,b_rgb:ffffff/catalog/Conditioning/Strength%20Equipment/Dumbbells/XX17983/XX17983-H_dneu0o.png" } });
    expect(imageUrlInput.value).toBe("https://assets.roguefitness.com/f_auto,q_auto,c_limit,w_1600,b_rgb:ffffff/catalog/Conditioning/Strength%20Equipment/Dumbbells/XX17983/XX17983-H_dneu0o.png");
  });

  it("updates the price state when price input is changed", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <Create />
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    );

    const priceInput = screen.getByTestId("price");
    fireEvent.change(priceInput, { target: { value: "250" } });
    expect(priceInput.value).toBe("250");
  });

  it("renders error if title is shorter than 3 characters", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <Create />
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    );
    const titleInput = screen.getByTestId("title");
    fireEvent.change(titleInput, { target: { value: "te" } });
    fireEvent.blur(titleInput);
    expect(screen.getByTestId("titleError")).toBeInTheDocument();
  });

  it("renders error if description is shorter than 6 characters", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <Create />
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    );
    const descriptionInput = screen.getByTestId("description");
    fireEvent.change(descriptionInput, { target: { value: "testt" } });
    fireEvent.blur(descriptionInput);
    expect(screen.getByTestId("descriptionError")).toBeInTheDocument();
  });

  it("renders error if the imageUrl is invalid", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <Create />
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    );
    const imageUrlInput = screen.getByTestId("imageUrl");
    fireEvent.change(imageUrlInput, { target: { value: "test" } });
    fireEvent.blur(imageUrlInput);
    expect(screen.getByTestId("imageUrlError")).toBeInTheDocument();
  });

  it("renders error if the price is not a number", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <Create />
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    );
    const priceInput = screen.getByTestId("price");
    fireEvent.change(priceInput, { target: { value: "notanumber" } });
    fireEvent.blur(priceInput);
    expect(screen.getByTestId("priceError")).toBeInTheDocument();
  });

  it("redirects after successful Create", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <Create />
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    );
    const title = screen.getByTestId("title");
    const description = screen.getByTestId("description");
    const price = screen.getByTestId("price");
    const imageUrl = screen.getByTestId("imageUrl");
    const createButton = screen.getByTestId("create");

    fireEvent.change(title, { target: { value: "test" } });
    fireEvent.change(description, { target: { value: "test description" } });
    fireEvent.change(imageUrl, { target: { value: "https://assets.roguefitness.com/f_auto,q_auto,c_limit,w_1600,b_rgb:ffffff/catalog/Conditioning/Strength%20Equipment/Dumbbells/XX17983/XX17983-H_dneu0o.png" } });
    fireEvent.change(price, { target: { value: "250" } });
    fireEvent.submit(createButton);
    expect(window.location.href).toEqual("http://localhost/");
  });
});
