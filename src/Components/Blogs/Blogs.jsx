import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleBookMarks,handlemarkread}) => {
    const [blogs,setBlogs]=useState([]);

    useEffect(()=>{
        fetch('Blogs.json')
        .then(res=> res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h1>Blogs:{blogs.length}</h1>
            {
                blogs.map(blog=><Blog 
                    key={blog.id} 
                    blog={blog}
                    handleBookMarks={handleBookMarks}
                    handlemarkread={handlemarkread}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleBookMarks:PropTypes.func,
    handlemarkread:PropTypes.func
}
export default Blogs;