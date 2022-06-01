import React from 'react'
import Icon from './Icon'
import Intro from './Intro'
import Links from './Links'

function Card () {
  return (
    <div>
      <div class="flex justify-center">
  <div class="block p-6 rounded-lg shadow-lg bg-blue max-w-xl">
      
    <Icon />
    <h1 className='font-semibold'>Christopher Thomas</h1>
    <Intro />
    <Links />
    
  </div>
</div>
    </div>
    

    
  )
}

export default Card
