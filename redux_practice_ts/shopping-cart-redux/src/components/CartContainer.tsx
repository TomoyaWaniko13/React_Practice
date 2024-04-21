import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem.tsx';
import { removeAllItems } from '../features/cart/CartSlice.ts';

const CartContainer = () => {
  const { cartItems, numberOfItemsAddedToCart, totalCost } = useSelector((storeState) => storeState.cart);
  const dispatch = useDispatch();

  const onClickClearCart = () => {
    if (window.confirm('Are you sure you want to clear the cart?')) {
      dispatch(removeAllItems());
    }
  };

  if (numberOfItemsAddedToCart < 1) {
    return (
      <section>
        <header className={'text-center p-10 text-2xl font-semibold'}>
          <h2 className={'mb-5'}>Shopping cat</h2>
          <h4>Your cart is empty.</h4>
        </header>
      </section>
    );
  }

  return (
    <section className={'text-2xl py-10'}>
      <header className={'text-center'}>
        <h2 className={'font-semibold text-4xl my-10'}>Shopping cart</h2>
      </header>
      <div className={'grid grid-cols-10'}>
        <div className={'col-start-2 col-span-full font-medium w-full'}>
          {cartItems.map((item, index) => {
            return <CartItem key={index} {...item} />;
          })}
        </div>
      </div>
      <footer>
        <hr className='w-4/5 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700' />
        <div className={'grid grid-cols-10'}>
          <h4 className={'col-start-2'}>total</h4>
          <span className={'col-start-8 font-bold'}>{totalCost} JPY</span>
        </div>
        <div className={'text-center'}>
          <button
            className={'text-red-800 border-2 border-red-700 p-4 rounded-lg hover:bg-gray-200 mt-10'}
            onClick={onClickClearCart}
          >
            clear cart
          </button>
        </div>
      </footer>
    </section>
  );
};

export default CartContainer;
