import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
  console.log(bookmarks);
  return (
    <div className="md:w-1/3">
      <h3>bookmarks {bookmarks.length}</h3>

      {bookmarks.map((book) => (
        <Bookmark key={bookmarks.id} book={book}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.object.isRequired,
};

export default Bookmarks;
