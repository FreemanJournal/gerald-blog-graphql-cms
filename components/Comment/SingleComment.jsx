import React from 'react'

export default function SingleComment({ comment }) {
    return (
        <div className="border border-gray-300  rounded-md ">
            <div className=" flex flex-col gap-5">
                <div>
                    <label htmlFor="blog" className="sr-only">
                        Comment
                    </label>
                    <p
                        id="blog"


                        className="appearance-none rounded-md relative block w-full px-3 py-3 border-0 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                    >{comment.comment}</p>
                </div>

            </div>
            <div className='py-2 px-2 flex items-center justify-between bg-zinc-100'>
                {/* <UserIntro /> */}
                {/* <BsFillTrashFill className='hover:text-red-600 text-slate-500'/> */}
                {comment.name}

            </div>
        </div>
    )
}
