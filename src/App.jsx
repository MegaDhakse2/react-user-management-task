import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from "./pages/RootLayout";
import SignupPage, { createUserAction } from './pages/SignupPage';
import LoginPage, { authenticateUserAction } from './pages/LoginPage';
import DashBoardPage, { fetchUsers } from './pages/DashBoardPage';
import ErrorPage from './pages/ErrorPage';
import { tokenLoader } from './util/local_storage';
import { logoutAction } from './pages/Logout';
import { checkAuthLoader } from './util/auth';

const router= createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout/>,
      id: 'root',
      loader: tokenLoader,
      // errorElement: <ErrorPage/>,
      children:[
        { path: 'signup',
          element: <SignupPage/>,
          action: createUserAction
        },
        { path: 'login',
          element: <LoginPage/>,
          action: authenticateUserAction,
          errorElement: <ErrorPage/>,

        },
        { path: 'dashboard',
          element: <DashBoardPage/>,
          loader: fetchUsers
        },
        { path: 'logout',
          action: logoutAction,
          loader: checkAuthLoader
        }
      ]
    },

  ]
)

export default function App(){
  return(
    <RouterProvider router={router}/>
  )
}