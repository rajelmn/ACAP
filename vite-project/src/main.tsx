import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import i18n from "./i18n.ts"
import { I18nextProvider } from 'react-i18next';
import Dashboard from './components/dashboard.tsx';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import AboutUs from './pages/AboutUs.tsx';
import LoginPage from './pages/login.tsx';
import BlogPage from './pages/Blogpage.tsx';
import Error from './components/error.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <App />,
  
  },
  {
    path: "/admin",
    errorElement: <Error />,
    element: <Dashboard />
  },
  {
    path: "/about-us",
    errorElement: <Error />,
    element: <AboutUs />
  }, 
  {
    path: "/blog/:id?", 
    errorElement: <Error />,
    element: <BlogPage />
  }, 
  {
    path: "/login", 
    errorElement: <Error />,
    element: <LoginPage />
  }
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
    <RouterProvider router={router} />
    </I18nextProvider>
  </StrictMode>
);