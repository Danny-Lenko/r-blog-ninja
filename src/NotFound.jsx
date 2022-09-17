import { Link } from "react-router-dom"

const NotFound = () => {
   return ( 
      <div className="content">
         <h2>PAGE NOT FOUND</h2>
         <Link to="/">Back To the Home Page</Link>
      </div>
   )
}
 
export default NotFound