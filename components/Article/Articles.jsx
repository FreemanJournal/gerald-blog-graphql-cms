import React from 'react'
import ArticleCard from './ArticleCard'

export default function Articles({posts}) {
  return (
    <>
        { posts.map((post, index) => <ArticleCard post={post} key={index} />)}
    </>
  )
}
