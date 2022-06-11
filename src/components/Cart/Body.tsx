import CartItem from './Item'
import CartTotal from './CartTotal'

const CartBody = () => {
  return (
    <div className='w-full h-full rounded-t-[2rem]  bg-cartBg flex flex-col'>
        <div className='w-full h-[340px] md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-hidden'>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <CartTotal />
    </div>
  )
}

export default CartBody