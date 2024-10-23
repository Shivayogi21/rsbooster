import React from 'react'

export default function Careers1() {
  return (
    <div className='mt-4 text-white font-serif text-justify'>
      <h1 className='m-2 font-bold text-6xl md:text-5xl sm:text-2xl text-center'>We are hiring</h1>
      <div className="p-4 md:p-4 lg:p-6">
          <img src="/assets/img/hiring.jpg" alt="hiring-img" className="p-4 md:p-4 lg:p-8 animate-pop-up"/>
          {/*pic credit vecteezy */}
      </div>
      <div>
      <h4 className=' text-4xl p-6 m-2'>Java Developer Intern</h4>
      <p className='m-2 '>Assist in the design, development, and implementation of software applications using Java.
         Collaborate with our development team to understand and contribute to our code base.
         Participate in code reviews to maintain code quality and share knowledge</p>
        <h3 className='text-3xl font-bold m-4'>Qualification</h3>
      <ul className='text-m  m-2 mb-12'>
        <li>Strong communication and teamwork skills.</li>
        <li>Excellent problem-solving skills and attention to detail.</li>
        <li>Familiarity with databases, SQL, and data structures.</li>
        <li>Strong understanding of Java and object-oriented programming concepts.</li>
        <li>Currently pursuing or recently completed a degree in Computer Science or a related field.</li>
      </ul>
      </div>
      <div>
      <h1 className='m-2 text-3xl font-bold text-center'>How To Apply</h1>
      <p className=' m-2'>We RSB participates in on-campus recruiting at many of the top undergraduate and MBA programs around the india. We also consider off-cycle applicants.</p>
      <p className=' m-2 text-d-none'>To apply, please send a resume, cover letter and unofficial transcript to <a href="@Email">careers@rsbconsulting.com.</a></p>
      </div>
    </div>
  )
}
