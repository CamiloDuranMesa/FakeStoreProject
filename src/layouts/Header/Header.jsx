import { ItemTitle } from '../../components/ItemTitle/ItemTitle';


export const Header = () => {

  return (
    <header className="sticky top-0 left-0 z-50 bg-fuchsia-300 px-6 py-5 shadow-xl w-full">
      <div className="flex items-center flex-col gap-5">

        <ItemTitle content="Fake Store 🛒" styles="text-2xl sm:text-4xl text-white font-bold" />

      </div>
    </header>
  );
};