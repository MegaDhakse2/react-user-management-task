import classes from './ArticleView.module.css';
import articleDefaultImg from '../../assets/images/articles/genelections.png'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteData } from '../../util/http_requests';
import {useNavigate} from 'react-router-dom'
import { ReactUdemyDBstorage } from '../../firebase/firebaseConfig';
import { deleteFileByDownloadURL } from '../../firebase/firebaseUtil';

export default function ArticleView({articleId, article, artStateImg, existingArtImg, isArtPreview, isImageURLEmpty}){
    const currentUser = useSelector(state=> state.user.currentUser);
    const navigate = useNavigate();
     
    async function onDelete(){
        const isProceed = window.confirm(`Are you sure to delete The ${article.title} Article?`);
        if (isProceed) {
            await deleteData({url: `https://reactudemydb-default-rtdb.firebaseio.com/articles/${articleId}.json`})
            navigate('/user/articles');

            // Deleting actual file in FireBase
            await deleteFileByDownloadURL({storage:ReactUdemyDBstorage, downloadURL: article.imageURL});
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
                        artStateImg && artStateImg || isImageURLEmpty && articleDefaultImg //For Preview Purpose
                            ||
                        existingArtImg              //For Preview Purpose
                            || 
                        article.imageURL            //For Articles Show Purpose
                            || 
                        articleDefaultImg           //If no images were given by user, this will be considered.
                    } 
                className={classes.article_img}
            />

            <p className={classes.article_desc}>{article.description}</p>
            <small><i>By {article.author}..</i></small>
            {(currentUser && !isArtPreview && (article.author === currentUser.first_name || currentUser.role === 'superAdmin')) &&
                <div className={classes.action_butns}>
                    <Link to={`${articleId}/edit`}>Edit</Link>
                    <button onClick={onDelete}>Delete</button>
                </div>
            }
        </div>
    )
}