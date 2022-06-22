import moment from 'moment';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { getRecentPost, getSimilarPost } from '../../services';

const ArticleWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState();
  useEffect(() => {
    if (slug) {
      getSimilarPost(categories, slug)
        .then((result) => setRelatedPosts(result))
    } else {
      getRecentPost()
        .then((result) => setRelatedPosts(result))
    }
  }, [slug])

  // console.log('relatedPosts',relatedPosts);

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <div className="flex items-center  flex-col">
        <h3 className='text-2xl font-semibold'>
          {slug ? 'Related Posts' : 'Recent Posts'}
        </h3>
        <div className="pb-2">
          <span className="inline-block w-24 h-[.1rem] rounded-full bg-emerald-400"></span>
          <span className="inline-block w-3 h-[.1rem] ml-1 rounded-full bg-emerald-400"></span>
          <span className="inline-block w-1 h-[.1rem] ml-1 rounded-full bg-emerald-400"></span>
        </div>

      </div>

      {
        relatedPosts?.map((post, index) => (
          <div className="flex items-center w-full mb-4" key={index}>
            <div className="w-16 flex-none">
              <img src={post.featuredImage.url} alt={post.title} height="60px" width="60px" className='align-middle rounded-md' />
            </div>
            <div className="flex-grow ml-4">
              <p className='text-grey-500 text-xs'>
                {moment(post.createdAt).format('MMMM DD, YYYY')}
              </p>
              <Link href={`/post/${post.slug}`} className="" key={post.title}><span className='text-slate-500  hover:text-slate-900  cursor-pointer  text-sm'>{post.title}</span></Link>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ArticleWidget;