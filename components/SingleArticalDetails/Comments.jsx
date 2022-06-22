import React from 'react';
import NewComments from './NewComments';
import UserComments from './UserComments';
export default function Comments({slug}) {


  return (
    <div className='mx-auto '>
      <NewComments slug={slug}/>
      <UserComments />
    </div >
  )
}
