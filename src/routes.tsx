import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import ContactPage from "./pages/contact-page/ContactPage";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import RegisterPage from "./pages/registerpage/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },
]);

export default router;
