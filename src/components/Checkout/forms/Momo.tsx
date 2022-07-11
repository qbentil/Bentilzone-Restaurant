import React from 'react'

const MomoForm = () => {
  return (
    <div className="w-full p-1 px-2 rounded-lg flex flex-col">
    <div className="w-full flex flex-col mb-2">
      <label
        htmlFor="network"
        className="font-bold text-sm mb-1 text-gray-100"
      >
        Select Network
      </label>
      <select
        id="network"
        className="w-full px-3 py-2 mb-1 border-2 text-white border-gray-500 rounded-md focus:outline-none focus:border-orange-500 focus:text-orange-500 bg-cartItem transition-colors"
      >
        <option value="default" selected disabled>Select Network</option>
        <option value="mtn">MTN Mobile Money</option>
        <option value="airtel">Airtel Tigo Money</option>
        <option value="vodafone">Vodafone Cash</option>

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
      />
    </div>
  </div>
  )
}

export default MomoForm