import minhaFoto from '../../assets/imgs/minha-foto.png';

export const Home = () => {
  return (
    <div className='grid grid-cols-2 mx-20'>
        <div className='flex flex-col text-blue-50'>
            <h2 className='text-7xl'>Olá, Sou</h2>
            <h1 className='text-8xl text-blue-300'>Eder Lima</h1>
            <div className='text-center my-6'> 
                <p className='text-4xl text-blue-600'>A Front-End</p>
                <p className='text-4xl text-blue-300' >Web Developer</p>
            </div>  
            
            <button className='bg-blue-600 p-5 text-lg rounded-3xl'>Entre em Contato</button>
            <a href="">Download cv</a>
        </div>
        <div className='flex w-full'>
            <img src={minhaFoto} alt="foto de perfil" />
        </div>
    </div>
  )
}
