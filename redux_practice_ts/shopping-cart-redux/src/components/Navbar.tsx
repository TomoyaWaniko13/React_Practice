import { CiShoppingCart } from 'react-icons/ci';
import { useSelector } from 'react-redux';

const Navbar = () => {
  // selector = 'selecting' data from the Redux store.
  const { numberOfItemsAddedToCart } = useSelector((store) => store.cart);
  return (
    <nav>
      <div className={'bg-black w-full text-white h-32 flex items-center justify-around'}>
        <h3 className={'text-4xl'}>Redux Shopping</h3>
        <div className={'relative inline-block'}>
          <CiShoppingCart size={40} />
          <p className={'absolute -top-2 left-8 m-0 bg-white text-black rounded-full text-lg px-2 '}>
            {numberOfItemsAddedToCart}
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
