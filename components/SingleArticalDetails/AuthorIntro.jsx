import React from 'react'
import Image from "next/image"
export default function AuthorIntro({author}) {
    return (
        <article className="p-6 bg-white sm:p-8 rounded-xl ring ring-emerald-50 my-10">
            <div className="flex flex-col md:flex-row">
                <div
                    className=""
                 
                >
                    <div className="relative h-14 w-14 left-2">
                    <Image src={author.photo.url} layout="fill"  className=" object-cover  rounded-full outline outline-1 outline-zinc-200"/>
                    </div>
                </div>

                <div className="sm:ml-8">
                    

                    <h2 className=" text-xl font-medium sm:text-3xl">
                    {author.name}
                    </h2>
                    <span
                        className="text-slate-500"
                    >
                        Author
                    </span>

                    <p className="mt-1 text-sm text-gray-700">
                       {author.bio}
                    </p>

               
                </div>
            </div>
        </article>
    )
}
