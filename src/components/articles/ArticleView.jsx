import classes from './ArticleView.module.css';
import articleDefaultImg from '../../assets/images/articles/forest_physician.jpg'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteData } from '../../util/http_requests';
import {useNavigate} from 'react-router-dom'

export default function ArticleView({articleId, article, artStateImg, existingArtImg, isArtPreview}){
    const currentUser = useSelector(state=> state.user.currentUser);
    const navigate = useNavigate();
    debugger
    async function onDelete(){
        debugger
        const isProceed = window.confirm("Are you sure?");
        if (isProceed) {
            await deleteData({url: `https://reactudemydb-default-rtdb.firebaseio.com/articles/${articleId}.json`})
            navigate('/user/articles');
        }
        
    }

    return(
        <div className={classes.view_block}>
            <h1>{article.title}</h1>
            <p className={classes.subject}>
                <small>{article.subject}</small>
            </p>
            <img 
                src={
                        artStateImg && artStateImg || existingArtImg //For Preview Purpose
                            || 
                        article.imageURL            //For Articles Show Purpose
                            || 
                        articleDefaultImg           //If no images were given by user, this will be considered.
                    } 
                className={classes.article_img}
            />

            <p className={classes.article_desc}>{article.description}</p>
            {( !isArtPreview && article.author === currentUser.first_name) &&
                <div className={classes.action_butns}>
                    <Link to={`${articleId}/edit`}>Edit</Link>
                    <button onClick={onDelete}>Delete</button>
                </div>
            }
        </div>
    )
}