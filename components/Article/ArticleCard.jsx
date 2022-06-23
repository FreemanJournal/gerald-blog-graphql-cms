import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { BsCalendar2, BsChatRightText, BsFolder } from 'react-icons/bs';
// import ManageBlog from '../ManageBlog/ManageBlog';
const ArticleCard = ({ post }) => {
    const [manage, setManage] = useState(false);
    const router = useRouter()
    const { _id, author,featuredImage, title, excerpt,categories, createdAt, likeCount, slug,comments } = post.node || {}

    return (
        <div className="blogCard mb-10 pb-5 border-b-2 border-slate-300 mt-10 bg-slate-100 p-10 rounded-md">
            {/* <div className="intro flex justify-between">
                <UserIntro img={author.photo.url} blogWriter={author.name} date={createdAt} />

                <div className="flex gap-2">
                 
                    <button type="button" className="py-1 px-6  bg-transparent hover:bg-emerald-400 hover:text-white text-emerald-400 font-medium text-sm leading-tight uppercase rounded border border-emerald-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex items-center justify-center group">
                        <BsHeart />
                        <span className="inline-block text-base py-1 px-1.5 group-hover:text-white leading-none text-center whitespace-nowrap align-baseline font-bold text-emerald-400 rounded ml-2">{likeCount || 0}</span>
                    </button>
                    <button type="button" className="py-1 px-6  bg-transparent hover:bg-pink-400 hover:text-white text-pink-400 font-medium text-sm leading-tight uppercase rounded border border-pink-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex items-center justify-center" onClick={() => setManage(prev => !prev)}>
                        <FiEdit />

                    </button>
                </div>
            </div> */}
            <Link href={`/article/${slug}`}>
                <div className="para-section mt-5 hover:cursor-pointer" >
                    <div className=" ">
                        <div className="flex  flex-col md:flex-row gap-4">
                            <div className="w-32 h-32 relative">
                                <Image
                                    layout='fill'
                                    className="object-cover w-full h-full rounded-full"
                                    src={featuredImage.url}
                                    alt=""
                                />
                            </div>
                            <div className="w-full md:w-3/4">
                                <h2 className={`text-3xl  font-bold text-slate-600 underline decoration-transparent duration-300 hover:decoration-emerald-400 `} >{title}</h2>
                                <div className="my-3 flex gap-4  text-xs md:text-base">
                                    <div className="date flex gap-1 items-center text-slate-400">
                                        <BsCalendar2 />
                                        <span>{moment(createdAt).format('MMMM Do YYYY')}</span>
                                    </div>
                                    <div className="date flex gap-1 items-center text-slate-400">
                                        <BsFolder />
                                        <span>{categories[0].name}</span>
                                    </div>
                                    <div className="date flex gap-1 items-center text-slate-400">
                                        <BsChatRightText />
                                        <span>{comments?.length || 0} Comments</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <p className='text-slate-600  mt-2 '>{excerpt}</p>
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