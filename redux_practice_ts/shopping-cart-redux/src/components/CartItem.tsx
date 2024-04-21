import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import { addOneItem, deleteOneItem, removeOneItem } from '../features/cart/CartSlice.ts';

const CartItem = ({ id, title, price, img, numberOfEachItemInCart }) => {
  const dispatch = useDispatch();

  const onClickRemoveOneItem = () => dispatch(removeOneItem(id));

  const onClickAddOneItem = () => dispatch(addOneItem(id));

  const onClickDeleteOneItem = () => {
    if (numberOfEachItemInCart === 1) {
      dispatch(removeOneItem(id));
      dispatch(deleteOneItem(id));
      return;
    }
    dispatch(deleteOneItem(id));
  };

  return (
    <article className={'p-1 grid grid-cols-10  items-center sm:items-start'}>
      <img src={img} alt='icon image' className={'col-start-1 col-span-3 sm:col-start-2 '} />
      <div className={'col-start-5 col-span-4 sm:col-start-6 sm:col-span-3'}>
        <div className={'p-2 text-lg sm:text-xl md:text-2xl'}>
          <h4>{title}</h4>
          <h4 className={'mt-1 font-semibold'}>{price} JPY</h4>
          <button
            className={'mt-2 text-red-800 border-2 border-red-700 p-2 rounded-lg hover:bg-gray-200'}
            onClick={onClickRemoveOneItem}
          >
            remove
          </button>
        </div>
      </div>
      <div className={'text-center col-start-9 col-span-1'}>
        <button onClick={onClickAddOneItem}>
          <CiCirclePlus size={30} className={'text-red-800'} />
        </button>
        <p>{numberOfEachItemInCart}</p>
        <button onClick={onClickDeleteOneItem}>
          <CiCircleMinus size={30} className={'text-red-800'} />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
