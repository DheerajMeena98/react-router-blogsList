import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="blogs-list-container">
      {blogsList.map(eachPost => (
        <BlogItem key={eachPost.id} eachPost={eachPost} />
      ))}
    </ul>
  )
}

export default BlogList
