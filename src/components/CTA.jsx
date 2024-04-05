import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
    <p className='cta-text'>Have an opportunity for me? <br className='sm:block hidden'/> 
        I'm just a message away!
    </p>
    <Link to='/contact' className='btn'>
        Send A Message
    </Link>
    </section>
  )
}

export default CTA
