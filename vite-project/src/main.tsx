import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import i18n from "./i18n.ts"
import { I18nextProvider } from 'react-i18next';
import Dashboard from './components/dashboard.tsx';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  
  },
  {
    path: "/admin",
    element: <Dashboard />
  }
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
    <RouterProvider router={router} />
    </I18nextProvider>
  </StrictMode>
);