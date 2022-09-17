import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
   const { id } = useParams()
   const { data, isPending, error } = useFetch('http://localhost:8000/blogs/' + id)
   const navigate = useNavigate()

   function handleDelete() {
      fetch(`http://localhost:8000/blogs/${id}`, {
         method: "DELETE",
         headers: {
            'Content-type': 'application/json'
         }
      }).then(navigate('/'))
   }
                    
   return (
      <div className="content">
         {isPending && <h2>Loading...</h2>}
         {error && <h2>${error}</h2>}
         { data && 
               <div className="blog-details">
                  <h2>{data.title}</h2>
                  <div>{data.author}</div>
                  <div>{data.body}</div>
                  <button onClick={handleDelete}>delete</button>
               </div> 
         }
      </div>
   )
}
 
export default BlogDetails;