import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';
import RootLayout, {loader as rootLoader} from "./pages/RootLayout";
import SignupPage, { createUserAction, loader as signupLoader } from './pages/SignupPage';
import LoginPage, { authenticateUserAction, loader as loginLoader } from './pages/LoginPage';
import DashBoardPage, { fetchUsers } from './pages/DashBoardPage';
import ErrorPage from './pages/ErrorPage';
import { logoutAction, loader as logoutLoader } from './pages/Logout';
import ProfilePage from './pages/ProfilePage';
import { loader as usersLoader } from './pages/UsersPage';
const router= createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout/>,
      id: 'root',
      loader: rootLoader,
      // errorElement: <ErrorPage/>,
      children:[
        { path: 'signup',
          element: <SignupPage/>,
          action: createUserAction,
          loader: signupLoader,
        },
        { path: 'login',
          element: <LoginPage/>,
          action: authenticateUserAction,
          loader: loginLoader,
          errorElement: <ErrorPage/>,

        },
        {
          path: 'user',
          loader: usersLoader,
          children:[
            { 
              path: 'dashboard',
              element: <DashBoardPage/>,
              loader: fetchUsers
            },
            { path: 'profile',
              element: <ProfilePage/>,
            },
            { path: 'logout',
              action: logoutAction,
              loader: logoutLoader
            }
          ]
        },
      ]
    },

  ]
)

export default function App(){
  return(
    <RouterProvider router={router}/>
  )
}