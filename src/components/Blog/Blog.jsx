import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark }) => {
  const {
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    title,
    hashtags,
  } = blog;

  return (
    <div>
      <img src={cover} />

      <div className="flex justify-between items-center py-9">
        <div className="flex items-center">
          <img className="w-16" src={author_img} alt="" />
          <div className="ml-6">
            <h2 className="font-bold text-black text-2xl">{author}</h2>
            <span className="text-base text-[#11111199] font-semibold">
              {posted_date} (4 Days ago)
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-[#11111199] font-medium text-xl">
            {reading_time} min read
          </p>
          <button onClick={()=>{handleAddToBookmark(blog)}}>
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h1 className="font-bold text-black text-4xl leading-tight">{title}</h1>
      <div className="mt-4 font-medium text-[#11111199] text-xl">
        {hashtags.map((hash, idx) => (
          <span key={idx} className="ml-2">
            <a>#{hash}</a>
          </span>
        ))}
      </div>

      <p className="py-6 border-b-2">
        <a className="text-[#6047EC] font-semibold text-xl underline" href="">
          Mark as read
        </a>
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func
};

export default Blog;
