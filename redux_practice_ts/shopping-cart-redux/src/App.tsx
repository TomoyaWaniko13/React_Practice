import WindowWidth from './components/devComponents/WindowWidth.tsx';
import Navbar from './components/Navbar.tsx';
import CartContainer from './components/CartContainer.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { calculateTotalCost } from './features/cart/CartSlice.ts';
import Modal from './components/Modal.tsx';

export default function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((storeState) => storeState.cart);

  useEffect(() => {
    dispatch(calculateTotalCost());
  }, [cartItems]);

  return (
    <main>
      <Modal />
      <WindowWidth />
      <Navbar />
      <CartContainer />
    </main>
  );
}
