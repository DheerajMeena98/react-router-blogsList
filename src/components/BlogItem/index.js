import './index.css'

const BlogItem = props => {
  const {eachPost} = props
  const {title, description, publishedDate} = eachPost
  return (
    <li className="each-blog-post">
      <div className="title-published-date-container">
        <h1 className="blog-title"> {title}</h1>
        <p className="published-date"> {publishedDate}</p>
      </div>
      <p className="blog-description"> {description}</p>
    </li>
  )
}

export default BlogItem
