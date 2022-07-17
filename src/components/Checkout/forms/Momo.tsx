import { useStateValue } from "../../../context/StateProvider";

const MomoForm = () => {
  const [{checkoutData}, dispatch] = useStateValue();
  const updateCheckoutData = (key:string, val:string) => {
    dispatch({
      type: "UPDATE_CHECKOUT_DATA",
      checkoutData: {
        ...checkoutData,
        [key]:val
      }
    });
  }
  return (
    <div className="w-full p-1 px-2 rounded-lg flex flex-col">
    <div className="w-full flex flex-col mb-2">
      <label
        htmlFor="provider"
        className="font-bold text-sm mb-1 text-gray-100"
      >
        Select Provider
      </label>
      <select
        id="provider"
        className="w-full px-3 py-2 mb-1 border-2 text-white border-gray-500 rounded-md focus:outline-none focus:border-orange-500 focus:text-orange-500 bg-cartItem transition-colors"
        onChange={(e) => updateCheckoutData("provider", e.target.value)}
      >
        <option value="default" selected disabled>Select Provider</option>
        <option value="MTN">MTN Mobile Money</option>
        <option value="airtel">Airtel Tigo Money</option>
        <option value="Vodafone">Vodafone Cash</option>

      </select>
    </div>
    <div className="w-full flex flex-col mb-2">
      <label
        htmlFor="name"
        className="font-bold text-sm mb-1 text-gray-100"
      >
        Account Name
      </label>
      <input
        type="text"
        id="name"
        className="w-full px-3 py-2 mb-1 border-2 text-white border-gray-500 rounded-md focus:outline-none focus:border-orange-500 focus:text-orange-500 bg-cartItem transition-colors"
        placeholder="Enter your name"
        autoComplete="off"
      />
    </div>
    <div className="w-full flex flex-col mb-2">
      <label
        htmlFor="number"
        className="font-bold text-sm mb-1 text-gray-100"
      >
        MOMO Number
      </label>
      <input
        type="text"
        id="number"
        className="w-full px-3 py-2 mb-1 border-2 text-white border-gray-500 rounded-md focus:outline-none focus:border-orange-500 focus:text-orange-500 bg-cartItem transition-colors"
        placeholder="Enter your number"
        autoComplete="off"
        onChange = {(e) => updateCheckoutData("phone", e.target.value)}
      />
    </div>
  </div>
  )
}

export default MomoForm