import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import { deleteItem, increase } from '../features/cart/CartSlice.ts';

const CartItem = ({ id, title, price, img, amount }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    // Confirmation dialog
    if (window.confirm('Are you sure you want to delete this item?')) {
      dispatch(deleteItem(id));
    }
  };

  return (
    <article className={'w-full grid grid-cols-10 gap-1 items-center'}>
      <div className={'w-full md:w-4/5  col-start-2 col-span-3 '}>
        <img src={img} alt='icon image' className={'w-full h-full object-cover'} />
      </div>
      <div className={'col-start-5 col-span-4  flex flex-col items-start p-4'}>
        <h4 className={'text-xl lg:text-2xl'}>{title}</h4>
        <h4 className={'text-xl lg:text-2xl text-emerald-800'}>{price} JPY</h4>
        <button
          className={'p-2 m-2 rounded-lg cursor-pointer border border-red-700 hover:bg-gray-200'}
          onClick={handleDelete}
        >
          delete
        </button>
      </div>
      <div className={'col-start-9 col-span-1 flex flex-col items-center justify-evenly'}>
        <button onClick={() => dispatch(increase(id))}>
          <CiCirclePlus size={30} className={'text-orange-700'} />
        </button>
        <p>{amount}</p>
        <button>
          <CiCircleMinus size={30} className={'text-orange-700'} />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
