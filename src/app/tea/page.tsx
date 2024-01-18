import { Button } from '@/components/ui/button'
import React from 'react'

const TeaPage = () => {
  return (
    <main className='h-screen flex justify-center items-center flex-col gap-2'>
<div>TeaPage</div>
<button className='px-6 py-2 bg-red-400 rounded my-3 hover:bg-red-700 hover:text-white'>Tea button</button>
<Button variant="outline">Shadcn</Button>
    </main>
    
  )
}

export default TeaPage