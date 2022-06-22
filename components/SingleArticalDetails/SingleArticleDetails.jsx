import { BsHeart } from 'react-icons/bs';
import Comments from './Comments';

export default function SingleArticleDetails() {
  
    // const { blogId } = useParams();
  
    // if (!singleArticle) {
    //     return <Loader />
    // }


    // const { _id, img, blogWriter, date, title, description, tags, commentCount, content, likeCount } = singleArticle || {}

    return (
        <div className=''>
            <div className="intro grid grid-cols-10 mt-10">
                <div className="blogCard mb-10 pb-5 col-span-12">
                    <div className="intro flex justify-between">
                        {/* <UserIntro img={img} blogWriter={blogWriter} date={date} /> */}

                        <div className="">
                            <button type="button" className="py-1 px-6  bg-transparent text-emerald-400 font-medium text-sm leading-tight uppercase rounded border border-emerald-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex items-center justify-center">
                                <BsHeart />
                                <span className="inline-block text-base py-1 px-1.5 leading-none text-center whitespace-nowrap align-baseline font-bold text-emerald-400 rounded ml-2">0</span>
                            </button>
                           
                        </div>
                    </div>
                    {/* <div className="flex gap-1 mt-5">
                        {tags?.map((tag, index) => (
                            <p key={index}
                                className="px-3 rounded-full flex items-center text-slate-400 border border-slate-300  text-sm  cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                {tag}
                            </p>
                        ))}
                    </div> */}
                    <div className="para-section mt-5">
                        {/* <div className=" select-text mb-10">
                            <h2 className='text-3xl font-bold text-slate-800 my-5'>{title}</h2>
                            <p className='text-slate-600'>{description}</p>
                            <div className="text-slate-600 truncate mt-2" dangerouslySetInnerHTML={{ __html: content }}></div>


                        </div> */}
                        <Comments />

                    </div>

                </div>
                {/* <div className="place-self-start justify-self-center col-span-3 flex gap-3 items-center">
                    <UserIntro img={img} blogWriter={blogWriter} date={date} />

                    <div className="">
                        <button type="button" className="py-1 px-6  bg-transparent text-emerald-400 font-medium text-sm leading-tight uppercase rounded border border-emerald-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex items-center justify-center">
                            Follow
                        </button>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
