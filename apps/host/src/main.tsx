import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@ecommerce/ui";
import { CartProvider } from "./context/CartContext.tsx";
import App from "./App.tsx";
import "@ecommerce/ui/src/global.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeProvider>
  </StrictMode>,
);
