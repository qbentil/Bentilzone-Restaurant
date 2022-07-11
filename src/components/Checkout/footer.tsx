import { BsShieldLock } from "react-icons/bs";

const CheckoutFooter = () => {
  return (
    <div className="w-full flex-1 mt-2 md:mt-0 rounded bg-cartItem rounded-t-[2rem] px-8 py-2 flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-2">
        <BsShieldLock className="text-xl text-orange-600" />
        <p className="text-white">
          Secured by <span className="font-bold text-orange-600">BENSTACK</span>
        </p>
      </div>
    </div>
  );
};

export default CheckoutFooter;
