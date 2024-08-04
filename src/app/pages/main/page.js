import FrontCard from '@/app/components/main/FrontCard'
import FrontCardLink from '@/app/components/main/FrontCardLink'
import FrontSection from '@/app/components/main/FrontSection'
import React from 'react'
import Catalogo from '../catalogo/page'



const Main = () => {


  return (
    <main>
      <FrontSection></FrontSection>
      <div className='flex flex-col sm:flex-row pt-20'>
        <FrontCard></FrontCard>
        <FrontCardLink></FrontCardLink>
      </div>
    </main>
  )
}

export default Main




