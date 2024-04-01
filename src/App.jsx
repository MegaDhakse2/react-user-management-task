import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout, {loader as rootLoader} from "./pages/RootLayout";
import SignupPage, { action as createUserAction, loader as signupLoader } from './pages/SignupPage';
import LoginPage, { action as authenticateUserAction, loader as loginLoader } from './pages/LoginPage';
import DashBoardPage, { loader as fetchUsers } from './pages/DashBoardPage';
import ErrorPage from './pages/ErrorPage';
import { logoutAction, loader as logoutLoader } from './pages/Logout';
import ProfilePage from './pages/ProfilePage';
import UsersPageLayout, { loader as usersLoader } from './pages/UsersPage';

const router= createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout/>,
      id: 'root',
      loader: rootLoader,
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
      ]
    },
    {
      path: '/user',
      element: <UsersPageLayout/>,
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
)

export default function App(){
  return(
    <RouterProvider router={router}/>
  )
}