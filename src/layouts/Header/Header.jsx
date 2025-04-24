import { Navbar } from '../Navbar/Navbar';
import { ItemTitle } from '../../components/ItemTitle/ItemTitle';
import {ItemNavbar} from  '../../components/ItemNavbar/ItemNavbar'

export const Header = () => {

  return (
    <header className="sticky top-0 left-0 z-50 bg-fuchsia-300 px-6 py-5 shadow-xl w-full">
      <div className="flex items-center flex-col gap-5">

        <ItemTitle content="Fake Store 🛒" styles="text-2xl sm:text-4xl text-white font-bold" />


        <Navbar>
          <ul className='flex align-center space-x-15'>
            <ItemNavbar route="/" content="HOME" styles="text-white text-lg" />

          </ul>
        </Navbar>
      </div>
    </header>
  );
};