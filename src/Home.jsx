import useFetch from './useFetch'
import { Link, useParams } from 'react-router-dom'

const Home = () => {
   const { data, isPending, error } = useFetch('http://localhost:8000/blogs')

   return ( 
      <div className="content">
         {isPending && <h2>Loading...</h2>}
         {error && <h2>{error}</h2>}
         {data && data.map(blog => (
            <div className="blog-preview" key={blog.id}>
               <Link to={`/blog/${blog.id}`}>
                  <h2>{blog.title}</h2>
                  <p>Written by {blog.author}</p>
               </Link>
            </div>
         ))}
      </div>
    );
}
 
export default Home;