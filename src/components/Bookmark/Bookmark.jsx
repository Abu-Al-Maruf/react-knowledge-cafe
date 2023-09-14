import PropTypes from "prop-types";

const Bookmark = ({book}) => {
    return (
        <div>
            <h2>{book.title}</h2>
        </div>
    );
};

Bookmark.propTypes = {
    book: PropTypes.object.isRequired
  };

export default Bookmark;