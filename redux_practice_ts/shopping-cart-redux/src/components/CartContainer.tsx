import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem.tsx';
import { clearCart } from '../features/cart/CartSlice.ts';

const CartContainer = () => {
  const dispatch = useDispatch();
  const { quantity, cartItems, total } = useSelector((store) => store.cart);

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to delete all items in your cart?')) {
      dispatch(clearCart());
    }
  };

  if (quantity < 1) {
    return (
      <section>
        <header className={'text-center text-3xl p-10 text-gray-600'}>
          <h2 className={'my-10 font-medium'}>Shopping cart</h2>
          <h4 className={'font-bold '}>Your cart is empty.</h4>
        </header>
      </section>
    );
  }

  return (
    <section className={'m-10'}>
      <header>
        <h2 className={'text-3xl lg:text-4xl xl:text-5xl font-bold text-center p-4'}>Shopping cart</h2>
      </header>
      <div className={'grid grid-cols-10 gap-4 w-full'}>
        {cartItems.map((item) => (
          <div className={'col-start-2 col-span-8'} key={item.id}>
            <CartItem {...item} />
          </div>
        ))}
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
              'bg-white text-red-800 md:text-lg xl:text-xl border-2 border-red-700 rounded p-2 cursor-pointer hover:bg-gray-200'
            }
            onClick={handleClearCart}
          >
            delete all items
          </button>
        </div>
      </footer>
    </section>
  );
};

export default CartContainer;
