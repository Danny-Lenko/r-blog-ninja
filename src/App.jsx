import { Routes, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import CreateBlog from './CreateBlog'
import BlogDetails from './BlogDetails'
import NotFound from './NotFound'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
