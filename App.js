import Header from "./components/Header";
import Body from "./components/Body";

import Footer from "./components/Footer";
import {RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import ReactDOM from "react-dom/client";
import React from "react";
import Contact from "./components/Contact";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import store from "./components/Store";
import MyForm from "./components/MyForm";





function App() {
  return (
   
    <>
   
   <Provider store={store}>

   <Header/>
   <Outlet/>
   <Footer/>
   

   </Provider>
  
   </>
  );
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/product_details/:id",
        element: <ProductDetails />
      },
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/Contact",
        element: <Contact />
      },
      {
        path: "/Cart",
        element: <Cart />
      },
      {
        path: "/Form",
        element: <MyForm />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(<RouterProvider router={appRouter} />);
  export default App;
