import { useSelector } from 'react-redux';
import CartItem from './CartItem.tsx';

const CartContainer = () => {
  const { quantity, cartItems, total } = useSelector((store) => store.cart);

  return quantity < 1 ? (
    <section>
      <header>
        <h2>Shopping cart</h2>
        <h4>Your cart is empty.</h4>
      </header>
    </section>
  ) : (
    <section>
      <header>
        <h2 className={'text-3xl lg:text-4xl xl:text-5xl font-bold text-center p-4'}>Shopping cart</h2>
      </header>
      <div className={'grid grid-cols-10 gap-4 w-full'}>
        {cartItems.map((item) => {
          return (
            <div className={'col-start-2 col-span-8'} key={item.id}>
              <CartItem key={item.id} />
            </div>
          );
        })}
      </div>
      <footer>
        <hr className={'w-4/5 h-1 mx-auto my-4 bg-gray-500 border-0 rounded md:my-10'} />
        <div className={'grid grid-cols-10 w-full mt-2'}>
          <h4 className={'col-start-2 col-span-10 grid grid-cols-10 text-2xl'}>
            Total: <span className={'col-start-8 col-span-10'}>{total} JPY</span>
          </h4>
        </div>
        <div className={'flex justify-center items-center gap-4 w-full'}>
          <button
            className={
              'bg-white text-black md:text-lg xl:text-xl border border-black rounded-lg p-1 cursor-pointer  hover:bg-gray-200 '
            }
          >
            delete all items
          </button>
        </div>
      </footer>
    </section>
  );
};
export default CartContainer;
