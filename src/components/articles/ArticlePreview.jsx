import { forwardRef, useRef, useImperativeHandle } from "react";
import ArticleView from "./ArticleView";
import classes from './ArticlePreview.module.css';
import { createPortal } from "react-dom";

const ArticlePreview = forwardRef(function ArticlePreview({onPublish, article, existingArticle, artStateImg}, ref){
    const dialog = useRef();

    useImperativeHandle(ref, ()=>{
        return{
            open(){
                dialog.current.showModal();
            }
        };
    });

    async function publish(){
        debugger
        await onPublish(article);
        dialog.current.close();
    }

    return createPortal(
        <dialog ref={dialog} className={classes.preview_modal}>
            <h2>Article Preview</h2>
            <div className={classes.article_view_block}>
                <ArticleView 
                    article={article} 
                    artStateImg={artStateImg}
                    isArtPreview={true}
                    existingArtImg={existingArticle.imageURL}
                />
            </div>
            <div className={classes.action_butns}>
                <button onClick={()=>dialog.current.close()}>Cancel</button>
                <button onClick={publish}>Ok! Publish</button>
            </div>
        </dialog>,
        document.getElementById('modal')
    )
})

export default ArticlePreview;