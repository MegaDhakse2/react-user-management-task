import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout, {loader as rootLoader} from "./pages/RootLayout";
import SignupPage, { loader as signupLoader } from './pages/SignupPage';
import LoginPage, { action as authenticateUserAction, loader as loginLoader } from './pages/LoginPage';
import DashBoardPage, { loader as fetchUsers } from './pages/DashBoardPage';
import ErrorPage from './pages/ErrorPage';
import { logoutAction, loader as logoutLoader } from './pages/Logout';
import ProfilePage from './pages/ProfilePage';
import UsersLayout, { loader as manageUsersPageLoader } from './pages/UsersLayout';
import AdminPanelPage, {loader as adminPanelLoader} from './pages/AdminPanelPage';
import ManageUsersPage, {loader as usersLoader} from './pages/ManageUsersPage';
import NewUserPage from './pages/NewUserPage';
import {action as formUserAction,} from './components/UserForm';
import UserDetailPage, {loader as fetchIndividualUser, action as userDeleteAction} from './pages/UserDetailPage';
import EditUserPage from './pages/EditUserPage';

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
          action: formUserAction,
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
      element: 
        <UsersLayout/>,
      loader: manageUsersPageLoader,
      children:[
        { 
          path: 'dashboard',
          element: <DashBoardPage/>,
          id:'user_dashboard',
          loader: fetchUsers
        },
        { path: 'profile',
          element: <ProfilePage/>,
        },
        {
          path: 'admin',
          element: <AdminPanelPage/>,
          loader: adminPanelLoader,
          children:[
            {
              path: 'users',
              element: <ManageUsersPage/>,
              loader: usersLoader
            },
            { 
              path: 'users/:userId',
              id: 'user_details',
              loader: fetchIndividualUser,
              children:[
                { index:true, 
                  element:<UserDetailPage/>,
                  action: userDeleteAction,
                },
                {path:'edit',
                element:<EditUserPage/>,
                action: formUserAction,
                },
              ]
            },
            { path:'newuser',
              element: <NewUserPage/>,
              action: formUserAction,
            },
          ]
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