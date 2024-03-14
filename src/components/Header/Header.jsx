import { Menu } from 'lucide-react';
import { Code2 } from 'lucide-react';


export function Header() {
  return (
    <header className="w-full text-blue-50 flex justify-between fixed">
        
        <div className="flex items-center ml-10 cursor-pointer">
          <Code2 size={60} strokeWidth={1.5} />
        </div>

        <nav className='flex'>
            <ul className="bg-blue-900 flex items-center mx-r-10 my-4 justify-between rounded-l-lg hidden">
              <li className='mx-2 hover:bg-blue-950 p-5'>Home</li>
              <li className='mx-2 hover:bg-blue-950 p-5' >Sobre</li>
              <li className='mx-2 hover:bg-blue-950 p-5'>Projetos</li>
              <li className='mx-2 hover:bg-blue-950 p-5'>Redes</li>
            </ul>

            <span className='flex justify-center items-center cursor-pointer'><Menu size={40} /></span> 
            <span className='m-10'></span>
        </nav>
        

    </header>
  )
}
