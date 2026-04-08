import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right-content' className='h-full rounded-4xl overflow-x-auto w-2/3 p-6 flex flex-nowrap gap-10'>
          {props.users.map(user => (
            <RightCard key={user.id} img={user.img} tag={user.tag} id={user.id} intro={user.intro} />
          ))}
    </div>
  )
}

export default RightContent