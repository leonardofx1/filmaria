import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Search from './pages/Search'

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            { path: '/', element: <Home /> },
            {path:'/movie/:id', element:<MovieDetails/>},
            {path:'/Search', element:<Search/>}
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
