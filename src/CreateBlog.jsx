const CreateBlog = () => {
   return (
      <div className="content">
         <div className="create">
            <h2>Add a New Blog</h2>
            <form>
               <label htmlFor="title">Blog Title</label>
               <input type="text" id="title" />

               <label htmlFor="body">Blog Body</label>
               <textarea id="body" />

               <label htmlFor="author">Blog Author</label>
               <select id="author">
                  <option value="mario">Mario</option>
                  <option value="luigi">Luigi</option>
               </select>

               <button type="submit">Add Blog</button>
            </form>
         </div>
      </div>
   );
}
   
export default CreateBlog;