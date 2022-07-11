import {BiLock} from 'react-icons/bi'
import CardForm from "./forms/Card";
import CheckoutFooter from "./footer";
import MomoForm from "./forms/Momo";
import Selector from "./Selector";
import { useState } from "react";
import {motion} from 'framer-motion'
import { useStateValue } from '../../context/StateProvider';

const Body = () => {
  const [{cartTotal}] = useStateValue();
  const [paymentMethod, setPaymentMethod] = useState("momo");
  return (
    <div className="w-full h-full rounded-t-[2rem]  bg-cartBg flex flex-col">
      {/* Payment Selectors */}
      <Selector
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
      />
      {/* payment form  */}
        <div className='min-h-[50vh] mt-5'>
        {
            paymentMethod === "momo" ? <MomoForm /> : <CardForm />
        }
        <div className = 'w-full flex items-center justify-center my-2'>
          <p className='text-gray-300'>Amount Due: <span className='font-bold text-white'>{`GH₵${cartTotal}`}</span> </p>
        </div>
        {/* pay now button */}

            <div className= 'w-full flex items-center justify-center mt-4'>
                <motion.button whileTap={{scale:0.95}} className="flex items-center justify-center gap-2 w-[90%] p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 hover:from-orange-600 hover:to-orange-400 transition-all duration-75 ease-in-out text-gray-50 text-lg my-2 hover:shadow-lg">
                <BiLock className="" />
                   PAY NOW 
                </motion.button>
            </div>
        </div>
        <CheckoutFooter />
    </div>
  );
};

export default Body;
