import { CiShoppingCart } from 'react-icons/ci';
import { useSelector } from 'react-redux';

const Navbar = () => {
  // useSelector() allows us to access a store and store's state..
  const { quantity } = useSelector((store) => store.cart);

  return (
    <nav className={'bg-black text-white w-full flex justify-evenly items-center h-28'}>
      <div>
        <h3 className={'text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl text-emerald-200 font-serif'}>Redux shopping</h3>
      </div>
      <div className={'relative'}>
        <CiShoppingCart size={40} className={'cursor-pointer'} />
        <div className='absolute -top-3 -right-3 flex items-center justify-center w-6 h-6 bg-white rounded-full text-black'>
          {quantity}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
