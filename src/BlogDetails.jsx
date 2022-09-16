import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
   const { id } = useParams()
   const { data, isPending, error } = useFetch('http://localhost:8000/blogs')
   console.log(data)
   const actualBlog = data && data.find(item => item.id === +id)

   return (
      <div className="content">
         {
            actualBlog && 
               <div className="blog-details">
                  <h2>{actualBlog.title}</h2>
                  <div>{actualBlog.author}</div>
                  <div>{actualBlog.body}</div>
                  <button>delete</button>
               </div>
         }
      </div>
   )
}
 
export default BlogDetails;