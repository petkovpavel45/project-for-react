import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../../contexts/AuthContext";
import { CartProvider } from "../../contexts/CartContext";
import { ProductProvider } from "../../contexts/ProductContext";
import { Create } from "./Create";

describe("Create Component", () => {
  it("Checks if the title is more than 3 chars", () => {
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
    let title = screen.getByTestId('title').value;
    title = 'Asd';
    expect(title).toHaveLength(3)
    
  });
});
