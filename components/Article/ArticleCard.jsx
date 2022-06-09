import Link from 'next/link';
import React, { useState } from 'react';
import { BsHeart } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import UserIntro from '../utilities/UserIntro';
// import ManageBlog from '../ManageBlog/ManageBlog';
const ArticleCard = ({ post }) => {
    const [manage, setManage] = useState(false);
    console.log('post', post);
    const { _id, author, title, excerpt, createdAt, likeCount,slug } = post.node || {}
    return (
        <div className="blogCard mb-10 pb-5 border-b-2 border-slate-300 mt-10">
            <div className="intro flex justify-between">
                <UserIntro img={author.photo.url} blogWriter={author.name} date={createdAt} />

                <div className="flex gap-2">
                    <button type="button" className="py-1 px-6  bg-transparent hover:bg-emerald-400 hover:text-white text-emerald-400 font-medium text-sm leading-tight uppercase rounded border border-emerald-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex items-center justify-center group">
                        <BsHeart />
                        <span className="inline-block text-base py-1 px-1.5 group-hover:text-white leading-none text-center whitespace-nowrap align-baseline font-bold text-emerald-400 rounded ml-2">{likeCount}</span>
                    </button>
                    <button type="button" className="py-1 px-6  bg-transparent hover:bg-pink-400 hover:text-white text-pink-400 font-medium text-sm leading-tight uppercase rounded border border-pink-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex items-center justify-center" onClick={() => setManage(prev => !prev)}>
                        <FiEdit />

                    </button>
                </div>
            </div>
            <Link href={`/article/${slug}`}>
                <div className="para-section mt-5 hover:cursor-pointer" onClick={() => navigate(`/single-blog/${_id}`)}>
                    <div className="hover:underline underline-offset-4 ">
                        <h2 className='text-3xl font-bold text-slate-600' >{title}</h2>
                        <p className='text-slate-400  mt-2'>{excerpt}</p>
                    </div>
                    <div className="flex justify-between mt-5">
                        <p className='text-slate-400 hover:text-slate-600'>Read more...</p>
                        {/* <div className="flex gap-1">
                {tags?.map((tag, index) => (
                    <p key={index}
                        className="px-3 rounded-full flex items-center text-slate-400 border border-slate-300  text-sm  cursor-pointer active:bg-gray-300 transition duration-300 ease">
                        {tag}
                    </p>
                ))}
            </div> */}
                    </div>
                </div>
            </Link>
            {/* {manage && <ManageBlog id={_id}/>} */}
        </div>
    )
}

export default ArticleCard;