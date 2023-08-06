import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css';
import App from './App';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage'
import About from './pages/About';
import Contact from './pages/Contact';
import SingleProductPage from './pages/SingleProductPage'
import { Provider } from 'react-redux';
import store from './store'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <App/>}>
      <Route index={true} path='/' element={ <Home />} />
      <Route  path='/about' element={ <About />} />
      <Route  path='/contact' element={ <Contact />} />
      <Route path='/products' element={ <ProductsPage />} />
      <Route path='products/:id' element={<SingleProductPage />} />
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={ router }/>
  </React.StrictMode>
  </Provider>
);


