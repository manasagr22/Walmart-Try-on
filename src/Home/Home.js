import React from 'react'
import Domain from './Domain/Domain'
import Main from './Main/Main'

export default function Home() {
  return (
    <div className='flex flex-column h-full'>
        <div className='w-full relative-m pl-6 pr-6 flex pt-2'>
            <Domain/>
            <Main/>
        </div>
    </div>
  )
}
