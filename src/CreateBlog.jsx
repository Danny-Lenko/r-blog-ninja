import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
   const [titleValue, setTitleValue] = useState('')
   const [bodyValue, setBodyValue] = useState('')
   const [authorValue, setAuthorValue] = useState('')
   const navigate = useNavigate()

   function handleTitleInput(e) {
      setTitleValue(e.target.value)
   }

   function handleBodyInput(e) {
      setBodyValue(e.target.value)
   }

   function handleAuthorValue(e) {
      setAuthorValue(e.target.value)
   }

   function handleSubmit(e) {
      e.preventDefault()
      const data = {
         "title": titleValue,
         "body": bodyValue,
         "author": authorValue
      }

      fetch("http://localhost:8000/blogs", {
         method: "POST",
         headers: {'Content-Type': 'application/json'}, 
         body: JSON.stringify(data)
       }).then(navigate('/'))

   }

   return (
      <div className="content">
         <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
               <label htmlFor="title">Blog Title</label>
               <input 
                  type="text" 
                  id="title"
                  value={titleValue} 
                  onChange={handleTitleInput} 
               />

               <label htmlFor="body">Blog Body</label>
               <textarea 
                  id="body"
                  value={bodyValue}
                  onChange={handleBodyInput}
               />

               <label htmlFor="author">Blog Author</label>
               <select 
                  id="author"
                  value={authorValue}
                  onChange={handleAuthorValue}
               >
                  <option value="mario">Mario</option>
                  <option value="luigi">Luigi</option>
               </select>

               <button type="submit">Add Blog</button>
            </form>
         </div>
      </div>
   )
}
   
export default CreateBlog;