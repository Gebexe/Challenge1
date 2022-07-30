import React from 'react';

export default function CreatePost( { postTitle, postContent, savePost } ) {
    
    return (
        <div>
        <h2>Crear Historia</h2>
        <form onSubmit={savePost}>
            <fieldset>
                <label>
                    <input  type="text" 
                            placeholder="Escriba un título"
                            required
                            onChange={postTitle}
                    />
                 </label>   
                    <br/>
                 <label>   
                    <textarea  type="text" 
                                placeholder="Escriba una historia"
                                required
                                onChange={postContent}
                    />
                    <br/>
                    <button type="submit">Guardar</button>
                </label>
            </fieldset>
        </form>
        </div>
    )
}