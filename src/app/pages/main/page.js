import FrontCard from '@/app/components/main/FrontCard'
import FrontCardLink from '@/app/components/main/FrontCardLink'
import FrontSection from '@/app/components/main/FrontSection'
import Feature from '@/app/components/ui/feature'
import React from 'react'

export default function Main() {

  return (
    <main>
      <FrontSection />
      <div className='flex flex-col sm:flex-row pt-20'>
        <FrontCard />
        <hr />
        <FrontCardLink />
        <hr />
      </div>
      <Feature />
    </main>
  )
}