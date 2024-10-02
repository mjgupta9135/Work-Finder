// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "./components/ui/sonner"; // Adjust path if necessary
import { RouterProvider } from "react-router-dom";
import useRoute from "./hooks/useRoute"; // Assuming useRoute is correctly set up
import store from "./hooks/store"; // Redux store
import { persistStore } from "redux-persist";
import "./index.css"; // Global CSS

const persistor = persistStore(store);
const appRoute = useRoute(); // Route configuration

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* RouterProvider for handling routes */}
        <RouterProvider router={appRoute} />
      </PersistGate>
    </Provider>
    <Toaster /> {/* Toaster notifications */}
  </StrictMode>
);
