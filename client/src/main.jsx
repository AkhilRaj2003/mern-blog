import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home'
import Postdetail from './pages/Postdetail';
import Register from './pages/Register';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import Authors from './pages/Authors';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import DeletePost from './pages/DeletePost';
import CategoryPosts from './pages/CategoryPosts';
import AuthorPosts from './pages/AuthorPosts';
import Dashboard from './pages/Dashboard';
import Logout from './pages/Logout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
     children: [
       {index: true, element: <Home />},
       {path: "posts/:id", element: <Postdetail />},
       {path: "register", element: <Register />},
       {path: "login", element: <Login />},
       {path: "profile/:id", element: <UserProfile />},
       {path: "authors", element: <Authors />},
       {path: "create", element: <CreatePost />},
       {path: "posts/categories/:category", element: <CategoryPosts />},
       {path: "posts/users/:id", element: <AuthorPosts />},
       {path: "myposts/:id", element: <Dashboard />},
       {path: "posts/:id/edit", element: <EditPost />},
       {path: "posts/:id/delete", element: <DeletePost />},
       {path: "logout", elemets: <Logout />}
       
       
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
