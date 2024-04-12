import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout, {loader as rootLoader} from "./pages/Layout/RootLayout";
import SignupPage, { loader as signupLoader } from './pages/auth/SignupPage';
import LoginPage, { action as authenticateUserAction, loader as loginLoader } from './pages/auth/LoginPage';
import ErrorPage from './pages/ErrorPage';
import { logoutAction, loader as logoutLoader } from './pages/auth/Logout';
import ProfilePage from './pages/user/ProfilePage';
import UserLayout, { loader as userLayoutLoader } from './pages/Layout/UserLayout';
import AdminPanelPage, {loader as adminPanelLoader} from './pages/admin/AdminPanelPage';
import ManageUsersPage, {loader as manageUsersLoader} from './pages/admin/ManageUsersPage';
import NewUserPage from './pages/admin/NewUserPage';
import {action as formUserAction,} from './components/UserForm';
import UserDetailPage, {loader as fetchIndividualUser, action as userDeleteAction} from './pages/admin/UserDetailPage';
import EditUserPage from './pages/admin/EditUserPage';
import WelcomePage from './pages/Layout/WelcomePage';
import UserHomePage from './pages/Layout/UserHomePage';
import AdminHomePage from './pages/admin/AdminHomePage';
import AllArticlesPage, {loader as allArticlesLoader} from './pages/articles/AllArticlesPage';
import NewArticlePage from './pages/articles/NewArticlePage';
import MyArticlesPage, {loader as myArticlesLoader} from './pages/articles/MyArticlesPage';
import ArticlePreview from './components/articles/ArticlePreview';
import EditArticlePage, {loader as editArticleLoader} from './pages/articles/EditArticlePage';

export const router= createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout/>,
      id: 'root',
      loader: rootLoader,
      children:[
        {
          index: true,
          element: <WelcomePage/>,
        },
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
        <UserLayout/>,
      loader: userLayoutLoader,
      children:[
        {
          index:true,
          element:<UserHomePage/>
        },
        { 
          path: 'articles',
          element: <AllArticlesPage/>,
          // errorElement: <ErrorPage/>,
          id:'all_articles',
          loader: allArticlesLoader
        },
        { 
          path: 'myarticles',
          element: <MyArticlesPage  />,
          id:'my_articles',
          loader: myArticlesLoader
        },
        { 
          path: 'newarticle',
          element: <NewArticlePage/>,
          // id:'user_dashboard',
          // loader: fetchUsers.
        },
        { 
          path: 'newarticle/preview',
          element: <ArticlePreview />,
          // id:'user_dashboard',
          // loader: fetchUsers.
        },
        {
          path: 'articles/:articleId/edit',
          element: <EditArticlePage/>,
          loader: editArticleLoader
        },
        {
          path: 'myarticles/:articleId/edit',
          element: <EditArticlePage/>,
          loader: editArticleLoader
        },
        { path: 'profile',
          element: <ProfilePage/>,
        },
        {
          path: 'admin',
          element: <AdminPanelPage/>,
          loader: adminPanelLoader,
          errorElement: <ErrorPage/>,
          children:[
            {
              index:true,
              element: <AdminHomePage/>
            },
            {
              path: 'users',
              element: <ManageUsersPage/>,
              loader: manageUsersLoader
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
