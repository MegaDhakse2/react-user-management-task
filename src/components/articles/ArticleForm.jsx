import React, { useEffect, useState } from "react";
import Input from "../UI/Input";
import classes from '../UserForm.module.css';
import imageUploadIcon from '../../assets/images/image_upload_icon.png'
import editUploadedIcon from '../../assets/images/edit_uploaded_icon.png'


export default function ArticleForm({handleSubmit, handleReset, handleImageChange, artStateImg, existingArticle}){
    debugger
  
    return(
        <form onSubmit={handleSubmit} onReset={handleReset} className={classes.form}>
            <Input 
                type='text'
                name='title'
                label='Title :'
                required
                defaultValue={existingArticle ? existingArticle.title : ''}
                maxLength={20}
                // minLength={5}
            />

            <Input 
                type='text'
                name='subject'
                label='Subject :'
                required
                defaultValue={existingArticle? existingArticle.subject : ''}
                maxLength={50}
                // minLength={10}
            />
            {/* <Input 
                style={{display:'none'}}
                type='file'
                name='imageFile'
                label='Image :'
                accept="image/*"
                onChange={handleImageChange}
            />  */}
            <label class="custom-file-upload" >
                <input 
                    style={{display:'none'}}
                    type='file'
                    name='imageFile'
                    // label='Image :'
                    accept="image/*"
                    onChange={handleImageChange}
                />  
                {existingArticle ? "Edit Image:" : 'Choose Image:'}
                    <br/>
                <img src={existingArticle ? editUploadedIcon : imageUploadIcon} style={{cursor:'pointer'}}/>   
            </label>
            {artStateImg && (
                <div>
                    <p style={{margin:'0'}}><small>New Image Preview:</small></p>
                    <img src={artStateImg} alt="Uploaded" style={{ maxWidth: '75%', maxHeight: '150px' }} />
                </div>
            )}
            {existingArticle && (
                <div>
                    <p style={{margin:'0'}}><small>Existing Image Preview:</small></p>
                    <img src={existingArticle && existingArticle.imageURL} alt="Uploaded" style={{ maxWidth: '75%', maxHeight: '150px' }} />
                </div>
            )}
            
            <Input 
                type='textarea'
                name='description'
                label='Description :'
                required
                defaultValue={existingArticle ? existingArticle.description : ''}
                // minLength={20}
            />

            <div className={classes.actions}>
                <button type="reset">Clear</button>
                <button type="submit">Save And Preview</button>
            </div>
        </form>
    )
}