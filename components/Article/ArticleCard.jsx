import React from 'react'

const ArticleCard = ({post}) => {
  return (
    <div>
        {post.tile}
        {post.excerpt}
    </div>
  )
}

export default ArticleCard