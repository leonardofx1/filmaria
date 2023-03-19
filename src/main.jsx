import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';   

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            { path: '/', element: <Home /> },
            {path:'/movie/:id', element:<MovieDetails/>}
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
