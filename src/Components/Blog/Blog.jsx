import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";


const Blog = ({blog,handleBookMarks,handlemarkread}) => {
    const {title,cover,author,author_img,reading_time,posted_date,hashtags}=blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='mb-8' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>

                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleBookMarks(blog)} className='ml-2 text-2xl text-red-500'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-3xl'>{title}</h2>
            <p>
                {
                    hashtags.map((has,idx)=><span className='ml-3' key={idx}><a href='#'>{has}</a></span>)
                }
            </p>
            <button className='text-purple-800 font-bold underline' onClick={()=>handlemarkread(reading_time)}>mark as read</button>
        </div>
    );
};

Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleBookMarks: PropTypes.func,
    handlemarkread:PropTypes.func
}

export default Blog;