import minhaFoto from '../../assets/imgs/minha-foto.png';
import { ArrowDown } from 'lucide-react';

export const Home = () => {
  return (
    <div className='grid grid-cols-2 mx-20 mt-10'>
        <div className='flex flex-col text-font-blue justify-center items-center'>
            <h2 className='text-6xl pr-[180px]'>Olá, Sou</h2>
            <h1 className='text-8xl text-light-blue'>Eder Lima</h1>
            <div className='text-center my-10'> 
                <p className='text-4xl text-medium-blue'>A Front-End</p>
                <p className='text-4xl text-light-blue' >Web Developer</p>
            </div>  
            
            <button className='bg-red-700 p-5 text-lg rounded-3xl w-fit hover:bg-red-600 font-bold'>Entre em Contato</button>
            <a href="" className='underline text-center mt-2 text-light-blue'>Download cv</a>
        </div>
        <div className='flex w-full'>
            <img src={minhaFoto} alt="foto de perfil" />
        </div>
        <button className='animate-bounce rounded-full bg-blue-600 text-blue-50 p-2 w-fit absolute bottom-0 left-1/2'><ArrowDown /></button>
    </div>
  )
}
