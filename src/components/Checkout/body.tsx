import { useState } from "react";
import CardForm from "./forms/Card";
import MomoForm from "./forms/Momo";
import Selector from "./Selector";
import CheckoutFooter from "./footer";

const Body = () => {
  const [paymentMethod, setPaymentMethod] = useState("momo");
  return (
    <div className="w-full h-full rounded-t-[2rem]  bg-cartBg flex flex-col">
      {/* Payment Selectors */}
      <Selector
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
      />
      {/* payment form  */}
        <div className='min-h-[60vh] mt-8'>
        {
            paymentMethod === "momo" ? <MomoForm /> : <CardForm />
        }
        </div>
        <CheckoutFooter />
    </div>
  );
};

export default Body;
