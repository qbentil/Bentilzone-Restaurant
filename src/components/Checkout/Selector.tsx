import { CreditCard, MOMO } from "../Assets";
const Selector = ({
  paymentMethod,
  setPaymentMethod,
}: {
  paymentMethod: string;
  setPaymentMethod: any;
}) => {
  return (
    <div className="my-3 flex w-full rounded-t-[2rem] justify-between p-3">
      <div
        className={`px-2 py-1 rounded-full flex items-center justify-center ${
          paymentMethod === "momo" && "bg-white"
        }`}
      >
        <label
          htmlFor="type1"
          className="flex items-center cursor-pointer"
          onClick={() => setPaymentMethod("momo")}
        >
          <input
            type="radio"
            className="form-radio h-5 w-5 text-orange-500 cursor-pointer"
            name="type"
            id="type1"
            checked={paymentMethod === "momo"}
          />
          <img src={MOMO} alt="" className="h-8 ml-3" />
        </label>
      </div>
      <div
        className={`px-2 py-1 rounded-full flex items-center justify-center ${
          paymentMethod === "card" && "bg-white"
        }`}
      >
        <label
          htmlFor="type2"
          className="flex items-center cursor-pointer"
          onClick={() => setPaymentMethod("card")}
        >
          <input
            type="radio"
            className="form-radio h-5 w-5 text-orange-500 cursor-pointer"
            name="type"
            id="type2"
            checked={paymentMethod === "card"}
          />
          <img src={CreditCard} alt="" className="h-8 ml-3" />
        </label>
      </div>
    </div>
  );
};

export default Selector;
