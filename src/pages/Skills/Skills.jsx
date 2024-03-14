import React from 'react'

export const Skills = () => {
  return (
    <div className='mt-[100px] flex flex-col justify-center items-center'>
        <h1 className='text-4xl text-light-blue'>Minhas Habilidades</h1>
        <section className='flex flex-col justify-center items-center w-full'>
         <h2 className='text-[26px] text-font-blue p-5'>Soft Skills</h2>
         <ul className='flex justify-evenly items-center gap-10 bg-m-dark-blue w-full text-blue-50'>
            <li className='py-8 px-3 font-bold'>Trabalho em Equipe</li>
            <li className='py-8 px-3 font-bold'>Desenvolvimento Ágil</li>
            <li className='py-8 px-3 font-bold'>Facilidade de Aprendizado</li>
            <li className='py-8 px-3 font-bold'>Iniciativa</li>
            <li className='py-8 px-3 font-bold'>Resolução de problemas</li>
            <li className='py-8 px-3 font-bold'>Adaptabilidade</li>
         </ul>

        </section>
        <section className='flex flex-col justify-center items-center w-full'>
            <h2  className='text-[26px] text-font-blue p-5'>Hard Skills</h2>
            <ul className='grid grid-cols-3 gap-2 bg-m-dark-blue w-full text-blue-50 p-10'>
            <li className='flex justify-center items-center gap-1 py-8 px-3 bg-grid-blue rounded-ss-2xl'><i className='bx bxl-html5 bx-lg'></i>HTML5</li>
            <li className='flex justify-center items-center gap-1 py-8 px-3 bg-grid-blue'><i className='bx bxl-css3 bx-lg'></i>CSS3</li>
            <li className='flex justify-center items-center gap-1 py-8 px-3 bg-grid-blue rounded-se-2xl'><i className='bx bxl-javascript bx-lg'></i>JavaScript</li>
            <li className='flex justify-center items-center gap-1 py-8 px-3 bg-grid-blue rounded-es-2xl'><i className='bx bxl-nodejs bx-lg' ></i>NodeJS</li>
            <li className='flex justify-center items-center gap-1 py-8 px-3 bg-grid-blue'><i className='bx bxl-react bx-lg'></i>Rect</li>
            <li className='flex justify-center items-center gap-1 py-8 px-3 bg-grid-blue rounded-ee-2xl'><i className='bx bxl-tailwind-css bx-lg'></i>TailwindCSS</li>
         </ul>

        </section>
       
    </div>
  )
}
