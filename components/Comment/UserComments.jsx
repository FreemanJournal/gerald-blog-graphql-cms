import { useEffect, useState } from 'react';
import { getComments } from '../../services';
import SingleComment from './SingleComment';
export default function UserComments({ slug }) {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments(slug)
            .then(res => setComments(res))
    }, [])


    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center  flex-col">
                <h3 className='text-2xl font-semibold'>
                    Comments ({comments.length || 0})
                </h3>
                <div className="pb-2">
                    <span className="inline-block w-24 h-[.1rem] rounded-full bg-emerald-400"></span>
                    <span className="inline-block w-3 h-[.1rem] ml-1 rounded-full bg-emerald-400"></span>
                    <span className="inline-block w-1 h-[.1rem] ml-1 rounded-full bg-emerald-400"></span>
                </div>

            </div>
            {
                comments?.map((comment, index) => <SingleComment comment={comment} key={index} />)
            }
        </div>
    )
}
