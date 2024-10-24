import PropTypes from "prop-types";
import Bookmark from "../../Bookmark/Bookmark";

const BookMarks = ({bookmarks,readingtime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 pt-4">
            <div>
                <h3 className="text-2xl text-center text-purple-700 font-bold mb-3"> Reading Time: {readingtime}</h3>
            </div>
            <h2 className="text-xl text-center ">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
BookMarks.propTypes ={
    bookmarks: PropTypes.array,
    readingtime: PropTypes.number
}
export default BookMarks;