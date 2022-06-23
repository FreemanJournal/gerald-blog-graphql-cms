import moment from 'moment';
import { BsCalendar2, BsChatRightText, BsFolder, BsHeart } from 'react-icons/bs';
import Comments from '../Comment/Comments';
import Image from "next/image"
import AuthorIntro from './AuthorIntro';

export default function SingleArticleDetails({ article }) {
    const { content, featuredImage, author, createdAt, categories, title,slug,comments } = article || {}

    // const [comments, setComments] = useState([]);

    // useEffect(() => {
    //     getComments(slug)
    //         .then(res => setComments(res))
    // }, [])

    return (
        <div className=''>
            <div className="intro grid grid-cols-10 mt-10">
                <div className="blogCard mb-10 pb-5 col-span-12">
                    <div className="flex  gap-4 flex-col  ">
                        <div className="w-full h-96 relative   " >
                            <Image
                                layout='fill'
                                className="object-fit outline outline-1 outline-zinc-200 "
                                src={featuredImage.url}
                                alt=""
                                style={{ outlineOffset: '-5px' }}
                            />
                        </div>
                        <div className="w-full">

                            <div className="my-3 flex gap-4">
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
                    {/* <div className="flex gap-1 mt-5">
                        {tags?.map((tag, index) => (
                            <p key={index}
                                className="px-3 rounded-full flex items-center text-slate-400 border border-slate-300  text-sm  cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                {tag}
                            </p>
                        ))}
                    </div> */}
                    <div className="para-section mt-5">
                        <div className=" select-text mb-10">
                            <h2 className='text-3xl font-bold text-slate-800 my-5'>{title}</h2>
                            {/* <p className='text-slate-600'>{description}</p> */}
                            <div className="text-slate-600  mt-2" dangerouslySetInnerHTML={{ __html: content.html }}></div>


                        </div>
                        <AuthorIntro author={author}/>
                        <Comments slug={slug}/>

                    </div>

                </div>

            </div>
        </div>
    )
}
