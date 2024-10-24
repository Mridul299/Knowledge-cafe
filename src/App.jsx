import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks,setBookmarks] = useState([]);
  const [readingtime,setReadingtime]=useState(0);


  const handleBookMarks = (blog) =>{
    const newBookmark = [...bookmarks,blog];
    setBookmarks(newBookmark);
  };

  const handlemarkread = (time)=>{
    const newreadingtime = readingtime + time;
    setReadingtime(newreadingtime);
  }



  return (
    <>
      
     <Header></Header>
     <div className='md:flex max-w-6xl mx-auto'>
     <Blogs handleBookMarks={handleBookMarks} handlemarkread={handlemarkread}></Blogs>
     <BookMarks bookmarks={bookmarks} readingtime={readingtime}></BookMarks>
     </div>
     
    </>
  )
}

export default App
