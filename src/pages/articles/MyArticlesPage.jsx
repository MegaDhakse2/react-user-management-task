import SideNavBar from "../../components/UI/SideNavBar";
import ArticlesShow from "../../components/articles/ArticlesShow";
import articlesImg from '../../assets/images/articles/articles_icon.jpg';
import addArtImg from '../../assets/images/articles/ready_write.jpg';
import ImageNavLink from "../../components/UI/ImageNavLink";
import classes from './ArticlesPage.module.css';
import { fetchData } from "../../util/http_requests";
import {useLoaderData, useRouteLoaderData} from 'react-router-dom';
import dataStore from "../../store";
import Profile from "../../components/Profile";
import {useSelector} from 'react-redux';

export default function MyArticlesPage(){
    //Redux
    const currentUser = useSelector(state => state.user.currentUser)
    debugger
    //Router
    const myArticles = useLoaderData();
    
    return(
        <div className={classes.articles_panel}>
            <ArticlesShow 
                articles={myArticles}
                heading={'My Articles'}
            />
            <div className={classes.profile_block}>
                <Profile user={currentUser}/>
            </div>
        </div>
    )
}

export async function loader(){
    const currentUser = dataStore.getState().user.currentUser;

    const rawArticles = await fetchData({url:'https://reactudemydb-default-rtdb.firebaseio.com/articles.json'})
    debugger
    if (rawArticles) {
        // const articles = Object.values(rawArticles)
        // const myArticles = articles.filter((article)=>{
        //    return article.author === currentUser.first_name
        // })
        // return myArticles;
        const articlesWithKeys = Object.entries(rawArticles);
        const myArticles = articlesWithKeys.filter(([key,article]) => {
            return article.author === currentUser.first_name
        });
        return myArticles;
    }else{
        return null
    }
   
}