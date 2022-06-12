import CartItem from './Item'
import CartTotal from './CartTotal'
import { useStateValue } from '../../context/StateProvider';

const CartBody = () => {
  const [{cartItems}] = useStateValue();
  return (
    <div className='w-full h-full rounded-t-[2rem]  bg-cartBg flex flex-col'>
        <div className='w-full h-[340px] md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-hidden'>
        {
          cartItems && cartItems.length > 0 && cartItems.map((item:any, index:number) => {
            return <CartItem key={index} item={item} />
          } )
        }
        </div>
        <CartTotal />
    </div>
  )
}

export default CartBody