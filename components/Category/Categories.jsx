import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getCategories } from '../../services'

const Categories = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, [])
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8 pb-12'>
     
      <div className="flex items-center  flex-col">
        <h3 className='text-2xl font-semibold'>
        Categories
        </h3>
        <div className="pb-2">
          <span className="inline-block w-24 h-[.1rem] rounded-full bg-emerald-400"></span>
          <span className="inline-block w-3 h-[.1rem] ml-1 rounded-full bg-emerald-400"></span>
          <span className="inline-block w-1 h-[.1rem] ml-1 rounded-full bg-emerald-400"></span>
        </div>

      </div>
      {
        categories?.map((category,index)=>(
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <span className='cursor-pointer block pb-3 mb-3'>
              {category.name}
            </span>
          </Link>
        ))
      }
    </div>
  )
}

export default Categories;