import React, { useRef, useState } from "react";
import Input from "../UI/Input";
import classes from '../UserForm.module.css';
import imageUploadIcon from '../../assets/images/image_upload_icon.png'
import editUploadedIcon from '../../assets/images/edit_uploaded_icon.png'
import imageRemoveIcon from '../../assets/images/remove_image_icon.png'
import {useNavigate} from 'react-router-dom';

export default function ArticleForm({
                            handleSubmit, 
                            handleImageChange, 
                            artStateImg, 
                            setArtStateImg, 
                            existingArticle,
                            setIsImageURLEmpty,
                        }){
    
    const navigate = useNavigate();
    const imageFileRef = useRef();
    const [dupExistingArticle, setDupExistingArticle] = useState({...existingArticle});

    function onRemoveImgFile(){
        // debugger
        setArtStateImg(null);
        imageFileRef.current.value = '';
        if (existingArticle && dupExistingArticle && dupExistingArticle.imageURL) {
            setDupExistingArticle((preVal)=>{
                const newVal = {...preVal, 
                                imageURL: ''
                               }
                return newVal;
            })
            setIsImageURLEmpty(true);
        }
    }

    function handleReset(){
        setArtStateImg(null);
        setIsImageURLEmpty(false);
        if (existingArticle) {
            setDupExistingArticle({...existingArticle});
        }
    }

    return(
        <form onSubmit={handleSubmit} onReset={handleReset} className={classes.article_form}>
            <span onClick={()=>navigate(-1)} style={{cursor:'pointer', fontSize:'20px'}}>&#9664;</span>
            <Input 
                type='text'
                name='title'
                label='Title :'
                required
                defaultValue={dupExistingArticle ? dupExistingArticle.title : ''}
                maxLength={20}
                // minLength={5}
            />

            <Input 
                type='text'
                name='subject'
                label='Subject :'
                required
                defaultValue={dupExistingArticle? dupExistingArticle.subject : ''}
                maxLength={50}
                // minLength={10}
            />

            {/* /////// For Image Upload //////// */}
            
            {/* <Input 
                style={{display:'none'}}
                type='file'
                name='imageFile'
                label='Image :'
                accept="image/*"
                onChange={handleImageChange}
            />  */}
            <label style={{display:'inline-block', marginTop:'inherit', marginTop: '2%'}} onClick={()=>setIsImageURLEmpty(true)}>
                <input 
                    style={{display:'none'}}
                    type='file'
                    name='imageFile'
                    ref={imageFileRef}
                    // label='Image :'
                    accept="image/*"
                    onChange={handleImageChange}
                />  
                {existingArticle ? "Edit Image:" : 'Choose Image:'}
                <br/>
                <img 
                    src={existingArticle ? editUploadedIcon : imageUploadIcon} 
                    style={{cursor:'pointer'}}
                    width='48px'
                    height='48px'
                />
            </label>
            {(artStateImg || (dupExistingArticle && dupExistingArticle.imageURL)) &&
                <img 
                    src={imageRemoveIcon} 
                    style={{cursor:'pointer'}}
                    width='30px'
                    height='30px'
                    onClick={onRemoveImgFile}
                /> }

            <div>
                 
                {artStateImg && (
                    <div>
                        <p style={{margin:'0'}}>
                            <small>New Image Preview:</small>
                        </p>
                        <img 
                            src={artStateImg} 
                            alt="Uploaded" 
                            style={{ maxWidth: '75%', maxHeight: '150px' }}
                        />
                    </div>
                )}
                
                {dupExistingArticle && dupExistingArticle.imageURL && (
                    <div>
                        <p style={{margin:'0'}}><small>Existing Image Preview:</small></p>
                        <img 
                            src={dupExistingArticle.imageURL} 
                            alt="Uploaded" 
                            style={{ maxWidth: '75%', maxHeight: '150px' }} 
                        />
                    </div>
                )}
            </div>

            
            <Input 
                type='textarea'
                name='description'
                label='Description :'
                required
                defaultValue={dupExistingArticle ? dupExistingArticle.description : ''}
                style={{height: '100px'}}
                // minLength={20}
            />

            <div className={classes.actions}>
                <button type="reset">Clear</button>
                <button type="submit">Save And Preview</button>
            </div>
        </form>
    )
}