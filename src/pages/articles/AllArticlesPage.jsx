import SideNavBar from "../../components/UI/SideNavBar";
import ArticlesShow from "../../components/articles/ArticlesShow";
import articlesImg from '../../assets/images/articles/articles_icon.jpg';
import addArtImg from '../../assets/images/articles/ready_write.jpg';
import ImageNavLink from "../../components/UI/ImageNavLink";
import classes from './ArticlesPage.module.css';
import { fetchData } from "../../util/http_requests";
import {useLoaderData, useRouteLoaderData} from 'react-router-dom';
import { Suspense } from "react";

export default function ArticlesPage(){
    
    const allArticles = useLoaderData();
    
    return(
        <div className={classes.articles_panel}>
         
            <Suspense fallback={<div> Loading...</div>}>
                <ArticlesShow 
                    articles={allArticles}
                    heading={'All Articles'}
                />
            </Suspense>
            <SideNavBar className={classes.side_nav}>
                <ImageNavLink 
                    to='/user/myarticles' 
                    src={articlesImg} 
                    alt="all users logo"
                    imageLabel={'My Articles'}
                    imgStyle={classes.image_style}
                />
                <ImageNavLink 
                    to='/user/newarticle' 
                    src={addArtImg} 
                    alt="all users logo"
                    imageLabel={'New Article'}
                    imgStyle={classes.image_style}
                />
            </SideNavBar>
        </div>
    )
}

export async function loader(){
    const rawArticles = await fetchData({url:'https://reactudemydb-default-rtdb.firebaseio.com/articles.json'})

    if (rawArticles) {
        const articlesWithKeys = Object.entries(rawArticles)
        const articles = Object.values(rawArticles)
        
        return articlesWithKeys;
    }else{
        return null
    }
   
}